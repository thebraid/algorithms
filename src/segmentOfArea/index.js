// const A1 = [0, 1];
// const A2 = [1, 1];
//
// const B1 = [0, 2];
// const B2 = [1, 2];

const A1 = [-5, 1];
const A2 = [4, 2];

const B1 = [0, -8];
const B2 = [2, -3];

const findCrossingPoint = function(a1, a2, b1, b2){
  const [x1, y1] = a1;
  const [x2, y2] = a2;

  const [x3, y3] = b1;
  const [x4, y4] = b2;


  // выведенная формула из 2 уравнений прямой, приравненных друг к другу
  const x = ( x4*(y1*x2 - y2*x1 - y3*x2 + y3*x1) + x3*(y2*x1 - y1*x2 + y4*x2 - y4*x1) ) / ( y4*(x2-x1) + y3*(x1-x2) + y2*(x3-x4) + y1*(x4-x3) ) ;

  // console.log(`x1 = ${x1}; y1 = ${y1}; x2=${x2}; y2=${y2}; x3=${x3}; y3=${y3}; x4=${x4}; y4=${y4}`);

  if (Math.abs(x) === Infinity) {
    console.log('Данные прямые:');
    console.log(a1, a2);
    console.log(b1, b2);
    console.log('Параллельны друг другу');
    return null;
  }

  // TODO Обработать x2 === x1 (вертикальная прямая);

  // аналогично выведена формула на основании x
  const y = ( x*(y2-y1) - y2*x1 + y1*x2 ) / (x2 - x1);

  // console.log(`x = ${x}`);


  if (isNaN(y)) {
    console.log(`y = ${y}`);
    return;
  }
  // console.log(`x = ${x}; y = ${y}`);

  return [x, y];
};

// const crossPoint = findCrossingPoint(A1, A2, B1, B2);

function drawRectangle(w, h){
  const oldCanvas = document.getElementById('canvas');
  if (oldCanvas) oldCanvas.remove();

  const canvas = document.createElement("canvas");
  canvas.id = 'canvas';
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w, 0);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.stroke();

  document.body.appendChild(canvas);
}

function findCrossingPoints(result, x1, x2, y1, y2) {
  const corner1 = [x1, y1];
  const corner2 = [x1, y2];
  const corner3 = [x2, y2];
  const corner4 = [x2, y1];

  const ribs = [[corner1, corner2], [corner2, corner3], [corner3, corner4], [corner4, corner1]];

  ribs.forEach(item => {
    [one, two] = item;
    const value = findCrossingPoint(A1, A2, one, two);

    if (value[0] > x2) return;
    if (value[0] < x1) return;

    if (value[1] > y2) return;
    if (value[1] < y1) return;

    if (value) {
      result.push(value);
    }

  })
}

function drawLine(result) {
  if (result.length !== 2) return;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;

  [one, two] = result;

  console.log(one);

  ctx.beginPath();
  ctx.moveTo(one[0], h - one[1]); // поправка на то, что у canvas отсчет оси y начинается сверху
  ctx.lineTo(two[0], h - two[1]);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.stroke();
}

window.draw = function(coords = [0, 500, 0, 500]) {
  [x1, x2, y1, y2] = coords;

  const w = Math.abs(x2 - x1);
  const h = Math.abs(y2 - y1);

  drawRectangle(w, h);

  const result = [];
  findCrossingPoints(result, x1, x2, y1, y2);


  console.log(result);
  drawLine(result);

};

draw();

// const f1 = findCrossingPoint([500,0], [500, 500], A1, A2);
// console.log(f1);