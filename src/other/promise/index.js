class MyPromise {
    constructor(fn) {
        this.stage = 'pending'; // fulfilled, rejected
        this.result = undefined;
        this.callback = [];

        this.handle = this.handle.bind(this);
        this.onFulfilled = this.onFulfilled.bind(this);
        this.onRejected = this.onRejected.bind(this);
        this.doResolve = this.doResolve.bind(this);

        // сразу же вызываем начальную функцию fn
        this.doResolve(fn);
    }

    onFulfilled(result) {
        this.stage = 'fulfilled';
        this.result = result;

        // промис выполнился, вызываем все сохраненные fulfilled функции
        this.callback.forEach(this.handle);
        this.callback = [];
    }

    onRejected(error) {
        this.stage = 'rejected';
        this.result = error;

        // промис отклонен, вызываем все сохраненные reject функции
        this.callback.forEach(this.handle);
        this.callback = [];
    }

    // функция для обохда по очереди всех сохраненных функций onFulfilled и onRejected,
    // где handler - элемент массива callback вида {onFulfilled: onFulfilled, onRejected: onRejected}
    handle(handler) {
        if (this.stage === 'pending') {
            this.callback.push(handler);
            return;
        }

        if (this.stage === 'fulfilled') {
            handler.onFulfilled(this.result);
            return;
        }

        if (this.stage === 'reject') {
            handler.onRejected(this.result);
        }
    }

    // Отклоняет вызов onFulfilled или onRejected, если stage уже установлен
    doResolve(fn) {
        fn( (value) => {
            if (this.stage !== 'pending') return;
            this.onFulfilled(value);
        }, (error) => {
            if (this.stage !== 'pending') return;
            this.onRejected(error);
        })
    }

    then(onFulfilled, onRejected) {
        // на текущий момент есть функция в процессе выполнения, сохраняем фунции для дальнейшего вызова.
        if (this.stage === 'pending') {
            this.callback.push({
                onFulfilled,
                onRejected
            });

        // промис успешно выполнился, вызываем onFulfilled
        } else if (this.stage === 'fulfilled') {
            this.stage = 'pending';
            onFulfilled.call(this, this.result);

        // промис завершился с ошибкой, вызываем onRejected
        } else {
            this.stage = 'pending';
            onRejected.call(this, this.result);
        }

        return this;
    }
}

const mypromise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('resolve'), 1000);
    setTimeout(() => reject('reject'), 2000); // игнорируется, т.к. состояние уже 'fulfilled'
})
    .then(
        (result) => { // onFulfilled
            console.log(result);
            return 'test 5';
        },
        (error) => console.log('then error1')    // onRejected
    )
    .then(
        (result) => console.log(result), // onFulfilled
        (error) => console.log('then error2')    // onRejected
    );


/**
 * в консоль через 1000мс выводит это:
 * "resolve" и 2й then тоже выводит "resolve" а должен выводить результат от предыдущего then, т.е. "test 5"
 */