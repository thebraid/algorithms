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


const initArr = [5,4,3,2,1];

// пузырьковая сортировка
function bubbleSort(arr = initArr) {
    let length = arr.length;


    while (length) {
        sort(arr);
        length = length - 1;
    }

    function sort(arr) {
        for (let i = 0; i < (arr.length - 1); i++) {
            let val1 = arr[i];
            let val2 = arr[i+1];

            if (typeof val2 === 'undefined') return;

            if (val1 > val2) {
                arr[i] = val2;
                arr[i+1] = val1;
            }
        }

    }

    console.log(arr);
}

// bSort([4,5, 3,2,1]);

// сортировка выбором
// сортировка вставкой

const choiceArr = [7,4,7,9,4,2,7,4,65,24,54,23,12,64,32,36,83,12,15];

function choiceSort(arr = choiceArr) {
    let length = arr.length - 1;

    function getMaxIndex(arr) {
        let max = 0;
        let maxInd = 0;

        for (let i = 0; i <= length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxInd = i;
            }
        }

        return maxInd;
    }

    while(length !== -1) {
        let maxIndex = getMaxIndex(arr);
        let last = arr[length];

        if (maxIndex === length -1) {
            length = length - 1;
            continue;
        }

        arr[length] = arr[maxIndex];
        arr[maxIndex] = last;

        length = length - 1;
    }

    console.log(arr);
}

choiceSort();

// расставить 8 ферзей
// отрезок