function newArray(width, height) {
    const arr = [];

    height = height ? height : width;
    for (let i = 0; i < height; i++) {
        arr[i] = Array(width).fill('-');
    }

    return arr;
}


let a = 1;
function rotate(direct) {

  if (a >= 4) {
    a = 0;
  }
  const result = direct[a];
  a++;

  return result;
}


function increase(x, y, dx, dy, arr) {
  x = x + dx;
  y = y + dy;

  y = (!arr[y] || arr[y][x] !== '-') ? (y - dy) : y
  x = (!arr[y][x] || arr[y][x] !== '-') ? (x - dx) : x
  
  return [x, y];
}

// Функция дополняющая число нулями на основании максимального значения.
// Если будет всего 2 символа, то числа 1-9 будут преобразовы в 01-09
// Если будет 3 символа, то 1 => 001, 10 => 010.
// И так далее.
function padNull(num, length){
	const maxLength = length.toString().length;
  let str = num.toString();
  
  while (str.length < maxLength) {
  	str = '0' + str;
  }
  
	return str;
}

window.arraySpiral = function (a = 4, b) {
		b = b ? b : a;
    const count = a * b;
    const direct = [
        [1, 0],   // right
        [0, 1],   // down
        [-1, 0],  // left
        [0, -1]   // top
    ];
    const arr = newArray(a, b);

    let x = 0; // указатель во внутреннем массиве [ [1,2,3,4], [], [], []]
    let y = 0; // указатель во внешнем массиве [ [], [], [], []]
    let dx;
    let dy;

    // начальное направление - right
    [dx, dy] = direct[0];

		for (let i = 1; i <= count; i++) {
    	i = padNull(i, count);
      
      if (arr[y] && arr[y][x] && arr[y][x] === '-') {
        arr[y][x] = i;
        [x, y] = increase(x, y, dx, dy, arr);
      } else {
      	// Изменяем направление
      	[dx, dy] = rotate(direct);
        
        // Увеличиваем x и y проверяя, не вышли ли мы за пределы.
        // Если вышли, уменьшаем нужную координату
        [x, y] = increase(x, y, dx, dy, arr);
        

        arr[y][x] = i;
        // Опять увеличиваем x и y проверяя, не вышли ли мы за пределы.
        // Если вышли, уменьшаем нужную координату
        [x, y] = increase(x, y, dx, dy, arr);
      }
    	
    }

    console.dir(arr)
};

// Пример
arraySpiral(37, 37);
