const cash = {
    5000: 10,
    2000: 10,
};

class CashMachine {
    constructor() {
        this.cash = cash;
        this.step = null;
        this.start = null;
    }

    clear() {
        this.cash = Object.create(null);
    }

    getMoney(needMoney) {
        this.init();
        let {
            cash, // доступные банкноты
            start // текущая сумма банкнот
        } = this;

        const store = Object.create(null);
        const banknotes = Object.keys(cash); // 5000, 2000

        // увеличиваем начальное значение start через каждый шаг, пока не достигнем запрашиваемой суммы
        while(start <= needMoney) {
            const sumResult = Object.keys(store); // 2000, 4000, 5000, 6000

            if (!sumResult.length) {
                store[start] = {
                    cash: {
                        ...cash,
                        [start]: cash[start]-1
                    },
                    values:[start]
                };
                start += this.step;
                continue;
            }

            if (cash[start]) {
                store[start] = {
                    cash: {
                        ...cash,
                        [start]: cash[start]-1
                    },
                    values: [start]
                };
                start += this.step;
                continue;
            }

            // нету такой банкноты, пытаемся подобрать из ранее полученных результатов.
            for (let i = 0; i < banknotes.length; i++) {
                const banknote = Number(banknotes[i]);

                if (store[start - banknote] && (start - banknote >= 0)) {

                    // если банкноты закончились, пытаемся заполнить другими банкнотами не достающую сумму
                    if (store[start - banknote].cash[banknote] === 0) continue;

                    store[start] = {
                        cash: {
                            ...store[start - banknote].cash,
                            [banknote]: store[start - banknote].cash[banknote] - 1
                        },
                        values: store[start - banknote].values.concat(banknote)
                    };

                    // нашли нужную банкноту, не рассматриваем остальные
                    break;
                }
            }

            // увеличиваем сумму на заданный шаг.
            start += this.step;
        }

        //
        if (!store[needMoney]) {
            console.log('Нельзя выдать запрашиваемую сумму \n\n');
            return;
        }

        this.cash = {...this.cash, ...store[needMoney].cash};
        console.log(`Успешно ${needMoney} сняли купюрами ${store[needMoney].values}`);
        console.log('Остались купюры: ', this.cash, '\n\n');
    }

    addMoney(banknote, count) {
        if (!this.cash[banknote]) {
            this.cash[banknote] = 0;
        }

        this.cash[banknote] += count;
    }

    setStep() {
        const cashKeys = Object.keys(this.cash).sort((a, b) => a - b);

        // элемент с которого начинаем находить значения
        this.start = Number(cashKeys[0]);

        // если только 1 номинал банкнот, то шаг = номиналу банкноты
        if (cashKeys.length === 1) {
            this.step = cashKeys[0];
            return;
        }

        const min = cashKeys[0];
        const nextMin = cashKeys[1];

        if (nextMin % min === 0) {
            this.step = Number(min);
        } else if (nextMin % min >= 1000){
            this.step = 1000;
        } else {
            this.step = nextMin % min;
        }
    }

    init() {
        this.setStep();
    }
}

window.cashMachine = new CashMachine();
cashMachine.init();

// cashMachine.addMoney(15000, 0);
// // cashMachine.addMoney(7000, 20);
// cashMachine.getMoney(6000);








// Устаревший вариант
// const cash = {
//     5000: 10,
//     2000: 10,
// };
//
// class CashMachine {
//     constructor() {
//         this.cash = cash;
//         this.step = null;
//         this.start = null;
//     }
//
//     clear() {
//         this.cash = Object.create(null);
//     }
//
//     getMoney(value) {
//         this.init();
//         let cloneCash = this.cash;
//         let start = this.start;
//
//         const result = Object.create(null);
//         const tempCashKeys = Object.keys(cloneCash); // 5000, 2000
//
//         while(start <= value) {
//             const keyResult = Object.keys(result); // 2000, 4000, 5000, 6000, ...
//
//             if (!keyResult.length) {
//                 result[start] = [start];
//                 // cloneCash[start] -= 1;
//                 start += this.step;
//                 continue;
//             }
//
//             if (cloneCash[start]) {
//                 result[start] = [start];
//                 // cloneCash[start] -= 1;
//                 start += this.step;
//                 continue;
//             }
//
//             // нету такого ключа, пытаемся подобрать.
//             for (let i = 0; i < tempCashKeys.length; i++) {
//                 const currentCash = Number(tempCashKeys[i]);
//
//                 if (result[start - currentCash] && (start - currentCash >= 0)) {
//                     // cloneCash[currentCash] -= 1;
//                     result[start] = result[start - currentCash].concat(currentCash);
//                     break;
//                 }
//             }
//
//             start += this.step;
//         }
//
//         console.log(result);
//         console.log(cloneCash);
//
//     }
//
//     addMoney(nominal, count) {
//         if (!this.cash[nominal]) {
//             this.cash[nominal] = 0;
//         }
//
//         this.cash[nominal] += count;
//     }
//
//     setStep() {
//         const cashKeys = Object.keys(this.cash).sort((a, b) => a - b);
//
//         // элемент с которого начинаем находить значения
//         this.start = Number(cashKeys[0]);
//
//         // если только 1 номинал банкнот, то шаг = номиналу банкноты
//         if (cashKeys.length === 1) {
//             this.step = cashKeys[0];
//             return;
//         }
//
//         const min = cashKeys[0];
//         const nextMin = cashKeys[1];
//
//         if (nextMin % min === 0) {
//             this.step = Number(min);
//         } else if (nextMin % min >= 1000){
//             this.step = 1000;
//         } else {
//             this.step = nextMin % min;
//         }
//     }
//
//     init() {
//         this.setStep();
//     }
// }
//
// const cashMachine = new CashMachine();
// cashMachine.init();
//
// // cashMachine.addMoney(15000, 0);
// // // cashMachine.addMoney(7000, 20);
// cashMachine.getMoney(6000);