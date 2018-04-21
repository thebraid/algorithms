// value - число поиска
// n - кол-во элементов в массиве

window.binarySearch = (value, n = 16) => {
    let findIndex;
    let leftIndex = 0;
    let rightIndex = n;

    if (value > n) {
        console.log(`Значение ${value} нет в массиве`);
        return;
    }

    // заполняем массив значениями от 1 до n
    const arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    let exit = 0;

    function calc() {
        // находим индекс середины массива
        let index = Math.floor((rightIndex + leftIndex) / 2);
        // console.log(arr[index]);
        if (value < arr[index]) {
            console.log('<');
            console.log('arr[index]');
            console.log(arr[index]);
            rightIndex = index;

            exit += 1;
            if (exit > 30) return;

            calc();
            //left
        } else if (value > arr[index]) {
            leftIndex = index;
            calc();
            //right
        } else {
            // equal
            findIndex = index;
            console.log(findIndex);
        }
    }

    calc();

    console.log(arr);

    // console.log(arr);
};

binarySearch(-1);