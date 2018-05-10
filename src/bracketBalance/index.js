const test_str = '{asda asdadasd (asdasd} 5434534}';

window.brackets = function (str = test_str ) {
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
        console.log(`ошибка на позиции ${i}`);
        const resultStr = str.slice(0, i-1);
        console.log(`исходный текст: "${str}"`);
        console.log(`ошибка возникла здесь: "${resultStr}_${str[i]}_"`);

        return;
      }
    }
  }

  console.log('ошибок нет');
};

brackets();