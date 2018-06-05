const getType= (elem) => {
    return Object.prototype.toString.call(elem).slice(8, -1);
};


const deepClone = (obj) => {
    if(getType(obj) === 'Array') {
        return obj.map(deepClone);
    }

    if (getType(obj) === 'Object') {
        let newObj = Object.create(null);

        for (let key in obj) {
            newObj[key] = deepClone(obj[key]);
        }

        return newObj;
    }

    return obj;
};

const test = {a: 5, b: 6, c: [1,3, {t: 5}], d: new Date(), e: [[[[[0]]]]]};

const test2 = deepClone(test);
console.log(test2);