// пузырьковая сортировка

window.bubbleSort = function (arr = [...defaultArray]) {
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
};