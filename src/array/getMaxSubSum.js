const defaultArr = [-1, 2, 3, -9, 11, -5, -2, 35];

window.getMaxSubSum = (arr = defaultArr) => {
    let maxSum = 0;
    let partialSum = 0;

    for(let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        console.log(partialSum);
        maxSum = Math.max(maxSum, partialSum);

        if (partialSum < 0) {
            partialSum = 0;
        }
    }

    console.log(maxSum);
};

