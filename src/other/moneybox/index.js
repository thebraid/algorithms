const coins = {
    9: 9,      // 9р - 9гр
    1: 100,    // 100р - 1гр
    2: 3       // 3р - 2гр
};

const weightAllMoney = 10; // weightMoney - вес монет без копилки

class Moneybox {
    constructor(weightAllMoney = 10) {
        this.coins = coins;
        this.requestMoney = null;
        this.weightAllMoney = weightAllMoney;
        this.startWeight = 1;
        this.weight = Object.create(null);
    }

    setCoins(coins) {
        this.coins = coins;
        this.setStartWeight();
    }

    setWeightAllCoins(weight) {
        this.weightAllMoney = weight;
    }

    setRequestMoney(money) {
        this.requestMoney = money;
    }


    setStartWeight() {
        const sortValues = Object.keys(this.coins).sort((a, b) => a - b);
        this.startWeight = sortValues[0];
    }

    hasMoney(money) {
        this.setRequestMoney(money);

        return this.calc();
    }

    calc() {
        let start = this.startWeight; // текущий вес.
        const coins = this.coins;
        const weight = this.weight;   // хранилище всех найденных сумм

        // увеличиваем вес до тех пор, пока не достигнем заданный
        while(start <= this.weightAllMoney) {
            const tempWeight = Object.keys(weight);

            // если у нас хранилище пустое, то запишем нашу первую монету
            if (!tempWeight.length) {
                weight[start] = coins[start];
                start++;
                continue;
            }

            const tempCoins = Object.keys(coins); // получаем веса всех монет, 1,2 и 9.
            const tempResult = []; // массив куда будем записывать все найденные результаты и выбирать меньшее

            for (let i = 0; i < tempCoins.length; i++) {
                const currentCoin = Number(tempCoins[i]); // сначало = 1, затем 2 и 9.

                // если например для текущей позиции start = 7, есть ключи [7-1] = 6 или [7-2] = 5, то добавляем
                // сумму [7-1] + 1 и [7-2] + 2.
                if (weight[start - currentCoin] && (start - currentCoin >= 0)) {
                    tempResult.push(Number(weight[start - currentCoin]) + Number(coins[currentCoin]));
                }

                // если у нас есть монета с таким же весом, то тоже её добавим в массив для сравнения.
                if (start === currentCoin) {
                    tempResult.push(coins[currentCoin])
                }
            }

            // если у нас есть несколько результатов для 1го веса, выбираем наименьший
            if (tempResult.length) {
                weight[start] = Math.min.apply(null, tempResult);
            }

            // увеличиваем текущий вес монет на 1.
            start++;
        }

        // проверяем, найденное значение для требуемого веса, если оно >= заданного, то сумму набрать можно
        return weight[this.weightAllMoney] >= this.requestMoney;
    }
}

window.moneybox = new Moneybox();

// moneybox.setCoins(coins);
// moneybox.setWeightAllCoins(100);
// console.log(moneybox.hasMoney(16));








// Старая версия.
// const coins = {
//     9: 9,      // 9р - 9гр
//     1: 100,    // 100р - 1гр
//     2: 3       // 3р - 2гр
// };
//
// const weightAllMoney = 10;
//
// class Moneybox {
//     constructor(weightAllMoney) {
//         this.coins = coins;
//         this.startWeight = null;
//         this.requestMoney = null;
//         this.weight = Object.create(null);
//         this.weightAllMoney = weightAllMoney;
//     }
//
//     setCoins(coins) {
//         this.coins = coins;
//         this.setStartWeight();
//     }
//
//     setWeightAllCoins(weight) {
//         this.weightAllMoney = weight;
//     }
//
//     setRequestMoney(money) {
//         this.requestMoney = money;
//     }
//
//
//     setStartWeight() {
//         const sortValues = Object.keys(this.coins).sort((a, b) => a - b);
//         this.startWeight = sortValues[0];
//     }
//
//     hasMoney(money) {
//         this.setRequestMoney(money);
//
//         return this.calc();
//     }
//
//     calc() {
//         const { weight, weightAllMoney, coins } = this;
//         let { startWeight } = this;
//
//         while(startWeight <= weightAllMoney) {
//             if (coins[startWeight]) {
//                 weight[startWeight] = coins[startWeight];
//                 startWeight++;
//                 continue;
//             }
//
//             // суда попадаем только когда у нас нет таких монет.
//             // пытаемся найти текущий вес на основании монет которые у нас есть.
//
//             // хранилище используемых ключей для подсчета нового веса.
//             const usedKeys = Object.create(null);
//
//             let temporaryPoint = startWeight - 1;
//
//             // уменьшаем startWeight до тех пор, пока не найдем все пары.
//             while (temporaryPoint >= this.startWeight) {
//                 if (usedKeys[temporaryPoint]) {
//                     temporaryPoint--;
//                     continue;
//                 }
//
//                 if (weight[temporaryPoint] && weight[startWeight - temporaryPoint]) {
//                     if (weight[startWeight]) {
//                         const newValue = weight[temporaryPoint] + weight[startWeight - temporaryPoint];
//                         weight[startWeight] = Math.min(weight[startWeight], newValue);
//                     } else {
//                         weight[startWeight] = weight[temporaryPoint] + weight[startWeight - temporaryPoint];
//                     }
//
//                     usedKeys[startWeight] = true;
//                     usedKeys[startWeight - temporaryPoint] = true;
//                 }
//
//                 temporaryPoint--;
//             }
//
//             startWeight++;
//         }
//
//         const minMoney = weight[this.weightAllMoney];
//         return minMoney >= this.requestMoney;
//     }
// }
//
// window.moneybox = new Moneybox(weightAllMoney); // weightMoney - вес монет без копилки
// // moneybox.setCoins(coins);
// // moneybox.setWeightAllCoins(20);
// //
// // console.log(moneybox.hasMoney(16));
