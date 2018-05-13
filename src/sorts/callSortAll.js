window.callSortAll = function() {
  console.log('\n сортировка bubbleSort');
  console.log(defaultArray);
  bubbleSort();

  console.log('\n сортировка choiceSort');
  console.log(defaultArray);
  choiceSort();

  console.log('\n сортировка insertSort');
  console.log(defaultArray);
  insertSort();

  console.log('\n сортировка mergeSort');
  console.log(defaultArray);
  mergeSort();

  console.log('\n сортировка quickSort');
  console.log(defaultArray);
  quickSort();
  console.log('\n');
};