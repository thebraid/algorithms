// value - число поиска
// arr - массив поиска

function generateArray(n) {
    const arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

const myArr = generateArray(30);

window.binarySearch = (value = 13, arr = myArr) => {
    console.log(`Ищем значение ${value} в массиве:`);
    console.log(arr);

    const n = arr.length - 1;
    let leftIndex = 0;
    let rightIndex = n;

    if (value > arr[n]) {
        console.log(`Значение ${value} нет в массиве`);
        return;
    }

    function calc() {
        // 2 указателя индексов - соседи
        if (rightIndex - leftIndex === 1) {
            if (arr[leftIndex] === value) {
                console.log(leftIndex)
            } else if (arr[rightIndex] === value) {
                console.log(rightIndex)
            } else {
                console.log('найденного значения нет');
                return;
            }
        }

        let index = Math.floor((rightIndex + leftIndex) / 2);
        if (value < arr[index]) {
            rightIndex = index;
            calc();
        } else if (value > arr[index]) {
            leftIndex = index;
            calc();
        } else {
            console.log(`index = ${index}`);
        }
    }

    calc();
};