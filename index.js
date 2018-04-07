const data = [
    {name: 'test1', value: 53},
    {name: 'test2', value: 2},
];

const reduceArray = (array = data) => {
    const resultObj = {};

    for (let i = 0; i < array.length; i++) {
        resultObj[array[i].name] = array[i].value;
    }

    console.log(resultObj);
};


