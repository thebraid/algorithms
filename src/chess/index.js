window.chess = function(N = 8) {
  const store = [];

  function generateField() {
    const field = [];

    for (let i = 1; i <= N; i++ ){
      field.push(new Array(N).fill('-'))
    }

    return field;
  }

  function fillDiagonals(field, x, y) {
    for (let i = -N; i < N; i++) {
      if (i === 0) continue; // занятая позиция "1"

      // диагональ лево[верх] => право[низ]
      const resultX = x-i;
      const resultYLeft = y-i;

      if (resultX >= 0 && resultX < N && resultYLeft >= 0 && resultYLeft < N) {
        field[resultX][resultYLeft] = '*';
      }


      // диагональ право[верх] => лево[низ]
      const resultYRight = y+i;

      if (resultX >= 0 && resultX < N && resultYRight >= 0 && resultYRight < N) {
        field[resultX][resultYRight] = '*';
      }
    }
  }

  function setQueen(field, x, y) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {

        if (i === x && j === y) {
          field[i][j] = 1;
          continue;
        }

        fillDiagonals(field, x, y); // помечаем диагонали занятыми

        if (i === x || j === y) { // помечаем прямые линии как занятые, где есть ферзь
          field[i][j] = '*'
        }
      }
    }
  }


  function setReqursiveQueens(field, row){

    if (row === N) {
      store.push(field);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (field[row][i] === '*' || field[row][i] === 1) continue;

      let innerField = JSON.parse(JSON.stringify(field));

      setQueen(innerField, row, i);
      const newRow = row + 1;

      // console.log(innerField);


      setReqursiveQueens(innerField, newRow)
    }
  }

  function spreadBoard(y){
    const field = generateField();

    let row = 0;

    setQueen(field, row, y); // ряд 0 теперь занят

    row++; // ряд с которым работаем теперь

    setReqursiveQueens(field, row);

  }

  for (let i = 0; i < N; i++) {
    spreadBoard(i);
  }

  console.log(store);
};
