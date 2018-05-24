const testPoints = [[0,0], [3,3], [8,1], [4,-3], [3,-1]];

const findCrossingPoint = (a1, a2, b1, b2) => {
    const [x1, y1] = a1;
    const [x2, y2] = a2;

    const [x3, y3] = b1;
    const [x4, y4] = b2;


    // выведенная формула из 2 уравнений прямой, приравненных друг к другу
    const x = ( x4*(y1*x2 - y2*x1 - y3*x2 + y3*x1) + x3*(y2*x1 - y1*x2 + y4*x2 - y4*x1) ) / ( y4*(x2-x1) + y3*(x1-x2) + y2*(x3-x4) + y1*(x4-x3) );


    if (Math.abs(x) === Infinity) {
        console.log('Данные прямые:');
        console.log(a1, a2);
        console.log(b1, b2);
        console.log('Параллельны друг другу');
        return null;
    }

    // аналогично выведена формула на основании x
    const y = ( x*(y2-y1) - y2*x1 + y1*x2 ) / (x2 - x1);

    // TODO проверка на принадлеждность 1й линии.

    if (isNaN(y)) {
        return null;
    }

    return [x, y];
};

const createCombination = (arr) => {
    const aggregation = [];

    for (let i = 0; i < arr.length; i+=1) {
        const temporaryArr = [];

        temporaryArr.push(arr[i]);
        let next1 = i+1;
        let next2 = i+2;

        if (arr[next1]) {
            temporaryArr.push(arr[next1]);
        } else {
            // i+1 элемента нет, сбрасываем счетчик на 0 позицию,
            // и для i+2 ставим позицию 1
            next1 = 0;
            next2 = 1;

            temporaryArr.push(arr[next1]);
            temporaryArr.push(arr[next2]);
            aggregation.push(temporaryArr);
            continue;
        }


        if (arr[next2]) {
            temporaryArr.push(arr[next2]);
        } else {
            next2 = 0;
            temporaryArr.push(arr[next2]);
        }
        aggregation.push(temporaryArr);
    }

    return aggregation;
};

const checkPoint = (pointWithNeighbours) => {
    const [left, point, right] = pointWithNeighbours;

    /**
     * ищется пересечение прямых left-right и вертикальная из point
     */

    // получим 2ю точку для точки point, что бы образовалась вертикальная прямая
    const point2 = [point[0], point[1]+1]; // изменяем только координату Y. Формат [x, y]

    // теперь ищем точку пересечения
    const intersection = findCrossingPoint(left, right, point, point2);

    /**
     * Логика следующая:
     * 1) если rightX > leftX то точка point должна лежать выше точки пересечения
     * 2) если rightX < leftX то точка point должна лежать ниже точки пересечения
     */

    if (intersection === null) {
        // отрезок и вертикальная прямая на одной прямой, все нормально
        return true;
    }

    if (right[0] > left[0]) return point[1] > intersection[1];
    if (right[0] < left[0]) return point[1] < intersection[1];
};


const checkPoints = (aggregation) => {
    let isConvexity = true;

    for(let i = 0; i < aggregation.length; i+=1) {
        const elem = aggregation[i];

        const result = checkPoint(elem);

        if (!result) {
            isConvexity = false;
            break;
        }
    }

    return isConvexity;
};

const validate = (points) => {
    if (points.length <= 3) {
        console.log('Вы указали не достаточно точек');
        return false;
    }

    return true;
};

window.polygonConvexity = (points = testPoints) => {
    if (!validate(points)) return;

    const aggregation = createCombination(points);

    const isConvexity = checkPoints(aggregation);

    console.log(points);
    if (isConvexity) {
        console.log('Многоугольник является выпуклым')
    } else {
        console.log('Многоугольник не является выпуклым')
    }
};

polygonConvexity();