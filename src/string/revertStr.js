const defaultStr = '1234 56 78'; // => 78 56 1234

const revertStr = (str = defaultStr) => {
    let resultStr = '';

    let to = str.length - 1;
    let from;


    for (let i = (str.length - 1); i >= 0; i-=1) {
        const el = str[i];

        if (el !== ' ' && i === 0) {
            from = i;

            while (from <= to) {
                resultStr += str[from];
                from += 1;
            }
        } else if (el === ' ') {
            from = i + 1;

            while (from <= to) {
                resultStr += str[from];
                console.log(resultStr);

                from += 1;
            }

            resultStr += ' ';

            to = i - 1;
        }
    }
    console.log(resultStr);
};

// revertStr();


const reverStr2 = (str = defaultStr) => {
    const length = str.length - 1;

    let resultArray = [];

    let temporaryArray = [];

    for (let i = length; i >= 0; i-=1) {
        const el = str[i];

        if (el !== ' ') {
            temporaryArray.unshift(el);
        } else {
            resultArray.push(temporaryArray);
            temporaryArray = [];
        }

        if (i === 0) {
            resultArray.push(temporaryArray);
        }
    }

    let resultStr = '';

    resultArray.forEach((arr, ind) => {
        if (ind === 0) {
            resultStr += arr.join('');
        } else {
            resultStr +=` ${arr.join('')}`;
        }
    });

    console.log(resultStr);

    // resultArray = resultArray.map(arr => {
    //     return arr.join('');
    // });
    // console.log(resultArray.join(' '))
};

// reverStr2();