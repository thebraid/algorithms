// сортировка только четных/не четных элементов массива
const defaultArray = [9,8,7,6,5,4,3,2,1]; // 1,8,3,6,5,4,7,2,9

const sort = (arr = defaultArray, isEven = true) => {

    for (let i = 0; i < arr.length; i+=1) {
        if (isEven) {
            if (arr[i] % 2 === 0) continue;
        } else {
            if (arr[i] % 2 !== 0) continue;
        }


        for(let j = i+1; j < arr.length; j+=1) {
            if (isEven) {
                if (arr[j] % 2 === 0) continue;
            } else {
                if (arr[j] % 2 !== 0) continue;
            }

            if (arr[j] < arr[i]) {
                const oldValue = arr[i];
                arr[i] = arr[j];
                arr[j] = oldValue;
            }
        }
    }

    console.log(arr);
};

// sort();

const sort2 = (arr = defaultArray, isEven = true) => {
    const store = Object.create(null);
    const newArr = [];
    const resultArr = [];

    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] % 2 === 0) {
            store[i] = arr[i];
        } else {
            newArr.push(arr[i]);
        }
    }

    newArr.sort();

    for (let i = 0; i < arr.length; i+=1) {
        if (store[i]) {
            resultArr.push(store[i]);
        } else {
            resultArr.push(newArr.shift());
        }
    }
    console.log(resultArr);
    console.log(store);
};

// sort2();
