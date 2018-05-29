const generateNumber = (N) => {
    const array = [];

    let start = 1;

    while (start <= N) {
        array.push(start);
        start++;
    }

    return array;
};


window.permutation = (N = 5) => {
    const numbers = generateNumber(N);
    const result = [];

    const recursive = (inner, balance) => {
        if (balance.length === 0) {
            result.push(inner);
            return;
        }

        balance.forEach((elem, ind) => {
            const newInner = [...inner];
            const newBalance = [...balance];
            newInner.push(elem);
            newBalance.splice(ind,1);

            recursive(newInner, newBalance);
        })

    };

    recursive([], numbers);
    console.log(result);
};

