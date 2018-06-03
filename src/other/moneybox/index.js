const coins = {
    9: 9,      // 9р - 9гр
    1: 100,    // 100р - 1гр
    2: 3       // 3р - 2гр
};

const weightAllMoney = 10;

class Moneybox {
    constructor(weightAllMoney) {
        this.coins = coins;
        this.startWeight = null;
        this.requestMoney = null;
        this.weight = Object.create(null);
        this.weightAllMoney = weightAllMoney;
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
        const { weight, weightAllMoney, coins } = this;
        let { startWeight } = this;

        while(startWeight <= weightAllMoney) {
            if (coins[startWeight]) {
                weight[startWeight] = coins[startWeight];
                startWeight++;
                continue;
            }

            // суда попадаем только когда у нас нет таких монет.
            // пытаемся найти текущий вес на основании монет которые у нас есть.

            // хранилище используемых ключей для подсчета нового веса.
            const usedKeys = Object.create(null);

            let temporaryPoint = startWeight - 1;

            // уменьшаем startWeight до тех пор, пока не найдем все пары.
            while (temporaryPoint >= this.startWeight) {
                if (usedKeys[temporaryPoint]) {
                    temporaryPoint--;
                    continue;
                }

                if (weight[temporaryPoint] && weight[startWeight - temporaryPoint]) {
                    if (weight[startWeight]) {
                        const newValue = weight[temporaryPoint] + weight[startWeight - temporaryPoint];
                        weight[startWeight] = Math.min(weight[startWeight], newValue);
                    } else {
                        weight[startWeight] = weight[temporaryPoint] + weight[startWeight - temporaryPoint];
                    }

                    usedKeys[startWeight] = true;
                    usedKeys[startWeight - temporaryPoint] = true;
                }

                temporaryPoint--;
            }

            startWeight++;
        }

        const minMoney = weight[this.weightAllMoney];
        return minMoney >= this.requestMoney;
    }
}

window.moneybox = new Moneybox(weightAllMoney); // weightMoney - вес монет без копилки
moneybox.setCoins(coins);
moneybox.setWeightAllCoins(20);

// console.log(moneybox.hasMoney(16));
