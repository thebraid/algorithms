const insertArr = [6, 5, 3, 1, 8, 7, 2, 4, 16, 65, 12, 54, 12, 65];

window.quickSort = function() {

  function recursive(arr = insertArr) {
    if (arr.length === 0) return [];

    const left = [], right = [], pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < pivot)
        left.push(arr[i]);
      else
        right.push(arr[i]);
    }

    return recursive(left).concat(pivot, recursive(right));
  }

  console.log(recursive());
};
