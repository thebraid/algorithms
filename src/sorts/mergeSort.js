window.mergeSort = function( arr = [...defaultArray]) {
  let result = [];

  // разбили массив на одиночные массивы
  for (let i = 0; i < arr.length; i+=1) {
      result.push([arr[i]])
  }

  // на каждой итерации цикла кол-во элементов массива будет уменьшаться вдвое (т.к. мы соединяем соседние массивы)
  while (result.length > 1) {

    // массив с новыми соединенными элементами (на каждой итерации исходный массив result будем менять на него)
    const resultInner = [];

    // проходим по массиву через элемент, параллельно объединяя пары
    for (let i = 0; i < result.length; i += 2) {

      const leftArr = result[i];    // левый массив
      const rightArr = result[i+1]; // правый массив

      // массив в который будет складывать отсортированные значения из левого массива и правого.
      const inner = [];

      // если правого соседа нет, то добавляем левый массив сразу в результат
      if (!rightArr) {
        resultInner.push(leftArr);
        break;
      }

      // объединяем массивы - "пары" до тех пор, пока не закончатся в них элементы
      while(leftArr.length || rightArr.length) {

        // если элементы закончились в левом массиве, то значит они ещё есть в правом соседе, добавляем оттуда
        if (leftArr.length === 0) {
          inner.push(rightArr[0]);
          rightArr.splice(0, 1);   // удаляем вставленный элемент из правого соседа
          continue;
        }

        // если элементы закончились в правом массиве, то значит они ещё есть в левом соседе, добавляем оттуда
        if (rightArr.length === 0) {
          inner.push(leftArr[0]);
          leftArr.splice(0, 1);   // удаляем вставленный элемент из правого соседа
          continue;
        }

        // выбираем наименьшее значение из левого и правого массива под индексом 0 и вставляем в промежуточный массив
        if (leftArr[0] > rightArr[0]) {
          inner.push(rightArr[0]);
          rightArr.splice(0, 1)
        } else {
          inner.push(leftArr[0]);
          leftArr.splice(0, 1)
        }
      }

      resultInner.push(inner);
    }
    result = resultInner;
  }

  console.log(result[0]);
};