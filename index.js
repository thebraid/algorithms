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

const n = 4;

// сделать спираль
function createStairs(n) {
    let result = [];
    let init = 1;
    let x; // строка
    let y; // столбец
    let dx; // направление по оси Х
    let dy; // направление по оси Y

    for (x = 0; x < n; x++) {
        result[x] = [];
        for (y = 0; y < n; y++) {
            result[x][y] = 0;
        }
    }

    console.log(result);
}

// createStairs(n);


// пузырьковая сортировка
function bubbleSort(arr) {
    let length = arr.length;


    while (length) {
        console.log(length);
        sort(arr);
        length = length - 1;
    }

    function sort(arr) {
        for (let i = 0; i < (arr.length - 1); i++) {
            let val1 = arr[i];
            let val2 = arr[i+1];

            if (!val2) return;

            if (val1 > val2) {
                arr[i] = val2;
                arr[i+1] = val1;
            }
        }

    }

    console.log(arr);
}

// bSort([4,5, 3,2,1]);

// сортировка вставкой
// сортировка выбором