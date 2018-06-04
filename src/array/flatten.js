const initArr = [1, [2], [3, [[[4]]]]];

const flatten = (arr = initArr) => {
    const result = [];

    const recursive = (value) => {
        if (typeof value === 'number') {
            result.push(value);
        } else {
            value.forEach(recursive);
        }
    };

    recursive(arr);

    console.log(result);
};

// flatten();

export default flatten;


const flatten2 = (arr = initArr) => {
    return arr.reduce((resArr, item) => Array.isArray(item) ? resArr.concat(flatten2(item)) : resArr.concat(item), [])
};

