const bubbleSort = require('./sorts/bubbleSort');
const choiceSort = require('./sorts/choiceSort');
const insertSort = require('./sorts/insertSort');
const reduceArray = require('./reduce/reduceArray');


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
// расставить 8 ферзей
// отрезок