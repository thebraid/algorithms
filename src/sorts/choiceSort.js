window.choiceSort = function (arr = [...defaultArray]) {
    let length = arr.length;

    function getMaxIndex(arr) {
        let max = arr[0];
        let maxInd = 0;

        for (let i = 0; i < length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxInd = i;
            }
        }

        return maxInd;
    }

    while(length !== 0) {
        let maxIndex = getMaxIndex(arr);

        // если максимальный элемент самый последний, пропускаем на след. итерацию
        if (maxIndex === length) {
            length = length - 1;
            continue;
        }

        // иначе меняем местами
        const last = arr[length - 1];

        arr[length - 1] = arr[maxIndex];
        arr[maxIndex] = last;


        // теперь ищем максимальный элемент в суженном диапазоне
        length = length - 1;
    }

    console.log(arr);
};