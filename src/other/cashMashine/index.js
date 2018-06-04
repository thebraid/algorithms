// выдача денег

// const money = 7350;
//
// const cash = {
//     5000: 0,
//     1000: 2,
//     100: 100,
//     50: 100
// };
//
// const variable = {
//     5000: 0,
//     1000: 0,
//     100: 0,
//     50: 0
// };
//
// const M1 = 5000;
// const M2 = 1000;
// const M3 = 100;
// const M4 = 50;
//
// const getCount = (num, variable) => {
//     if (cash[M1] && (num - M1) >= 0) {
//         variable[M1]+=1;
//         cash[M1]-=1;
//         getCount(num - M1, variable);
//         return
//     }
//
//     if (cash[M2] && (num - M2) >= 0) {
//         variable[M2]+=1;
//         cash[M2]-=1;
//         getCount(num - M2, variable);
//         return
//     }
//
//     if (cash[M3] && (num - M3) >= 0) {
//         variable[M3]+=1;
//         cash[M3]-=1;
//         getCount(num - M3, variable);
//         return
//     }
//
//
//     if (cash[M4] && (num - 50) >= 0) {
//         variable[50]+=1;
//         cash[M4]-=1;
//         getCount(num - 50, variable);
//     }
// };

// getCount(7350, variable);

// console.log(variable);
// console.log(cash);

const cash = {
    15000: 10,
    13000: 10,
    7000: 10,
};

class CashMachine {
    constructor() {
        this.cash = cash;
        this.step = null;
        this.start = null;
    }

    clear() {
        this.cash = Object.create(null);
    }

    getMoney(value) {
        this.init();
        let cloneCash = this.cash;
        let start = this.start;

        const result = Object.create(null);
        const tempCashKeys = Object.keys(cloneCash); // 15000, 13000, 7000

        while(start <= 20000) {
            const keyResult = Object.keys(result); // 7000, 13000, 14000...

            if (!keyResult.length) {
                result[start] = [start];
                cloneCash[start] -= 1;
                start += this.step;
                continue;
            }

            if (cloneCash[start]) {
                result[start] = [start];
                cloneCash[start] -= 1;
                start += this.step;
                continue;
            }

            // нету такого ключа, пытаемся подобрать.
            for (let i = 0; i < tempCashKeys.length; i++) {
                const currentCash = Number(tempCashKeys[i]);

                if (result[start - currentCash] && (start - currentCash >= 0)) {
                    cloneCash[currentCash] -= 1;
                    console.log(start);
                    // console.log(currentCash);
                    result[start] = result[start - currentCash].concat(currentCash);
                    break;
                }
            }

            start += this.step;
        }

        console.log(cloneCash);

    }

    addMoney(nominal, count) {
        if (!this.cash[nominal]) {
            this.cash[nominal] = 0;
        }

        this.cash[nominal] += count;
    }

    setStep() {
        const cashKeys = Object.keys(this.cash).sort((a, b) => a - b);

        // элемент с которого начинаем находить значения
        this.start = Number(cashKeys[0]);

        // если только 1 номинал банкнот, то шаг = номиналу банкноты
        if (cashKeys.length === 1) {
            this.step = cashKeys[0];
            return;
        }

        const min = cashKeys[0];
        const nextMin = cashKeys[1];

        if (nextMin % min === 0) {
            this.step = Number(min);
        } else if (nextMin % min >= 1000){
            this.step = 1000;
        } else {
            this.step = nextMin % min;
        }
    }

    init() {
        this.setStep();
    }
}

const cashMachine = new CashMachine();
// cashMachine.init();
//
// cashMachine.addMoney(15000, 0);
// // cashMachine.addMoney(7000, 20);
// cashMachine.getMoney(68000);
