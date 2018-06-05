const str = 'AAABBBAAAADDDDAFF';

window.reduceStr = (str) => {
    let resultStr = '';
    let letter = str[0];
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (letter === str[i]) {
            count++;

            if (i === str.length - 1){
                resultStr += (count > 1) ? `${letter}${count}` : letter;
            }
        } else {
            resultStr += (count > 1) ? `${letter}${count}` : letter;

            letter = str[i];
            count = 1;
        }
    }

    console.log(resultStr);
};

// reduceStr(str);