// польская нотация
const str = '- * / 15 - 7 + 1 1 3 + 2 + 1 1';

const isSign = (str) => {
    switch (str) {
        case '-':
        case '+':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
};

const calc = (sign, value1, value2) => {
    switch(sign) {
        case '-':
            return value1 - value2;
        case '+':
            return value1 + value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
};

const collapse = (str) => {
    let start = 0;

    while(true) {
        if (str[start] === ' ') {
            start += 1;
            continue;
        }

        if (!isNaN(parseInt(str[start]) && isFinite(str[start]))) {
            break;
        } else {
            start += 1;
        }
    }

    for (let i = str.length - 1; i >= start; i-=1) {

        if (isSign(str[i])) {
            // нашли знак, ищем первые 2 числа справа
            const op = str[i];

            const operand = [];

            let j;
            let number = '';

            // +2 (1й знак, 2й пробел)
            // находим все числа после знака
            for (j = i + 2; j < str.length; j++) {
                if (operand.length === 2) break;

                if (str[j] === ' ') {
                    operand.push(Number(number));
                    number = '';
                    continue;
                }

                if (j === str.length - 1) {
                    number = number + '' + str[j];
                    operand.push(Number(number));
                    continue;
                }

                if (!isNaN(parseInt(str[j])) && isFinite(str[j])) {
                    number = number + '' + str[j];
                }
            }

            str = (`${str.slice(0, i)}${calc(op, operand[0], operand[1])} ${str.slice(j)}`).trim();
        }
    }

    return str;
};

const polishNotation = (str) => {
    let resultStr = collapse(str);

    const recursive = (resultStr) => {
        const op = resultStr[0];

        let number = '';

        let i;
        for (i = resultStr.length - 1; i >= 0; i -= 1) {
            if (resultStr[i] === ' ') {
                break;
            } else {
                number = number + '' + resultStr[i];
            }
        }

        resultStr = resultStr.slice(1, i).trim();

        if (!isSign(resultStr[0])) {
            return calc(op, Number(resultStr), number);
        } else {
            return calc(op, recursive(resultStr), number);
        }
    };


    return recursive(resultStr);
};

// const result = polishNotation(str);
// console.log(result);