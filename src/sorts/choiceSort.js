// сортировка выбором
const choiceArr = [7,4,7,9,4,2,7,4,65,24,54,23,12,64,32,36,83,12,15];

window.choiceSort = function (arr = choiceArr) {
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
};