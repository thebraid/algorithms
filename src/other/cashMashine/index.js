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
    15000: 30,
    13000: 30,
    7000: 30,
};

class CashMachine {
    constructor() {
        this.cash = cash;
    }

    getMoney(value) {
        const transaction = Object.create(null);

        const [...money] = Object.keys(this.cash).sort((a, b) => b - a);

        money.forEach(m => {
            while(value > m) {
                if (!transaction[m]) {
                    transaction[m] = 0;
                }


                transaction[m] += 1;
                value -= m;
            }

            // проверка, есть ли остаток = 0  через другие номиналы

            // console.log(value);
        });

        // console.log(money);
        // console.log(transaction);

    }

    _hasRemainder(value) {
        let maxMoney = null;


    }

    addMoney(nominal, count) {
        if (!this.cash[nominal]) {
            this.cash[nominal] = 0;
        }

        this.cash[nominal] += count;
    }
}

const cashMachine = new CashMachine();
// cashMachine.addMoney(7000, 30);
// cashMachine.addMoney(7000, 20);
cashMachine.getMoney(68000);