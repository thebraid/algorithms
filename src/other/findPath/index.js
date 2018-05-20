// 15. Есть массив с названием городов. Есть массив с информацией о дорогах между ними.
//   Информация о дорогах: индекс первого города, индекс второго, длина в километрах.
//   Нужно вычислить самый короткий путь между заданными городами, маршрут и длину.

const cities = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const roads = [
  { from: 0, to: 1, km: 1 },
  { from: 1, to: 3, km: 4 },
  { from: 3, to: 4, km: 4 },
  { from: 0, to: 2, km: 3 },
  { from: 2, to: 4, km: 7 },
  { from: 5, to: 3, km: 9 },
  { from: 5, to: 0, km: 3 },


  {from: 3, to: 7, km: 2},
  {from: 4, to: 8, km: 1},
  {from: 8, to: 7, km: 2},
  {from: 2, to: 6, km: 6},
  {from: 6, to: 4, km: 3},
  {from: 6, to: 7, km: 4},
];

const startCityIndex = 0;
const endCityIndex = 4;

class pathsOfFloid {
  constructor(cities, roads, start, end) {
    this.cities = cities;
    this.roads = roads;
    this.start = start;
    this.end = end;

    this.citiesRoads = Object.assign({});
    this.matrix = [];
  }

  fillCityRoads() {
    const { citiesRoads } = this;

    roads.forEach( ({from, to, km}) => {
      if (!citiesRoads[from]) {
        citiesRoads[from] = [];
      }

      if (!citiesRoads[to]) {
        citiesRoads[to] = [];
      }

      citiesRoads[from].push({to, km});
      citiesRoads[to].push({to: from, km});
    });
  };

  initMatrix() {
    // создаем матрицу NxN где N - кол-во городов.
    const N = this.cities.length;

    for (let i = 0; i < N; i += 1) {
      this.matrix[i] = [];

      for (let j = 0; j < N; j += 1) {
        if (i === j) {
          this.matrix[i].push(0);
          continue;
        }

        this.matrix[i].push('-')
      }
    }

  }

  firstFill() {
    const { citiesRoads} = this;

    for (let key in citiesRoads) {
      citiesRoads[key].forEach(({to, km}) => {
        this.matrix[key][to] = {from: Number(key), to, km};
      })
    }
  }

  getTotalDistance(elem) {
    if (Array.isArray(elem)) {
      return elem.reduce( (sum, elem) => {
        return sum + elem.km;
      }, 0)
    } else {
      return elem.km;
    }
  }

  recursiveFill(count = 0) {
    const N = this.cities.length;

    if (count === N) return;

    const { matrix } = this;

    for (let i = 0; i < N; i += 1) {
      // исключаем по очереди каждый ряд
      if (i === count) continue;

      for (let j = 0; j < N; j += 1) {
        // исключаем все ряды
        // т.е. для 1 раз исключаем из выборки 1ю строку и 1 столбец (затем 2й строку и 2й столбец)
        if (j === count) continue;

        // i === j когда это один и тот же узел, с расстоянием 0
        if (matrix[i][j] === 0) continue;

        // нас интересуют только те позиции (в исключенных ряду и стобце) значение в которых не равны '-' одновременно
        if (matrix[count][j] === '-') continue;
        if (matrix[i][count] === '-') continue;

        const nextData = [].concat(matrix[i][count], matrix[count][j]);
        // если в ячейке уже есть данные, проверяем их на минимальное расстояние
        if (matrix[i][j] !== '-') {
          const currentDistance = this.getTotalDistance(matrix[i][j]);
          const nextDistance = this.getTotalDistance(nextData);

          // если записанное расстояние меньше нового, оставляем старое значение
          if (currentDistance < nextDistance) continue;
        }

        this.matrix[i][j] = [].concat(matrix[i][count], matrix[count][j]);
      }
    }

    count++;
    this.recursiveFill(count)
  }

  getPath() {
    const { matrix, start, end, cities } = this;

    const resultData = matrix[start][end];

    if (Array.isArray(resultData)) {
      let result = '';

      for (let i = 0; i < resultData.length; i += 1){
        if (i === 0) {
          result = `${cities[resultData[i].from]}(${resultData[i].from})`;
          continue
        }

        if (i === (resultData.length - 1)) {
          result = `${result} > ${cities[resultData[i].from]}(${resultData[i].from}) > ${cities[resultData[i].to]}(${resultData[i].to})`;
          continue
        }

        result = `${result} > ${cities[resultData[i].from]}(${resultData[i].from})`;
      }

      return result;

    } else {
      //object
      return resultData.from;
    }
  }

  showResult() {
    const { matrix, start, end } = this;

    const distance = this.getTotalDistance(matrix[start][end]);
    console.log(`Минимальное рассояние от точки ${start} до ${end}: ${distance}km`);

    const path = this.getPath();
    console.log(`Необходимо пройти следующий путь: ${path}\n\n`);
  }

  changeStart(index) {
    if (index === this.start) {
      console.log(`Введеное значение равно текущему`);
      return;
    }

    if (index === this.end) {
      console.log(`Введеное значение равно месту назначения`);
      return;
    }

    if (index > this.cities.length - 1) {
      console.log(`Введенное значение ${index} слишком велико. Max значение: ${this.cities.length - 1}`);
      return;
    }

    this.start = index;
    this.showResult();
  }

  changeEnd(index) {
    if (index === this.start) {
      console.log(`Введеное значение равно начальному месту `);
      return;
    }

    if (index === this.end) {
      console.log(`Введеное значение равно текущему`);
      return;
    }

    if (index > this.cities.length - 1) {
      console.log(`Введенное значение ${index} слишком велико. Max значение: ${this.cities.length - 1}`);
      return;
    }

    this.end = index;
    this.showResult();
  }

  init() {
    const app = document.getElementById('app');

    app.innerHTML = '<img src="./src/other/findPath/graph.png"/>';

    this.fillCityRoads();
    this.initMatrix();
    this.search();
  }

  search() {
    this.firstFill();
    this.recursiveFill();
    this.showResult();
  }
}

window.floid = new pathsOfFloid(cities, roads, startCityIndex, endCityIndex);
floid.init();
