/**
Модули. Есть набор js файлов. Они зависят друг от друга. Есть json файл в котором описаны зависимости.
Они описанны в виде массива обьектов. Каждый объект - это зависимость между модулями с 2 полями "что зависит" и "от
чего зависит". В этих полях пути к файлам. Или можно считать, что все файлы лежат в одной папке и значения полей -
просто названия файлов. Нужно получить массив путей (названий) файлов, который задает, в каком порядке их склеить в
бандл. Если найдена циклическая зависимость, нужно выдавать ошибку.
*/

import depends from './depends.json';

/**
    Структура зависимостей модулей

    1
    └───2
        ├───3
        │   └───4
        └───4
    5
    └───4

    8
    ├───7
    │   └───4
    └───6
        └───5

    очередность 4, 3, 2, 1, 5, 7, 6, 8
 */


import dependsWithError from './dependsWithError.json';

/**
 Структура зависимостей модулей с циклической зависимостью

    1
    └───2
        ├───3
        │   └───4
        └───4   └───1
            └───1

 */


class Modules {
    constructor(depends) {
        this.store = new Map();
        this.resultImport = [];
        this.history = Object.create(null);
        this.isError = false;
        this.depends = depends;
    }

    initStore() {
        const { depends, store } = this;

        depends.forEach(({name, depend}) => {
            if(!store.has(name)) store.set(name, new Set());

            store.get(name).add({depend});
        });
    }

    recurciveFindPaths(key, localHistory) {
        const { history, resultImport, store } = this;

        if (history[key]) return;

        const modules = Array.from(store.get(key));

        for (let i = 0; i < modules.length; i++) {
            const module = modules[i];
            if (history[module.depend]) continue;

            if (localHistory[module.depend]) {
                console.log(`циклическая зависимость на модуле ${key} => ${module.depend}`);
                this.isError = true;
                return;
            }


            if (!store.has(module.depend)) {
                localHistory[module.depend] = true; // встретили модуль в рамках текущей рекурсии
                resultImport.push(module.depend);
                history[module.depend] = true; // встретили модуль, повторно импортить не будем
            } else {
                localHistory[module.depend] = true; // встретили модуль в рамках текущей рекурсии
                this.recurciveFindPaths(module.depend, localHistory);
                resultImport.push(module.depend);
                history[module.depend] = true; // встретили модуль, повторно импортить не будем
            }
        }
    };

    findPaths() {
        const { store, resultImport, history } = this;

        for(let key of store.keys()) {
            if (history[key]) continue;

            const localHistory = Object.create(null); // история вызова модулей в рамках одной рекурсии.
            localHistory[key] = true; // если встретим в рекурсии эти значения опять, сгенерируем ошибку

            this.recurciveFindPaths(key, localHistory);
            resultImport.push(key);
            history[key] = true;
        }
    }

    showResult() {
        const { isError, resultImport } = this;

        if (!isError) {
            console.log(resultImport);
        }
    }

    init() {
        this.initStore();
        this.findPaths();
        this.showResult();
    }

    reset() {
        this.store.clear();
        this.resultImport = [];
        this.history = Object.create(null);
        this.isError = false;
    }

    changeDepends(newDepends) {
        this.reset();

        this.depends = newDepends;
        this.init();
    }

    makeMistake() {
        this.changeDepends(dependsWithError);
    }
}

window.modules = new Modules(depends);
modules.init();



// const store = new Map();
// const resultImport = [];
// const history = Object.create(null);
//
// let isError = false;
//
// depends.forEach(({name, depend}) => {
//     if(!store.has(name)) store.set(name, new Set());
//
//     store.get(name).add({depend});
// });
//
// const recurciveFindPaths = (key, localHistory) => {
//     if (history[key]) return;
//
//     const modules = Array.from(store.get(key));
//
//     for (let i = 0; i < modules.length; i++) {
//         const module = modules[i];
//         if (history[module.depend]) continue;
//
//         if (localHistory[module.depend]) {
//             console.log(`циклическая зависимость на модуле ${key} => ${module.depend}`);
//             isError = true;
//             return;
//         }
//
//
//         if (!store.has(module.depend)) {
//             localHistory[module.depend] = true;
//             resultImport.push(module.depend);
//             history[module.depend] = true;
//         } else {
//             localHistory[module.depend] = true;
//             recurciveFindPaths(module.depend, localHistory);
//             resultImport.push(module.depend);
//             history[module.depend] = true;
//         }
//     }
// };
//
// for(let [key, module] of store) {
//     if (history[key]) continue;
//
//     const localHistory = Object.create(null); // история вызова модулей в рамках одной рекурсии.
//     localHistory[key] = true; // значение key было, если встретим в рекурсии эти значения опять, сгенерируем ошибку
//
//     recurciveFindPaths(key, localHistory);
//     resultImport.push(key);
//     history[key] = true;
// }
//
// if (!isError) {
//     console.log('-------');
//     console.log(resultImport);
// }