window.quickSort = function() {

  function recursive(arr = [...defaultArray]) {
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
