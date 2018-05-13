const test_str = '{asda asdadasd (asdasd} 5434534}';

window.bracketsBalance = function (str = test_str ) {
  const stack = [];

  const openBrackets = {
    '{': true,
    '(': true,
    '[': true,
  };

  const closeBrackets = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let i = 0; i < str.length; i++) {
    if (openBrackets[str[i]]) {
      stack.push(str[i]);
      continue;
    }

    if (closeBrackets[str[i]]) {
      if (stack[stack.length - 1] === closeBrackets[str[i]]) {
        stack.pop();
      } else {
        console.log(`исходный текст: "${str}"`);
        console.log(`ошибка на позиции ${i}`);

        const resultStr = str.slice(0, i-1);
        console.log(`ошибка возникла здесь: "${resultStr}>>${str[i]}<<"`);

        return;
      }
    }
  }

  if (stack.length){
    console.log('не закрыты все скобки');
  } else {
    console.log('ошибок нет');
  }

};
