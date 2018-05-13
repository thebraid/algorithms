window.insertSort = function(arr = [...defaultArray]) {
    let length = arr.length - 1;

    for (let i = 0; i <= length; i++) {
        if (i === 0) continue;

        let y = i;
        while(y) {
            if (arr[y] < arr[y-1]) {
                let small = arr[y];
                arr[y] = arr[y-1];
                arr[y-1] = small;
                y -= 1;
            } else {
                // предыдущий элемент массива меньше, можно работать со следующийм элементом
                break;
            }
        }
    }

    console.log(arr);
};
