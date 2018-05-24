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

class Dijkstra {
    constructor(cities, roads, start, end) {
        this.cities = cities;
        this.roads = roads;
        this.start = start;
        this.end = end;

        this.citiesRoads = Object.create(null);
        this.history = Object.create(null);
    }

    /**
     * Создание перечня из городов и всех дорог соответствующие им
     */
    fillCityRoads() {
        const { citiesRoads, roads } = this;

        roads.forEach( ({from, to, km}) => {
            if (!citiesRoads[from]) {
                citiesRoads[from] = [];
            }

            if (!citiesRoads[to]) {
                citiesRoads[to] = [];
            }

            citiesRoads[from].push({from, to, km});
            citiesRoads[to].push({from: to, to: from, km});
        });
    };

    init() {
        const app = document.getElementById('app');

        app.innerHTML = '<img src="./src/other/findPath/common/graph.png"/>';

        console.log('Алгоритм Дийсктры');
        this.fillCityRoads();
        this.search();
    }

    getDistance(node) {
        if (node === null) return Infinity;

        if(Array.isArray(node)) {
            let sum = 0;

            node.forEach(elem => {
                sum += elem.km;
            });

            return sum;
        }

        return node.km;
    }

    recurciveSearch(nodes) {
        if (nodes.every(value => value.done)) return;

        const { citiesRoads, history } = this;

        let nextNodes = [];

        // обходим все узлы к которым ведет путь из искомого узла
        // [ {start: 0 , nodes: [...]}, {}, {}]
        nodes.forEach(node => {
            const { start, nodes: childNodes } = node;

            history[start] = {
                ...history[start],
                done: true
            };

            childNodes.forEach(child => {
                if (history[child.to] && history[child.to].done) return;

                // console.log(history);

                if (!history[child.to]) {

                    let newPath = [];

                    const pathFromChild = history[child.from].path;

                    if (!pathFromChild) {
                        newPath = [child]
                    } else {
                        newPath = pathFromChild.concat(child);
                    }

                    history[child.to] = {
                        done: false,
                        path: newPath
                    };

                } else {
                    // уже есть путь, нужно проверить
                    const oldPath = history[child.to].path;
                    const oldDistance = this.getDistance(oldPath);

                    // расстояние - бесконечность в случае, если мы 1й раз обращаемся у узлу.
                    if(!isFinite(oldDistance)) {

                        history[child.to] = {
                            ...history[child.to],
                            path: [child]
                        };

                    } else {
                        // необходимо проверить со старыми данными, и записать наименьшее значение

                        // расстояние от предыдущего узла до текущего
                        const distanceFrom = this.getDistance(history[child.from].path);

                        // расстояние от текущего до заданного
                        const distanceTo = this.getDistance(child);

                        // расстояние от точки начала до следующего узла
                        const total = this.getDistance(history[child.to].path);

                        // если до заданного узла найден меньший путь, то оставляем его
                        if (total < (distanceFrom + distanceTo)) return;

                        history[child.to] = {
                            ...history[child.to],
                            path: history[child.from].path.concat(child)
                        }
                    }

                }

                let nextNodesFilter = citiesRoads[child.to];
                nextNodesFilter = nextNodesFilter.filter(node => node.to !== start);

                nextNodes = nextNodes.concat({start: child.to, nodes: nextNodesFilter});
            });
        });

        this.count++;
        this.recurciveSearch(nextNodes)
    }

    search() {
        const { citiesRoads, start } = this;
        const nodes = citiesRoads[start];

        this.recurciveSearch([{start, nodes}]);

        this.showResult();
    }

    showResult() {
        const { start, end } = this;
        console.log(this.history);

        const path = this.history[end].path;
        const distance = this.getDistance(path);

        let formatPath = '';

        for (let i = 0; i < path.length; i++) {
            if (i === 0) {
                formatPath += `${path[i].from} > ${path[i].to}`;
                continue;
            }

            if (i === (path.length - 1)) {
                formatPath += ` > ${path[i].to}`;
                continue;
            }

            formatPath += ` > ${path[i].to}`
        }

        console.log(`Минимальное рассояние от точки ${start} до ${end}: ${distance}km`);
        console.log(`Необходимо пройти следующий путь: ${formatPath}\n\n`);
    }

    validate(index) {
        if (index === this.start) {
            console.log(`Введеное значение равно точке старта`);
            return false;
        }

        if (index === this.end) {
            console.log(`Введеное значение равно точке назначения`);
            return false;
        }

        if (index > this.cities.length - 1) {
            console.log(`Введенное значение ${index} слишком велико. Max значение: ${this.cities.length - 1}`);
            return false;
        }

        if (index < 0) {
            console.log(`Введенное значение ${index} не может быть меньше 0`);
            return false;
        }

        return true;
    }

    clear() {
        this.history = Object.create(null);
    }

    changeEnd(index) {
        if(!this.validate(index)) return;

        this.end = index;
        this.showResult();
    }

    changeStart(index) {
        if(!this.validate(index)) return;

        this.clear();
        this.start = index;
        this.search();
    }
}

window.dijkstra = new Dijkstra(cities, roads, startCityIndex, endCityIndex);
