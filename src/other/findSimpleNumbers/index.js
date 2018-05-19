const N = 100;

window.findSimpleNumber1 = (n = N) => {
    const arr = Array(n + 1).fill(true);
    const result = [2];
    const START = 3;

    // исключаем все четные значение начиная с 4
    for (let i = 4; i < arr.length; i += 2) {
        arr[i] = false;
    }

    for (let j = START; j < arr.length; j += 2) {
        if (!arr[j]) continue;
        result.push(j);

        let a = 2 * j;
        while (a < n) {
            arr[a] = false;

            a += j;
        }
    }

    console.log(result);

};

window.findSimpleNumber2 = (n = N) => {
    const result = [];

    next:
        for (let i = 2; i <= n; i++) {

            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue next;
            }

            result.push(i);
        }

    console.log(result);
};

// не учитываем четные числа
window.findSimpleNumber3 = (n = N) => {
    const result = [2];

    next:
        for (let i = 3; i <= n; i+=2) {

            for (let j = 3; j < i; j+=2) {
                if (i % j === 0) continue next;
            }

            result.push(i);
        }

    console.log(result);
};