const insertArr = [6, 5, 3, 1, 8, 7, 2, 4, 16, 65, 12, 54, 12, 65];

window.mergeSort = function( arr = insertArr) {
  let result = [];

  for (let i = 0; i < arr.length; i+=1) {
      result.push([arr[i]])
  }

  while (result.length > 1) {
    const resultInner = [];

    for (let i = 0; i < result.length; i += 2) {
      const inner = [];

      if (!result[i+1]) {
        resultInner.push(result[i]);
        break;
      }

      while(result[i].length || result[i+1].length) {
        if (!result[i][0]) {
          inner.push(result[i+1][0]);
          result[i+1].splice(0, 1);
          continue;
        }

        if (!result[i+1][0]) {
          inner.push(result[i][0]);
          result[i].splice(0, 1);
          continue;
        }

        if (result[i][0] > result[i+1][0]) {
          inner.push(result[i+1][0]);
          result[i+1].splice(0, 1)
        } else {
          inner.push(result[i][0]);
          result[i].splice(0, 1)
        }
      }

      resultInner.push(inner);
    }
    result = resultInner;
  }

  console.log(result);
};

mergeSort();