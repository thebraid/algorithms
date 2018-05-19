class Draw {
  constructor() {
    this.rectCoords = [-250, 250, -250, 250]; // x1, x2, y1, y2 - координаты прямоугольника со значением по умолчанию
    this.rectWidth = Math.abs(this.rectCoords[1]- this.rectCoords[0]); // разница x2 - x1 по модулю
    this.rectHeight = Math.abs(this.rectCoords[3]- this.rectCoords[2]); // разница y2 - y1 по модулю

    // this.pointA = [-5, 1]; // первая точка прямой
    // this.pointB = [4, 2]; // вторая точка прямой

    this.pointA = [-50, -50]; // первая точка прямой
    this.pointB = [50, 50]; // вторая точка прямой

    this.result = []; // массив, куда будем складывать найденные точки пересечения прямой с прямоугольником
  }

  /**
   * Находит точку пересечения двух прямых
   * @param {number} a1 - координаты 1 прямой 1й точки
   * @param {number} a2 - координаты 1 прямой 2й точки
   * @param {number} b1 - координаты 2 прямой 1й точки
   * @param {number} b2 - координаты 2 прямой 2й точки
   */
  findCrossingPoint(a1, a2, b1, b2) {
    const [x1, y1] = a1;
    const [x2, y2] = a2;

    const [x3, y3] = b1;
    const [x4, y4] = b2;


    // выведенная формула из 2 уравнений прямой, приравненных друг к другу
    const x = ( x4*(y1*x2 - y2*x1 - y3*x2 + y3*x1) + x3*(y2*x1 - y1*x2 + y4*x2 - y4*x1) ) / ( y4*(x2-x1) + y3*(x1-x2) + y2*(x3-x4) + y1*(x4-x3) ) ;


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

    if (isNaN(y)) {
      // console.log(`y = ${y}`);
      return null;
    }

    return [x, y];
  };

  clear() {
    const canvas = document.getElementById('canvas');
    if (canvas) canvas.remove();
  }

  isNotIdenticalResult([val1, val2]) {
    let flag = true;

    this.result.forEach(([oldVal1, oldVal2]) => {
      console.log(`oldVal1=${oldVal1}, val1=${val1}, oldVal2=${oldVal2}, val2=${val2}`);
      if (oldVal1 === val1 && oldVal2 === val2) {
        console.log('equal');
        // return false;
        flag = false;
      }
    });

    return flag;
  }


  /**
   * Нахождение пересечения прямой со всеми ребрами прямоугольника
   */
  findCrossingPoints() {
    const [x1, x2, y1, y2] = this.rectCoords;

    const corner1 = [x1, y1];
    const corner2 = [x1, y2];
    const corner3 = [x2, y2];
    const corner4 = [x2, y1];

    // обозначаем все ребра прямоугольника, с которыми будем искать пересечения с точками заданной прямой
    const ribs = [[corner1, corner2], [corner2, corner3], [corner3, corner4], [corner4, corner1]];

    ribs.forEach(([cornerA, cornerB]) => {
      const value = this.findCrossingPoint(this.pointA, this.pointB, cornerA, cornerB);

      if (!value) return;

      // если пересечения больше габарита прямоугольника, то не записываем их в результат.
      if (value[0] > x2) return;
      if (value[0] < x1) return;

      if (value[1] > y2) return;
      if (value[1] < y1) return;

      if (value && this.isNotIdenticalResult(value)) {
        this.result.push(value);
      }

    })
  }

  /**
   * Рисует саму рамку
   */
  drawRectangle() {
    const { rectWidth, rectHeight } = this;

    this.clear();

    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = rectWidth;
    canvas.height = rectHeight;

    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(rectWidth, 0);
    ctx.lineTo(rectWidth, rectHeight);
    ctx.lineTo(0, rectHeight);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();

    document.body.appendChild(canvas);
  }

  /**
   * Рисует координаты
   */
  drawTextCoords(ctx, correctionX, correctionY) {
    const { rectWidth, rectHeight, rectCoords } = this;
    const [x1, x2, y1, y2] = rectCoords;

    ctx.font = "12pt Arial";

    // цетр оси
    ctx.fillText("0:0", correctionX, rectHeight - correctionY + 12);

    // левый нижний угол
    ctx.fillText(`${x1}:${y1}`, 12, rectHeight - 12);

    // левый верхний угол
    ctx.fillText(`${x1}:${y2}`, 12, 20);

    // правый верхний угол
    ctx.fillText(`${x2}:${y2}`, rectWidth - 70, 20);

    // правый нижний угол
    ctx.fillText(`${x2}:${y1}`, rectWidth - 70, rectHeight - 12);
  }

  /**
   * Рисует оси в прямоугольнике
   */
  drawAxis() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const { rectWidth, rectHeight } = this;
    const { rectCoords } = this;

    const x1 = rectCoords[0];
    const y1 = rectCoords[2];

    const correctionX = (x1 < 0) ? -x1 : 0;
    const correctionY = (y1 < 0) ? -y1 : 0;

    this.drawTextCoords(ctx, correctionX, correctionY);

    // ось X
    ctx.beginPath();
    ctx.moveTo(0, rectHeight - correctionY);
    ctx.lineTo(rectWidth, rectHeight - correctionY);
    ctx.strokeStyle = "red";
    ctx.stroke();


    // ось Y
    ctx.beginPath();
    ctx.moveTo(correctionX, 0);
    ctx.lineTo(correctionX, rectHeight);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

  /**
   * Рисует линию внутри прямоугольника
   */
  drawLine() {
    const {  rectHeight } = this;

    this.findCrossingPoints();

    // если не нашли пересекающихся точек с прямоугольником, ни чего не рисуем
    if (this.result.length !== 2) {
      console.log(this.result);
      console.log('Нет точек пересечений');
      return;
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const x1 = this.rectCoords[0];
    const y1 = this.rectCoords[2];

    const correctionX = (x1 < 0) ? -x1 : 0;
    const correctionY = (y1 < 0) ? -y1 : 0;

    const [pointA, pointB] = this.result;

    ctx.beginPath();

    // rectHeight - поправка на то, что у canvas отсчет координат начинается сверху
    // correctionX и correctionY - поправка на то, что прямоугольник лежит в отрицательных координатах
    ctx.moveTo(pointA[0] + correctionX, rectHeight - pointA[1] - correctionY);
    ctx.lineTo(pointB[0] + correctionX, rectHeight - pointB[1] - correctionY);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  /**
   * Вставляет в DOM понель управления для удобного изменения данных
   */
  drawInputPanel() {
    if (document.getElementById('rectAndLine')) return;

    const template = document.getElementById('template');
    const cloneTemplate = document.importNode(template.content, true).children[0];

    document.body.appendChild(cloneTemplate);
  }

  /**
   * Главная функция для отрисовки
   */
  draw() {
    this.resetResult();

    this.drawInputPanel();
    this.drawRectangle();
    this.drawAxis();
    this.drawLine();
  }

  /**
   * Сброс данных о найденных точках
    */
  resetResult() {
    this.result = [];
  }

  /**
   * Устанавливает новые координатные точки для прямоугольника
   * @param {number} x1
   * @param {number} x2
   * @param {number} y1
   * @param {number} y2
   */
  setRectCoords(x1, x2, y1, y2) {
    if (x2 < x1) {
      [x1, x2] = [x2, x1];
      console.log(`х2 < x1, меняем их значениями. х1 = ${x1}; x2 = ${x2}`);
    }

    if (y2 < y1) {
      [y1, y2] = [y2, y1];
      console.log(`y2 < y1, меняем их значениями. y1 = ${y1}; x2 = ${y2}`);
    }

    this.rectCoords = [x1, x2, y1, y2];
    this.rectWidth = Math.abs(x2 - x1);
    this.rectHeight = Math.abs(y2 - y1);

    this.draw();
  }

  /**
   * Устанавливает новые координатные точки для прямой
   * @param {array} point1 - координаты 1й точки прямой, в формате [x, y]
   * @param {array} point2 - координаты 2й точки прямой, в формате [x, y]
   */
  setPoints(point1, point2) {
    this.pointA = point1;
    this.pointB = point2;

    this.draw();
  }

  handlerChangeRectCoords() {
    const value = document.getElementsByClassName('rectAndLine__input')[0].value;
    if (!value) {
      console.log('Необходимо ввести данные');
      return;
    }

    let coords = value.split(',').map(Number);

    if (coords.length !== 4) {
      console.log('Необходимо ввести 4 числа');
      return;
    }

    const [x1, x2, y1, y2] = coords;
    this.setRectCoords(x1, x2, y1, y2);
  }

  handlerChangePointsCoords() {
    const value1 = document.getElementsByClassName('rectAndLine__input')[1].value;
    const value2 = document.getElementsByClassName('rectAndLine__input')[2].value;

    if (!value1 && !value2) {
      console.log('Необходимо ввести координаты обоих точек');
      return;
    }

    let point1 = value1.split(',').map(Number);
    let point2 = value2.split(',').map(Number);

    if (point1.length !== 2 || point2.length !== 2) {
      console.log('Необходимо ввести по 2 числа для каждой точки');
      return;
    }

    this.setPoints(point1, point2);
  }
}

window.rectAndLine = new Draw();
rectAndLine.draw();