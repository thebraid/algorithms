const fn1 = (x) => {

    console.log('сработала fn1');
    console.log(x);
};

const fn2 = (x) => {
    console.log('сработала fn2');
    return x;
};

const fn3 = (x) => {
    console.log('сработала fn3');
    return x;
};

const fn4 = (x) => {
    console.log('сработала fn4');
    return x*x;
};

const compose = function() {
    const arg = arguments;

    // возвращаем функцию, аргумент которой попадет в правую функцию (fn4);
    return function(x) {
        let resultFn;

        // проходим от fn4 до fn1
        for (let i = arg.length - 1; i >= 0; i-=1) {
            const fn = arg[i];

            // если эта первая функция с конца, то передаем ей аргумент Х
            if (i === arg.length - 1) {
                resultFn = fn(x);
            } else {
                resultFn = fn(resultFn);
            }
        }
    }
};

// compose(fn1, fn2, fn3, fn4)(5123);
