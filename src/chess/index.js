const store = [];

function generateField() {
  const field = [];

  for (let i = 1; i <= 8; i++ ){
    field.push(new Array(8).fill('-'))
  }

  return field;
}

function fillDiagonals(field, x, y) {
  for (let i = -7; i <= 7; i++) {
    if (i === 0) continue; // занятая позиция "1"

    // диагональ лево[верх] => право[низ]
    const resultX = x-i;
    const resultYLeft = y-i;

    if (resultX >= 0 && resultX <= 7 && resultYLeft >= 0 && resultYLeft <= 7) {
      field[resultX][resultYLeft] = '*';
    }


    // диагональ право[верх] => лево[низ]
    const resultYRight = y+i;

    if (resultX >= 0 && resultX <= 7 && resultYRight >= 0 && resultYRight <= 7) {
      field[resultX][resultYRight] = '*';
    }
  }
}

function setQueen(field, x, y) {
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <=7; j++) {

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

  if (row === 8) {
    store.push(field);
    return;
  }

  for (let i = 0; i <= 7; i++) {
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


  // console.log(field);

  setReqursiveQueens(field, row);

}

for (let i = 0; i <= 7; i++) {
  spreadBoard(i);
}

console.log(store);
