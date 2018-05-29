// выдача денег

const money = 7350;

const cash = {
    5000: 0,
    1000: 2,
    100: 100,
    50: 100
};

const variable = {
    5000: 0,
    1000: 0,
    100: 0,
    50: 0
};

const M1 = 5000;
const M2 = 1000;
const M3 = 100;
const M4 = 50;

const getCount = (num, variable) => {
    if (cash[M1] && (num - M1) >= 0) {
        variable[M1]+=1;
        cash[M1]-=1;
        getCount(num - M1, variable);
        return
    }

    if (cash[M2] && (num - M2) >= 0) {
        variable[M2]+=1;
        cash[M2]-=1;
        getCount(num - M2, variable);
        return
    }

    if (cash[M3] && (num - M3) >= 0) {
        variable[M3]+=1;
        cash[M3]-=1;
        getCount(num - M3, variable);
        return
    }


    if (cash[M4] && (num - 50) >= 0) {
        variable[50]+=1;
        cash[M4]-=1;
        getCount(num - 50, variable);
    }
};

getCount(7350, variable);

console.log(variable);
console.log(cash);

