const text = 'таррат';

const polindrom1 = (str = text) => {
  const str2 = str.split('').reverse().join('');

  console.log(str2 === str);
};

window.polindrom = (str = text) => {
  console.log(`исходные текст: ${str}`);

  let isEqual = true;

  for(let i = 0, j = (str.length-1) ; i < str.length; i++, j--) {
    if (i === j) break;

    if (str[i] !== str[j]) {
      isEqual = false;
    }
  }

  console.log(`${isEqual ? 'Полиндром' : 'Не полиндром'} \n\n`);
};