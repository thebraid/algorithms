// const store = [];
//
// function generateField() {
//   const field = [];
//
//   for (let i = 1; i <= 8; i++ ){
//     field.push(new Array(8).fill('-'))
//   }
//
//   return field;
// }
//
// function fillDiagonals(field, x, y) {
//   for (let i = -7; i <= 7; i++) {
//     if (i === 0) continue; // занятая позиция "1"
//
//     // диагональ лево[верх] => право[низ]
//     const resultX = x-i;
//     const resultYLeft = y-i;
//
//     if (resultX >= 0 && resultX <= 7 && resultYLeft >= 0 && resultYLeft <= 7) {
//       field[resultX][resultYLeft] = '*';
//     }
//
//
//     // диагональ право[верх] => лево[низ]
//     const resultYRight = y+i;
//
//     if (resultX >= 0 && resultX <= 7 && resultYRight >= 0 && resultYRight <= 7) {
//       field[resultX][resultYRight] = '*';
//     }
//   }
// }
//
// function setQueen(field, x, y) {
//   for (let i = 0; i <= 7; i++) {
//     for (let j = 0; j <=7; j++) {
//
//       if (i === x && j === y) {
//         field[i][j] = 1;
//         continue;
//       }
//
//       fillDiagonals(field, x, y); // помечаем диагонали занятыми
//
//       if (i === x || j === y) { // помечаем прямые линии как занятые, где есть ферзь
//         field[i][j] = '*'
//       }
//     }
//   }
// }
//
//
// function setReqursiveQueens(field, count){
//   let innerField = JSON.parse(JSON.stringify(field));
//
//   // a2 += 1;
//   // if (a2 > a1) return;
//
//   // console.log('init');
//   // console.log(count);
//   // console.log(field);
//
//
//
//   // setQueen(field, 1, 7);
//   // console.log(field);
//
//   for (let i = 0; i <= 7; i++) {
//     for (let j = 0; j <= 7; j++) {
//       if (field[i][j] === '*' || field[i][j] === 1) continue;
//
//
//       const newValue = count + 1;
//       setQueen(innerField, i, j);
//
//       if (newValue === 8) {
//         store.push(innerField);
//         return;
//       }
//
//       // store.push(innerField);
//
//       // console.log(count);
//       // console.log(innerField);
//       setReqursiveQueens(innerField, newValue)
//
//
//       // console.log(innerField)
//
//       // console.log(innerField);
//       // count =+ 1;
//
//       // setReqursiveQueens(count, innerField);
//
//       // console.log(i, j);
//       // setQueens(++count, innerField);
//     }
//   }
// }
//
// function spreadBoard(x, y){
//   const field = generateField();
//
//
//   setQueen(field, x, y);
//
//   let count = 1; // кол-во поставленных ферзей
//
//   setReqursiveQueens(field, count);
//
//   // console.log(field);
// }
//
// for (let i = 0; i <= 0; i++) {
//   for (let j = 0; j <= 0; j++) {
//     spreadBoard(i, j);
//   }
// }
//
// console.log(store);
//
