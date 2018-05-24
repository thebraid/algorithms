/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/arraySpiral.js":
/*!**********************************!*\
  !*** ./src/array/arraySpiral.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function newArray(width, height) {\n    const arr = [];\n\n    height = height ? height : width;\n    for (let i = 0; i < height; i++) {\n        arr[i] = Array(width).fill('-');\n    }\n\n    return arr;\n}\n\n\nfunction rotateFunc() {\n    let a = 1;\n\n    return function (direct) {\n        if (a >= 4) {\n            a = 0;\n        }\n        const result = direct[a];\n        a++;\n\n        return result;\n    }\n}\n\nconst rotate = rotateFunc();\n\n\nfunction increase(x, y, dx, dy, arr) {\n    x = x + dx;\n    y = y + dy;\n\n    y = (!arr[y] || arr[y][x] !== '-') ? (y - dy) : y;\n    x = (!arr[y][x] || arr[y][x] !== '-') ? (x - dx) : x;\n\n    return [x, y];\n}\n\n// Функция дополняющая число нулями на основании максимального значения.\n// Если будет всего 2 символа, то числа 1-9 будут преобразовы в 01-09\n// Если будет 3 символа, то 1 => 001, 10 => 010.\n// И так далее.\nfunction padNull(num, length) {\n    const maxLength = length.toString().length;\n    let str = num.toString();\n\n    while (str.length < maxLength) {\n        str = '0' + str;\n    }\n\n    return str;\n}\n\nwindow.arraySpiral = function (a = 4, b) {\n    b = b ? b : a;\n    const count = a * b;\n    const direct = [\n        [1, 0],   // right\n        [0, 1],   // down\n        [-1, 0],  // left\n        [0, -1]   // top\n    ];\n    const arr = newArray(a, b);\n\n    let x = 0; // указатель во внутреннем массиве [ [1,2,3,4], [], [], []]\n    let y = 0; // указатель во внешнем массиве [ [], [], [], []]\n    let dx;\n    let dy;\n\n    // начальное направление - right\n    [dx, dy] = direct[0];\n\n    for (let i = 1; i <= count; i++) {\n        i = padNull(i, count);\n\n        if (arr[y] && arr[y][x] && arr[y][x] === '-') {\n            arr[y][x] = i;\n            [x, y] = increase(x, y, dx, dy, arr);\n        } else {\n            // Изменяем направление\n            [dx, dy] = rotate(direct);\n\n            // Увеличиваем x и y проверяя, не вышли ли мы за пределы.\n            // Если вышли, уменьшаем нужную координату\n            [x, y] = increase(x, y, dx, dy, arr);\n\n\n            arr[y][x] = i;\n            // Опять увеличиваем x и y проверяя, не вышли ли мы за пределы.\n            // Если вышли, уменьшаем нужную координату\n            [x, y] = increase(x, y, dx, dy, arr);\n        }\n\n    }\n\n    console.dir(arr)\n};\n\n\n//# sourceURL=webpack:///./src/array/arraySpiral.js?");

/***/ }),

/***/ "./src/array/binarySearch.js":
/*!***********************************!*\
  !*** ./src/array/binarySearch.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// value - число поиска\n// arr - массив поиска\n\nfunction generateArray(n) {\n    const arr = Array(n);\n    for (let i = 0; i < n; i++) {\n        arr[i] = i + 1;\n    }\n    return arr;\n}\n\nconst myArr = generateArray(10);\n\nwindow.binarySearch = (value = 5, arr = myArr) => {\n    console.log(`\\n Ищем значение ${value} в массиве:`);\n    console.log(arr);\n\n    const n = arr.length - 1;\n    let leftIndex = 0;\n    let rightIndex = n;\n\n    if (value > arr[n]) {\n        console.log(`Значение ${value} нет в массиве`);\n        return;\n    }\n\n    function calc() {\n        // 2 указателя индексов - соседи\n        if (rightIndex - leftIndex === 1) {\n            if (arr[leftIndex] === value) {\n                console.log(leftIndex);\n              return;\n            } else if (arr[rightIndex] === value) {\n                console.log(rightIndex);\n                return;\n            } else {\n                console.log('найденного значения нет');\n                return;\n            }\n        }\n\n        let index = Math.floor((rightIndex + leftIndex) / 2);\n        if (value < arr[index]) {\n            rightIndex = index;\n            calc();\n        } else if (value > arr[index]) {\n            leftIndex = index;\n            calc();\n        } else {\n            console.log(`index = ${index} \\n `);\n        }\n    }\n\n    calc();\n};\n\n//# sourceURL=webpack:///./src/array/binarySearch.js?");

/***/ }),

/***/ "./src/array/getMaxSubSum.js":
/*!***********************************!*\
  !*** ./src/array/getMaxSubSum.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const defaultArr = [-1, 2, 3, -9, 11, -5, -2, 35];\n\nconst getMaxSubSum = (arr = defaultArr) => {\n    let maxSum = 0;\n    let partialSum = 0;\n\n    for(let i = 0; i < arr.length; i++) {\n        partialSum += arr[i];\n        console.log(partialSum);\n        maxSum = Math.max(maxSum, partialSum);\n\n        if (partialSum < 0) {\n            partialSum = 0;\n        }\n    }\n\n    return maxSum;\n};\n\nconst sum = getMaxSubSum();\nconsole.log(sum);\n\n//# sourceURL=webpack:///./src/array/getMaxSubSum.js?");

/***/ }),

/***/ "./src/array/reduceArray.js":
/*!**********************************!*\
  !*** ./src/array/reduceArray.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const data = [\n    {name: 'test1', value: 53},\n    {name: 'test2', value: 2},\n];\n\nwindow.reduceArray = function(array = data) {\n    const resultObj = {};\n\n    for (let i = 0; i < array.length; i++) {\n        resultObj[array[i].name] = array[i].value;\n    }\n\n    console.log(resultObj);\n};\n\n//# sourceURL=webpack:///./src/array/reduceArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.defaultArray = [6, 5, 3, -1, 0, -2, 8, 7, 2, 4, -16, 12, 54, 12, 65];\n\n//man\nconst man = __webpack_require__(/*! ./man */ \"./src/man.js\");\n\n// sort\nconst callAllSort = __webpack_require__(/*! ./sorts/callAllSort */ \"./src/sorts/callAllSort.js\");\nconst bubbleSort = __webpack_require__(/*! ./sorts/bubbleSort */ \"./src/sorts/bubbleSort.js\");\nconst choiceSort = __webpack_require__(/*! ./sorts/choiceSort */ \"./src/sorts/choiceSort.js\");\nconst insertSort = __webpack_require__(/*! ./sorts/insertSort */ \"./src/sorts/insertSort.js\");\nconst mergeSort = __webpack_require__(/*! ./sorts/mergeSort */ \"./src/sorts/mergeSort.js\");\nconst quickSort = __webpack_require__(/*! ./sorts/quickSort */ \"./src/sorts/quickSort.js\");\n\n// array\nconst reduceArray = __webpack_require__(/*! ./array/reduceArray */ \"./src/array/reduceArray.js\");\nconst arraySpiral = __webpack_require__(/*! ./array/arraySpiral */ \"./src/array/arraySpiral.js\");\nconst getMaxSubSum = __webpack_require__(/*! ./array/getMaxSubSum */ \"./src/array/getMaxSubSum.js\");\nconst binarySearch = __webpack_require__(/*! ./array/binarySearch */ \"./src/array/binarySearch.js\");\n\n// object\nconst revertList = __webpack_require__(/*! ./object/revertList */ \"./src/object/revertList.js\");\nconst treeDeep = __webpack_require__(/*! ./object/treeDeep */ \"./src/object/treeDeep.js\");\nconst treeWidth = __webpack_require__(/*! ./object/treeWidth */ \"./src/object/treeWidth.js\");\n\nconst revertstr = __webpack_require__(/*! ./string/revertStr */ \"./src/string/revertStr.js\");\n\n//other\nconst findSimpleNumbers = __webpack_require__(/*! ./other/findSimpleNumbers */ \"./src/other/findSimpleNumbers/index.js\");\nconst polindrome = __webpack_require__(/*! ./other/polindrome */ \"./src/other/polindrome/index.js\");\nconst chess = __webpack_require__(/*! ./other/chess */ \"./src/other/chess/index.js\");\nconst segmentOfArea = __webpack_require__(/*! ./other/segmentOfArea */ \"./src/other/segmentOfArea/index.js\");\nconst bracketsBalance = __webpack_require__(/*! ./other/bracketsBalance */ \"./src/other/bracketsBalance/index.js\");\nconst modules = __webpack_require__(/*! ./other/modules */ \"./src/other/modules/index.js\");\nconst randomInteger = __webpack_require__(/*! ./other/randomInteger */ \"./src/other/randomInteger/index.js\");\n\nconst findPathByFloid = __webpack_require__(/*! ./other/findPath/byFloid */ \"./src/other/findPath/byFloid/index.js\");\nconst findPathByDijkstra = __webpack_require__(/*! ./other/findPath/byDijkstra */ \"./src/other/findPath/byDijkstra/index.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/man.js":
/*!********************!*\
  !*** ./src/man.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.man = () => console.log(`\nдемо https://thebraid.github.io/algorithms/\n\n1. Сортировка массивов.\n   По умолчанию все функции сортировок используют массив defaultArray = [6, 5, 3, -1, 0, -2, 8, 7, 2, 4, -16, 12, 54, 12, 65].\n   Его можно изменить через глобальную переменную \"defaultArray\" и все сортировки будут брать этот массив.\n   Или можно передавать нужный массив как 1й аргумент в функцию.\n   Каждая из сортировок не меняет defaultArray.\n   \n   1.0) callSortAll()      - вызовет по очереди все сортировки с массивом по умолчанию.\n   1.1) bubbleSort(array)  - пузырьковая сортировка\n   1.2) choiceSort(array)  - сортировка выбором\n   1.3) insertSort(array)  - сортировка вставками\n   1.4) mergeSort(array)   - сортировка слиянием\n   1.5) quickSort(array)   - быстрая сортировка\n   \n2) Поиск простых чисел\n   Аргумент по умолчанию 100 - т.е. все простые числа до 100.\n\n   2.1) findSimpleNumber1(N) - первый вариант нахождения простых чисел\n   2.2) findSimpleNumber2(N) - улучшенный 1й вариант\n   2.3) findSimpleNumber3(N) - финальный вариант (улучшенный 2й вариант).\n   \n3) Заполнить массив по спирали \n  arraySpiral(NxM) где N = 4 по умолчанию,M = N по умолчанию\n  \n  пример вызова:\n    arraySpiral();    // 4x4\n    arraySpiral(5);   // 5x5\n    arraySpiral(5,7); // 5x7\n    \n4) Бинарный поиск по массиву\n    binarySearch(elem, array), где\n    elem  - элемент который ищем в массиве, по умолчанию = 5;\n    array - массив поиска, по умолчанию = [1,2,3,4,5,6,7,8,9,10]. Массив должен быть упорядоченным.\n    \n5) Баланс скобок в строке.\n   bracketBalance(str), где str по умолчанию = '{asda asdadasd (asdasd} 5434534}' (строка с ошибкой)\n   \n6) Расставить ферзей.\n   chess(N), где N по умолчанию = 8 (размер поля 8х8 и ищем расстановку 8 ферзей).\n   Можно задавать размер поля любым, но при значении 12 и свыше вычисления будут занимать длительное время.\n   \n7) Разворот обьекта в обратную сторону.\n  revertList(obj), для просмотра obj по умолчанию набрать \"revertList.default\"\n \n8) Обход дерева в глубину\n   treeDeep(tree), для просмотра tree по умолчанию набрать \"treeDeep.default\"\n\n9) Обход дерева в ширину\n   treeWidth(tree), для просмотра tree по умолчанию набрать \"treeWidth.default\"\n\n10) Нахождение пересечения прямоугольника с координатами x1,x2,y1,y2 с заданными координатами 2 точек прямой.\n   10.1) rectAndLine.draw() - нарисует по умолчанию прямоугольник x1=-250, x2=250, y1=-250, y2=250 и прямую с координатами точек [-5, 1] и [4, 2].\n   10.2) rectAndLine.setRectCoords(x1, x2, y1, y2); - изменит координаты прямоугольника\n   10.3) rectAndLine.setPoints([x1, y1], [x2, y2]);   - изменит координаты точек прямой\n     \n11) Проверка строки на полиндром\n    polindrom(str), str по умолчанию = 'таррат'\n    \n12) Получение целого числа в заданном диапазоне.\n    randomInteger(), или 0 или 1\n    randomInteger(max), от 0 до max\n    randomInteger(min, max), от min до max\n\n13) Нахождение оптимального пути между графами с помощью алгоритма Флойда — Уоршелла\n    floid.init() - выведет результат поиска по установленному графу в консоль ( + отобразит заднный граф на экране).\n    floid.changeStart(index) - изменит начальную позицию. \n    floid.changeEnd(index) - изменит конечную позицию. \n    \n14) Нахождение оптимального пути между графами с помощью алгоритма Дийкстры\n    dijkstra.init() - выведет результат поиска по установленному графу в консоль ( + отобразит заднный граф на экране).\n    dijkstra.changeStart(index) - изменит начальную позицию. \n    dijkstra.changeEnd(index) - изменит конечную позицию. \n\n15) Импорт модулей в зависимости от их зависимостей, с проверкой на зацикленность.\n    modules.init() - выведет результат о предустановленных зависимостях.\n    modules.changeDepends(newDepends) - задает новые зависимости и отображает результат.\n    modules.makeMistake() - изменит текущие зависимости но новые с циклической зависимостью.\n    \n    modules.depends - покажет текущие зависимости.\n    \n`);\n\n\n//# sourceURL=webpack:///./src/man.js?");

/***/ }),

/***/ "./src/object/revertList.js":
/*!**********************************!*\
  !*** ./src/object/revertList.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// разворачивание односвязанного списка\n\nconst myList = {\n    \"value\": \"a\",\n    \"child\": {\n        \"value\": \"b\",\n        \"child\": {\n            \"value\": \"c\",\n            \"child\": {\n                \"value\": \"d\",\n                \"child\": {\n                    \"value\": \"e\",\n                    \"child\": null\n                }\n            }\n        }\n    }\n};\n\nwindow.revertList = function(list = myList, child = null) {\n    let newList;\n\n    if (list.child === null) {\n        newList = {value: list.value, child: child};\n        console.log(`Исходный list: \\n ${JSON.stringify(myList)}`);\n        console.log(`Результат: \\n ${JSON.stringify(newList)}`);\n    } else {\n        newList = {value: list.value, child: child};\n        revertList(list.child, newList)\n    }\n};\n\nrevertList.default = myList;\n\n\n// const reverList2 = (first = true, list = myList, child = null) => {\n//     if (list.child === null) {\n//         return {value: list.value, child: child};\n//     } else {\n//         const newChild = {value: list.value, child: child};\n//         const newList = list.child;\n//         return reverList2(newList, newChild);\n//     }\n// };\n//\n// const list2 = reverList2();\n// console.log(list2);\n\n//# sourceURL=webpack:///./src/object/revertList.js?");

/***/ }),

/***/ "./src/object/treeDeep.js":
/*!********************************!*\
  !*** ./src/object/treeDeep.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Обход дерева в глубину\n\nconst myTree = {\n    \"value\": 1,\n    \"items\": [\n        {\n            \"value\": 2,\n            \"items\": [\n                {\"value\": 4},\n                {\"value\": 5}\n            ]\n        },\n        {\n            \"value\": 3,\n            \"items\": [\n                {\"value\": 6}\n            ]\n        }\n    ]\n};\n\nwindow.treeDeep = function (tree = myTree) {\n    const {value, items} = tree;\n    console.log(value);\n\n    if (!items) {\n        return;\n    }\n\n    items.map(treeDeep)\n};\n\ntreeDeep.default = myTree;\n\n//# sourceURL=webpack:///./src/object/treeDeep.js?");

/***/ }),

/***/ "./src/object/treeWidth.js":
/*!*********************************!*\
  !*** ./src/object/treeWidth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Обход дерева в ширину\n\nconst myTree = {\n    \"value\": 1,\n    \"items\": [\n        {\n            \"value\": 2,\n            \"items\": [\n                {\n                    \"value\": 4,\n                    \"items\": [\n                        {\"value\": 7},\n                        {\n                          \"value\": 8,\n                          \"items\": [\n                              {\"value\": 11},\n                              {\"value\": 12}\n                          ]\n                        }\n                    ]\n                },\n                {\n                    \"value\": 5,\n                    \"items\": [\n                        {\"value\": 9},\n                        {\"value\": 10}\n                    ]\n                }\n            ]\n        },\n        {\n            \"value\": 3,\n            \"items\": [\n                {\n                    \"value\": 6\n                }\n            ]\n        }\n    ]\n};\n\nwindow.treeWidth = function (tree = myTree) {\n    const { value, items } = tree;\n    console.log(value);\n\n    function innerWidth(items) {\n        let innerItems = [];\n    \n        items.forEach(item => {\n            console.log(item.value);\n            \n            if (item.items) {\n            \tinnerItems = [...innerItems, ...item.items];\n            }\n\n        });\n\n        if (innerItems.length) {\n        \tinnerWidth(innerItems);\n        }\n    }\n\n    innerWidth(items)\n};\n\ntreeWidth.default = myTree;\n\n//# sourceURL=webpack:///./src/object/treeWidth.js?");

/***/ }),

/***/ "./src/other/bracketsBalance/index.js":
/*!********************************************!*\
  !*** ./src/other/bracketsBalance/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const test_str = '{asda asdadasd (asdasd} 5434534}';\n\nwindow.bracketsBalance = function (str = test_str ) {\n  const stack = [];\n\n  const openBrackets = {\n    '{': true,\n    '(': true,\n    '[': true,\n  };\n\n  const closeBrackets = {\n    '}': '{',\n    ')': '(',\n    ']': '[',\n  };\n\n  for (let i = 0; i < str.length; i++) {\n    if (openBrackets[str[i]]) {\n      stack.push(str[i]);\n      continue;\n    }\n\n    if (closeBrackets[str[i]]) {\n      if (stack[stack.length - 1] === closeBrackets[str[i]]) {\n        stack.pop();\n      } else {\n        console.log(`исходный текст: \"${str}\"`);\n        console.log(`ошибка на позиции ${i}`);\n\n        const resultStr = str.slice(0, i-1);\n        console.log(`ошибка возникла здесь: \"${resultStr}>>${str[i]}<<\"`);\n\n        return;\n      }\n    }\n  }\n\n  if (stack.length){\n    console.log('не закрыты все скобки');\n  } else {\n    console.log('ошибок нет');\n  }\n\n};\n\n\n//# sourceURL=webpack:///./src/other/bracketsBalance/index.js?");

/***/ }),

/***/ "./src/other/chess/index.js":
/*!**********************************!*\
  !*** ./src/other/chess/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.chess = function(N = 8) {\n  const store = [];\n\n  function generateField() {\n    const field = [];\n\n    for (let i = 1; i <= N; i++ ){\n      field.push(new Array(N).fill('-'))\n    }\n\n    return field;\n  }\n\n  function fillDiagonals(field, x, y) {\n    for (let i = -N; i < N; i++) {\n      if (i === 0) continue; // занятая позиция \"1\"\n\n      // диагональ лево[верх] => право[низ]\n      const resultX = x-i;\n      const resultYLeft = y-i;\n\n      if (resultX >= 0 && resultX < N && resultYLeft >= 0 && resultYLeft < N) {\n        field[resultX][resultYLeft] = '*';\n      }\n\n\n      // диагональ право[верх] => лево[низ]\n      const resultYRight = y+i;\n\n      if (resultX >= 0 && resultX < N && resultYRight >= 0 && resultYRight < N) {\n        field[resultX][resultYRight] = '*';\n      }\n    }\n  }\n\n  function setQueen(field, x, y) {\n    for (let i = 0; i < N; i++) {\n      for (let j = 0; j < N; j++) {\n\n        if (i === x && j === y) {\n          field[i][j] = 1;\n          continue;\n        }\n\n        fillDiagonals(field, x, y); // помечаем диагонали занятыми\n\n        if (i === x || j === y) { // помечаем прямые линии как занятые, где есть ферзь\n          field[i][j] = '*'\n        }\n      }\n    }\n  }\n\n\n  function setReqursiveQueens(field, row){\n\n    if (row === N) {\n      store.push(field);\n      return;\n    }\n\n    for (let i = 0; i < N; i++) {\n      if (field[row][i] === '*' || field[row][i] === 1) continue;\n\n      let innerField = JSON.parse(JSON.stringify(field));\n\n      setQueen(innerField, row, i);\n      const newRow = row + 1;\n\n      // console.log(innerField);\n\n\n      setReqursiveQueens(innerField, newRow)\n    }\n  }\n\n  function spreadBoard(y){\n    const field = generateField();\n\n    let row = 0;\n\n    setQueen(field, row, y); // ряд 0 теперь занят\n\n    row++; // ряд с которым работаем теперь\n\n    setReqursiveQueens(field, row);\n\n  }\n\n  for (let i = 0; i < N; i++) {\n    spreadBoard(i);\n  }\n\n  console.log(store);\n};\n\n\n//# sourceURL=webpack:///./src/other/chess/index.js?");

/***/ }),

/***/ "./src/other/findPath/byDijkstra/index.js":
/*!************************************************!*\
  !*** ./src/other/findPath/byDijkstra/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cities = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];\n\nconst roads = [\n    { from: 0, to: 1, km: 1 },\n    { from: 1, to: 3, km: 4 },\n    { from: 3, to: 4, km: 4 },\n    { from: 0, to: 2, km: 3 },\n    { from: 2, to: 4, km: 7 },\n    { from: 5, to: 3, km: 9 },\n    { from: 5, to: 0, km: 3 },\n\n\n    {from: 3, to: 7, km: 2},\n    {from: 4, to: 8, km: 1},\n    {from: 8, to: 7, km: 2},\n    {from: 2, to: 6, km: 6},\n    {from: 6, to: 4, km: 3},\n    {from: 6, to: 7, km: 4},\n];\n\nconst startCityIndex = 0;\nconst endCityIndex = 4;\n\nclass Dijkstra {\n    constructor(cities, roads, start, end) {\n        this.cities = cities;\n        this.roads = roads;\n        this.start = start;\n        this.end = end;\n\n        this.citiesRoads = Object.create(null);\n        this.history = Object.create(null);\n    }\n\n    /**\n     * Создание перечня из городов и всех дорог соответствующие им\n     */\n    fillCityRoads() {\n        const { citiesRoads, roads } = this;\n\n        roads.forEach( ({from, to, km}) => {\n            if (!citiesRoads[from]) {\n                citiesRoads[from] = [];\n            }\n\n            if (!citiesRoads[to]) {\n                citiesRoads[to] = [];\n            }\n\n            citiesRoads[from].push({from, to, km});\n            citiesRoads[to].push({from: to, to: from, km});\n        });\n    };\n\n    init() {\n        const app = document.getElementById('app');\n\n        app.innerHTML = '<img src=\"./src/other/findPath/common/graph.png\"/>';\n\n        console.log('Алгоритм Дийсктры');\n        this.fillCityRoads();\n        this.search();\n    }\n\n    getDistance(node) {\n        if (node === null) return Infinity;\n\n        if(Array.isArray(node)) {\n            let sum = 0;\n\n            node.forEach(elem => {\n                sum += elem.km;\n            });\n\n            return sum;\n        }\n\n        return node.km;\n    }\n\n    recurciveSearch(nodes) {\n        if (nodes.every(value => value.done)) return;\n\n        const { citiesRoads, history } = this;\n\n        let nextNodes = [];\n\n        // обходим все узлы к которым ведет путь из искомого узла\n        // [ {start: 0 , nodes: [...]}, {}, {}]\n        nodes.forEach(node => {\n            const { start, nodes: childNodes } = node;\n\n            history[start] = {\n                ...history[start],\n                done: true\n            };\n\n            childNodes.forEach(child => {\n                if (history[child.to] && history[child.to].done) return;\n\n                // console.log(history);\n\n                if (!history[child.to]) {\n\n                    let newPath = [];\n\n                    const pathFromChild = history[child.from].path;\n\n                    if (!pathFromChild) {\n                        newPath = [child]\n                    } else {\n                        newPath = pathFromChild.concat(child);\n                    }\n\n                    history[child.to] = {\n                        done: false,\n                        path: newPath\n                    };\n\n                } else {\n                    // уже есть путь, нужно проверить\n                    const oldPath = history[child.to].path;\n                    const oldDistance = this.getDistance(oldPath);\n\n                    // расстояние - бесконечность в случае, если мы 1й раз обращаемся у узлу.\n                    if(!isFinite(oldDistance)) {\n\n                        history[child.to] = {\n                            ...history[child.to],\n                            path: [child]\n                        };\n\n                    } else {\n                        // необходимо проверить со старыми данными, и записать наименьшее значение\n\n                        // расстояние от предыдущего узла до текущего\n                        const distanceFrom = this.getDistance(history[child.from].path);\n\n                        // расстояние от текущего до заданного\n                        const distanceTo = this.getDistance(child);\n\n                        // расстояние от точки начала до следующего узла\n                        const total = this.getDistance(history[child.to].path);\n\n                        // если до заданного узла найден меньший путь, то оставляем его\n                        if (total < (distanceFrom + distanceTo)) return;\n\n                        history[child.to] = {\n                            ...history[child.to],\n                            path: history[child.from].path.concat(child)\n                        }\n                    }\n\n                }\n\n                let nextNodesFilter = citiesRoads[child.to];\n                nextNodesFilter = nextNodesFilter.filter(node => node.to !== start);\n\n                nextNodes = nextNodes.concat({start: child.to, nodes: nextNodesFilter});\n            });\n        });\n\n        this.count++;\n        this.recurciveSearch(nextNodes)\n    }\n\n    search() {\n        const { citiesRoads, start } = this;\n        const nodes = citiesRoads[start];\n\n        this.recurciveSearch([{start, nodes}]);\n\n        this.showResult();\n    }\n\n    showResult() {\n        const { start, end } = this;\n        console.log(this.history);\n\n        const path = this.history[end].path;\n        const distance = this.getDistance(path);\n\n        let formatPath = '';\n\n        for (let i = 0; i < path.length; i++) {\n            if (i === 0) {\n                formatPath += `${path[i].from} > ${path[i].to}`;\n                continue;\n            }\n\n            if (i === (path.length - 1)) {\n                formatPath += ` > ${path[i].to}`;\n                continue;\n            }\n\n            formatPath += ` > ${path[i].to}`\n        }\n\n        console.log(`Минимальное рассояние от точки ${start} до ${end}: ${distance}km`);\n        console.log(`Необходимо пройти следующий путь: ${formatPath}\\n\\n`);\n    }\n\n    validate(index) {\n        if (index === this.start) {\n            console.log(`Введеное значение равно точке старта`);\n            return false;\n        }\n\n        if (index === this.end) {\n            console.log(`Введеное значение равно точке назначения`);\n            return false;\n        }\n\n        if (index > this.cities.length - 1) {\n            console.log(`Введенное значение ${index} слишком велико. Max значение: ${this.cities.length - 1}`);\n            return false;\n        }\n\n        if (index < 0) {\n            console.log(`Введенное значение ${index} не может быть меньше 0`);\n            return false;\n        }\n\n        return true;\n    }\n\n    clear() {\n        this.history = Object.create(null);\n    }\n\n    changeEnd(index) {\n        if(!this.validate(index)) return;\n\n        this.end = index;\n        this.showResult();\n    }\n\n    changeStart(index) {\n        if(!this.validate(index)) return;\n\n        this.clear();\n        this.start = index;\n        this.search();\n    }\n}\n\nwindow.dijkstra = new Dijkstra(cities, roads, startCityIndex, endCityIndex);\n\n\n//# sourceURL=webpack:///./src/other/findPath/byDijkstra/index.js?");

/***/ }),

/***/ "./src/other/findPath/byFloid/index.js":
/*!*********************************************!*\
  !*** ./src/other/findPath/byFloid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 15. Есть массив с названием городов. Есть массив с информацией о дорогах между ними.\n//   Информация о дорогах: индекс первого города, индекс второго, длина в километрах.\n//   Нужно вычислить самый короткий путь между заданными городами, маршрут и длину.\n\nconst cities = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];\n\nconst roads = [\n  { from: 0, to: 1, km: 1 },\n  { from: 1, to: 3, km: 4 },\n  { from: 3, to: 4, km: 4 },\n  { from: 0, to: 2, km: 3 },\n  { from: 2, to: 4, km: 7 },\n  { from: 5, to: 3, km: 9 },\n  { from: 5, to: 0, km: 3 },\n\n\n  {from: 3, to: 7, km: 2},\n  {from: 4, to: 8, km: 1},\n  {from: 8, to: 7, km: 2},\n  {from: 2, to: 6, km: 6},\n  {from: 6, to: 4, km: 3},\n  {from: 6, to: 7, km: 4},\n];\n\nconst startCityIndex = 0;\nconst endCityIndex = 4;\n\nclass Floid {\n  constructor(cities, roads, start, end) {\n    this.cities = cities;\n    this.roads = roads;\n    this.start = start;\n    this.end = end;\n\n    this.citiesRoads = Object.create(null);\n    this.matrix = [];\n  }\n\n  fillCityRoads() {\n    const { citiesRoads } = this;\n\n    roads.forEach( ({from, to, km}) => {\n      if (!citiesRoads[from]) {\n        citiesRoads[from] = [];\n      }\n\n      if (!citiesRoads[to]) {\n        citiesRoads[to] = [];\n      }\n\n      citiesRoads[from].push({to, km});\n      citiesRoads[to].push({to: from, km});\n    });\n  };\n\n  initMatrix() {\n    // создаем матрицу NxN где N - кол-во городов.\n    const N = this.cities.length;\n\n    for (let i = 0; i < N; i += 1) {\n      this.matrix[i] = [];\n\n      for (let j = 0; j < N; j += 1) {\n        if (i === j) {\n          this.matrix[i].push(0);\n          continue;\n        }\n\n        this.matrix[i].push('-')\n      }\n    }\n  }\n\n  firstFill() {\n    const { citiesRoads } = this;\n\n    for (let key in citiesRoads) {\n      citiesRoads[key].forEach(({to, km}) => {\n        this.matrix[key][to] = {from: Number(key), to, km};\n      })\n    }\n  }\n\n  getTotalDistance(elem) {\n    if (Array.isArray(elem)) {\n      return elem.reduce( (sum, elem) => {\n        return sum + elem.km;\n      }, 0)\n    } else {\n      return elem.km;\n    }\n  }\n\n  recursiveFill(count = 0) {\n    const N = this.cities.length;\n\n    if (count === N) return;\n\n    const { matrix } = this;\n\n    for (let i = 0; i < N; i += 1) {\n      // исключаем по очереди каждый ряд\n      if (i === count) continue;\n\n      for (let j = 0; j < N; j += 1) {\n        // исключаем все ряды\n        // т.е. для 1 раз исключаем из выборки 1ю строку и 1 столбец (затем 2й строку и 2й столбец)\n        if (j === count) continue;\n\n        // i === j когда это один и тот же узел, с расстоянием 0\n        if (matrix[i][j] === 0) continue;\n\n        // нас интересуют только те позиции (в исключенных ряду и стобце) значение в которых не равны '-' одновременно\n        if (matrix[count][j] === '-') continue;\n        if (matrix[i][count] === '-') continue;\n\n        const nextData = [].concat(matrix[i][count], matrix[count][j]);\n        // если в ячейке уже есть данные, проверяем их на минимальное расстояние\n        if (matrix[i][j] !== '-') {\n          const currentDistance = this.getTotalDistance(matrix[i][j]);\n          const nextDistance = this.getTotalDistance(nextData);\n\n          // если записанное расстояние меньше нового, оставляем старое значение\n          if (currentDistance < nextDistance) continue;\n        }\n\n        this.matrix[i][j] = [].concat(matrix[i][count], matrix[count][j]);\n      }\n    }\n\n    count++;\n    this.recursiveFill(count)\n  }\n\n  getPath() {\n    const { matrix, start, end, cities } = this;\n\n    const resultData = matrix[start][end];\n\n    if (Array.isArray(resultData)) {\n      let result = '';\n\n      for (let i = 0; i < resultData.length; i += 1){\n        if (i === 0) {\n          result += `${cities[resultData[i].from]}(${resultData[i].from}) > ${cities[resultData[i].to]}(${resultData[i].to})`;\n          continue\n        }\n\n        if (i === (resultData.length - 1)) {\n          result += ` > ${cities[resultData[i].to]}(${resultData[i].to})`;\n          continue\n        }\n\n        result += `> ${cities[resultData[i].to]}(${resultData[i].to})`;\n      }\n\n      return result;\n\n    } else { //object\n      return `${resultData.from} > ${resultData.to}`;\n    }\n  }\n\n  showResult() {\n    const { matrix, start, end } = this;\n\n    const distance = this.getTotalDistance(matrix[start][end]);\n    console.log(`Минимальное рассояние от точки ${start} до ${end}: ${distance}km`);\n\n    const path = this.getPath();\n    console.log(`Необходимо пройти следующий путь: ${path}\\n\\n`);\n\n    console.log(this.citiesRoads);\n  }\n\n  validate(index) {\n      if (index === this.start) {\n          console.log(`Введеное значение равно точке старта`);\n          return false;\n      }\n\n      if (index === this.end) {\n          console.log(`Введеное значение равно точке назначения`);\n          return false;\n      }\n\n      if (index > this.cities.length - 1) {\n          console.log(`Введенное значение ${index} слишком велико. Max значение: ${this.cities.length - 1}`);\n          return false;\n      }\n\n      if (index < 0) {\n          console.log(`Введенное значение ${index} не может быть меньше 0`);\n          return false;\n      }\n\n      return true;\n  }\n\n  changeStart(index) {\n    if(!this.validate(index)) return;\n\n    this.start = index;\n    this.showResult();\n  }\n\n  changeEnd(index) {\n    if(!this.validate(index)) return;\n\n    this.end = index;\n    this.showResult();\n  }\n\n  init() {\n    const app = document.getElementById('app');\n\n    app.innerHTML = '<img src=\"./src/other/findPath/common/graph.png\"/>';\n\n    console.log('Алгоритм Флойда — Уоршелла');\n    this.fillCityRoads();\n    this.initMatrix();\n    this.search();\n  }\n\n  search() {\n    this.firstFill();\n    this.recursiveFill();\n    this.showResult();\n  }\n}\n\nwindow.floid = new Floid(cities, roads, startCityIndex, endCityIndex);\n\n\n//# sourceURL=webpack:///./src/other/findPath/byFloid/index.js?");

/***/ }),

/***/ "./src/other/findSimpleNumbers/index.js":
/*!**********************************************!*\
  !*** ./src/other/findSimpleNumbers/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const N = 100;\n\nwindow.findSimpleNumber1 = (n = N) => {\n    const arr = Array(n + 1).fill(true);\n    const result = [2];\n    const START = 3;\n\n    // исключаем все четные значение начиная с 4\n    for (let i = 4; i < arr.length; i += 2) {\n        arr[i] = false;\n    }\n\n    for (let j = START; j < arr.length; j += 2) {\n        if (!arr[j]) continue;\n        result.push(j);\n\n        let a = 2 * j;\n        while (a < n) {\n            arr[a] = false;\n\n            a += j;\n        }\n    }\n\n    console.log(result);\n\n};\n\nwindow.findSimpleNumber2 = (n = N) => {\n    const result = [];\n\n    next:\n        for (let i = 2; i <= n; i++) {\n\n            for (let j = 2; j < i; j++) {\n                if (i % j === 0) continue next;\n            }\n\n            result.push(i);\n        }\n\n    console.log(result);\n};\n\n// не учитываем четные числа\nwindow.findSimpleNumber3 = (n = N) => {\n    const result = [2];\n\n    next:\n        for (let i = 3; i <= n; i+=2) {\n\n            for (let j = 3; j < i; j+=2) {\n                if (i % j === 0) continue next;\n            }\n\n            result.push(i);\n        }\n\n    console.log(result);\n};\n\n//# sourceURL=webpack:///./src/other/findSimpleNumbers/index.js?");

/***/ }),

/***/ "./src/other/modules/depends.json":
/*!****************************************!*\
  !*** ./src/other/modules/depends.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

eval("module.exports = [{\"name\":\"module1\",\"depend\":\"module2\"},{\"name\":\"module2\",\"depend\":\"module3\"},{\"name\":\"module2\",\"depend\":\"module4\"},{\"name\":\"module3\",\"depend\":\"module4\"},{\"name\":\"module5\",\"depend\":\"module4\"},{\"name\":\"module8\",\"depend\":\"module7\"},{\"name\":\"module8\",\"depend\":\"module6\"},{\"name\":\"module7\",\"depend\":\"module4\"},{\"name\":\"module6\",\"depend\":\"module5\"}];\n\n//# sourceURL=webpack:///./src/other/modules/depends.json?");

/***/ }),

/***/ "./src/other/modules/dependsWithError.json":
/*!*************************************************!*\
  !*** ./src/other/modules/dependsWithError.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [{\"name\":\"module1\",\"depend\":\"module2\"},{\"name\":\"module2\",\"depend\":\"module3\"},{\"name\":\"module2\",\"depend\":\"module4\"},{\"name\":\"module3\",\"depend\":\"module4\"},{\"name\":\"module4\",\"depend\":\"module1\"}];\n\n//# sourceURL=webpack:///./src/other/modules/dependsWithError.json?");

/***/ }),

/***/ "./src/other/modules/index.js":
/*!************************************!*\
  !*** ./src/other/modules/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _depends_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./depends.json */ \"./src/other/modules/depends.json\");\nvar _depends_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _depends_json__WEBPACK_IMPORTED_MODULE_0__, {\"default\": _depends_json__WEBPACK_IMPORTED_MODULE_0__});\n/* harmony import */ var _dependsWithError_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependsWithError.json */ \"./src/other/modules/dependsWithError.json\");\nvar _dependsWithError_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _dependsWithError_json__WEBPACK_IMPORTED_MODULE_1__, {\"default\": _dependsWithError_json__WEBPACK_IMPORTED_MODULE_1__});\n/**\nМодули. Есть набор js файлов. Они зависят друг от друга. Есть json файл в котором описаны зависимости.\nОни описанны в виде массива обьектов. Каждый объект - это зависимость между модулями с 2 полями \"что зависит\" и \"от\nчего зависит\". В этих полях пути к файлам. Или можно считать, что все файлы лежат в одной папке и значения полей -\nпросто названия файлов. Нужно получить массив путей (названий) файлов, который задает, в каком порядке их склеить в\nбандл. Если найдена циклическая зависимость, нужно выдавать ошибку.\n*/\n\n\n\n/**\n    Структура зависимостей модулей\n\n    1\n    └───2\n        ├───3\n        │   └───4\n        └───4\n    5\n    └───4\n\n    8\n    ├───7\n    │   └───4\n    └───6\n        └───5\n\n    очередность 4, 3, 2, 1, 5, 7, 6, 8\n */\n\n\n\n\n/**\n Структура зависимостей модулей с циклической зависимостью\n\n    1\n    └───2\n        ├───3\n        │   └───4\n        └───4   └───1\n            └───1\n\n */\n\n\nclass Modules {\n    constructor(depends) {\n        this.store = new Map();\n        this.resultImport = [];\n        this.history = Object.create(null);\n        this.isError = false;\n        this.depends = depends;\n    }\n\n    initStore() {\n        const { depends, store } = this;\n\n        depends.forEach(({name, depend}) => {\n            if(!store.has(name)) store.set(name, new Set());\n\n            store.get(name).add({depend});\n        });\n    }\n\n    recurciveFindPaths(key, localHistory) {\n        const { history, resultImport, store } = this;\n\n        if (history[key]) return;\n\n        const modules = Array.from(store.get(key));\n\n        for (let i = 0; i < modules.length; i++) {\n            const module = modules[i];\n            if (history[module.depend]) continue;\n\n            if (localHistory[module.depend]) {\n                console.log(`циклическая зависимость на модуле ${key} => ${module.depend}`);\n                this.isError = true;\n                return;\n            }\n\n\n            if (!store.has(module.depend)) {\n                localHistory[module.depend] = true; // встретили модуль в рамках текущей рекурсии\n                resultImport.push(module.depend);\n                history[module.depend] = true; // встретили модуль, повторно импортить не будем\n            } else {\n                localHistory[module.depend] = true; // встретили модуль в рамках текущей рекурсии\n                this.recurciveFindPaths(module.depend, localHistory);\n                resultImport.push(module.depend);\n                history[module.depend] = true; // встретили модуль, повторно импортить не будем\n            }\n        }\n    };\n\n    findPaths() {\n        const { store, resultImport, history } = this;\n\n        for(let key of store.keys()) {\n            if (history[key]) continue;\n\n            const localHistory = Object.create(null); // история вызова модулей в рамках одной рекурсии.\n            localHistory[key] = true; // если встретим в рекурсии эти значения опять, сгенерируем ошибку\n\n            this.recurciveFindPaths(key, localHistory);\n            resultImport.push(key);\n            history[key] = true;\n        }\n    }\n\n    showResult() {\n        const { isError, resultImport } = this;\n\n        if (!isError) {\n            console.log(resultImport);\n        }\n    }\n\n    init() {\n        this.initStore();\n        this.findPaths();\n        this.showResult();\n    }\n\n    reset() {\n        this.store.clear();\n        this.resultImport = [];\n        this.history = Object.create(null);\n        this.isError = false;\n    }\n\n    changeDepends(newDepends) {\n        this.reset();\n\n        this.depends = newDepends;\n        this.init();\n    }\n\n    makeMistake() {\n        this.changeDepends(_dependsWithError_json__WEBPACK_IMPORTED_MODULE_1__);\n    }\n}\n\nwindow.modules = new Modules(_depends_json__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/other/modules/index.js?");

/***/ }),

/***/ "./src/other/polindrome/index.js":
/*!***************************************!*\
  !*** ./src/other/polindrome/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const text = 'таррат';\n\nconst polindrom1 = (str = text) => {\n  const str2 = str.split('').reverse().join('');\n\n  console.log(str2 === str);\n};\n\nwindow.polindrom = (str = text) => {\n  console.log(`исходные текст: ${str}`);\n\n  let isEqual = true;\n\n  for(let i = 0, j = (str.length-1) ; i < str.length; i++, j--) {\n    if (i === j) break;\n\n    if (str[i] !== str[j]) {\n      isEqual = false;\n    }\n  }\n\n  console.log(`${isEqual ? 'Полиндром' : 'Не полиндром'} \\n\\n`);\n};\n\n//# sourceURL=webpack:///./src/other/polindrome/index.js?");

/***/ }),

/***/ "./src/other/randomInteger/index.js":
/*!******************************************!*\
  !*** ./src/other/randomInteger/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.randomInteger = (...args) => {\n  if (args.length === 0) {\n    console.log(Math.round(Math.random()));\n  } else if (args.length === 1) {\n    const max = args[0];\n    console.log(Math.round(Math.random()*max));\n  } else {\n    let [min, max] = args;\n\n    if (min > max) {\n      [min, max] = [max, min];\n    }\n\n    console.log(Math.round(min + (Math.random() * (max - min))));\n  }\n};\n\n\n//# sourceURL=webpack:///./src/other/randomInteger/index.js?");

/***/ }),

/***/ "./src/other/segmentOfArea/index.js":
/*!******************************************!*\
  !*** ./src/other/segmentOfArea/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Draw {\n  constructor() {\n    this.rectCoords = [-250, 250, -250, 250]; // x1, x2, y1, y2 - координаты прямоугольника со значением по умолчанию\n    this.rectWidth = Math.abs(this.rectCoords[1]- this.rectCoords[0]); // разница x2 - x1 по модулю\n    this.rectHeight = Math.abs(this.rectCoords[3]- this.rectCoords[2]); // разница y2 - y1 по модулю\n\n    // this.pointA = [-5, 1]; // первая точка прямой\n    // this.pointB = [4, 2]; // вторая точка прямой\n\n    this.pointA = [-50, -50]; // первая точка прямой\n    this.pointB = [50, 50]; // вторая точка прямой\n\n    this.result = []; // массив, куда будем складывать найденные точки пересечения прямой с прямоугольником\n  }\n\n  /**\n   * Находит точку пересечения двух прямых\n   * @param {number} a1 - координаты 1 прямой 1й точки\n   * @param {number} a2 - координаты 1 прямой 2й точки\n   * @param {number} b1 - координаты 2 прямой 1й точки\n   * @param {number} b2 - координаты 2 прямой 2й точки\n   */\n  findCrossingPoint(a1, a2, b1, b2) {\n    const [x1, y1] = a1;\n    const [x2, y2] = a2;\n\n    const [x3, y3] = b1;\n    const [x4, y4] = b2;\n\n\n    // выведенная формула из 2 уравнений прямой, приравненных друг к другу\n    const x = ( x4*(y1*x2 - y2*x1 - y3*x2 + y3*x1) + x3*(y2*x1 - y1*x2 + y4*x2 - y4*x1) ) / ( y4*(x2-x1) + y3*(x1-x2) + y2*(x3-x4) + y1*(x4-x3) ) ;\n\n\n    if (Math.abs(x) === Infinity) {\n      console.log('Данные прямые:');\n      console.log(a1, a2);\n      console.log(b1, b2);\n      console.log('Параллельны друг другу');\n      return null;\n    }\n\n    // TODO Обработать x2 === x1 (вертикальная прямая);\n\n    // аналогично выведена формула на основании x\n    const y = ( x*(y2-y1) - y2*x1 + y1*x2 ) / (x2 - x1);\n\n    if (isNaN(y)) {\n      // console.log(`y = ${y}`);\n      return null;\n    }\n\n    return [x, y];\n  };\n\n  clear() {\n    const canvas = document.getElementById('canvas');\n    if (canvas) canvas.remove();\n  }\n\n  isNotIdenticalResult([val1, val2]) {\n    let flag = true;\n\n    this.result.forEach(([oldVal1, oldVal2]) => {\n      if (oldVal1 === val1 && oldVal2 === val2) {\n        flag = false;\n      }\n    });\n\n    return flag;\n  }\n\n\n  /**\n   * Нахождение пересечения прямой со всеми ребрами прямоугольника\n   */\n  findCrossingPoints() {\n    const [x1, x2, y1, y2] = this.rectCoords;\n\n    const corner1 = [x1, y1];\n    const corner2 = [x1, y2];\n    const corner3 = [x2, y2];\n    const corner4 = [x2, y1];\n\n    // обозначаем все ребра прямоугольника, с которыми будем искать пересечения с точками заданной прямой\n    const ribs = [[corner1, corner2], [corner2, corner3], [corner3, corner4], [corner4, corner1]];\n\n    ribs.forEach(([cornerA, cornerB]) => {\n      const value = this.findCrossingPoint(this.pointA, this.pointB, cornerA, cornerB);\n\n      if (!value) return;\n\n      // если пересечения больше габарита прямоугольника, то не записываем их в результат.\n      if (value[0] > x2) return;\n      if (value[0] < x1) return;\n\n      if (value[1] > y2) return;\n      if (value[1] < y1) return;\n\n      if (value && this.isNotIdenticalResult(value)) {\n        this.result.push(value);\n      }\n\n    })\n  }\n\n  /**\n   * Рисует саму рамку\n   */\n  drawRectangle() {\n    const { rectWidth, rectHeight } = this;\n\n    this.clear();\n\n    const canvas = document.createElement('canvas');\n    canvas.id = 'canvas';\n    canvas.width = rectWidth;\n    canvas.height = rectHeight;\n\n    const ctx = canvas.getContext('2d');\n\n    ctx.beginPath();\n    ctx.moveTo(0, 0);\n    ctx.lineTo(rectWidth, 0);\n    ctx.lineTo(rectWidth, rectHeight);\n    ctx.lineTo(0, rectHeight);\n    ctx.closePath();\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n\n    const app = document.getElementById('app');\n\n    app.appendChild(canvas);\n  }\n\n  /**\n   * Рисует координаты\n   */\n  drawTextCoords(ctx, correctionX, correctionY) {\n    const { rectWidth, rectHeight, rectCoords } = this;\n    const [x1, x2, y1, y2] = rectCoords;\n\n    ctx.font = \"12pt Arial\";\n\n    // цетр оси\n    ctx.fillText(\"0:0\", correctionX, rectHeight - correctionY + 12);\n\n    // левый нижний угол\n    ctx.fillText(`${x1}:${y1}`, 12, rectHeight - 12);\n\n    // левый верхний угол\n    ctx.fillText(`${x1}:${y2}`, 12, 20);\n\n    // правый верхний угол\n    ctx.fillText(`${x2}:${y2}`, rectWidth - 70, 20);\n\n    // правый нижний угол\n    ctx.fillText(`${x2}:${y1}`, rectWidth - 70, rectHeight - 12);\n  }\n\n  /**\n   * Рисует оси в прямоугольнике\n   */\n  drawAxis() {\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    const { rectWidth, rectHeight } = this;\n    const { rectCoords } = this;\n\n    const x1 = rectCoords[0];\n    const y1 = rectCoords[2];\n\n    const correctionX = (x1 < 0) ? -x1 : 0;\n    const correctionY = (y1 < 0) ? -y1 : 0;\n\n    this.drawTextCoords(ctx, correctionX, correctionY);\n\n    // ось X\n    ctx.beginPath();\n    ctx.moveTo(0, rectHeight - correctionY);\n    ctx.lineTo(rectWidth, rectHeight - correctionY);\n    ctx.strokeStyle = \"red\";\n    ctx.stroke();\n\n\n    // ось Y\n    ctx.beginPath();\n    ctx.moveTo(correctionX, 0);\n    ctx.lineTo(correctionX, rectHeight);\n    ctx.strokeStyle = \"red\";\n    ctx.stroke();\n  }\n\n  /**\n   * Рисует линию внутри прямоугольника\n   */\n  drawLine() {\n    const {  rectHeight } = this;\n\n    this.findCrossingPoints();\n\n    // если не нашли пересекающихся точек с прямоугольником, ни чего не рисуем\n    if (this.result.length !== 2) {\n      console.log(this.result);\n      console.log('Нет точек пересечений');\n      return;\n    }\n\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    const x1 = this.rectCoords[0];\n    const y1 = this.rectCoords[2];\n\n    const correctionX = (x1 < 0) ? -x1 : 0;\n    const correctionY = (y1 < 0) ? -y1 : 0;\n\n    const [pointA, pointB] = this.result;\n\n    ctx.beginPath();\n\n    // rectHeight - поправка на то, что у canvas отсчет координат начинается сверху\n    // correctionX и correctionY - поправка на то, что прямоугольник лежит в отрицательных координатах\n    ctx.moveTo(pointA[0] + correctionX, rectHeight - pointA[1] - correctionY);\n    ctx.lineTo(pointB[0] + correctionX, rectHeight - pointB[1] - correctionY);\n    ctx.strokeStyle = \"black\";\n    ctx.stroke();\n  }\n\n  /**\n   * Вставляет в DOM понель управления для удобного изменения данных\n   */\n  drawInputPanel() {\n    if (document.getElementById('rectAndLine')) return;\n\n    const template = document.getElementById('template_rectAndLine');\n    const cloneTemplate = document.importNode(template.content, true).children[0];\n\n    const app = document.getElementById('app');\n    app.appendChild(cloneTemplate);\n  }\n\n  init() {\n    document.getElementById('app').innerHTML = '';\n\n    this.draw();\n  }\n\n  /**\n   * Главная функция для отрисовки\n   */\n  draw() {\n    this.resetResult();\n\n    this.drawInputPanel();\n    this.drawRectangle();\n    this.drawAxis();\n    this.drawLine();\n  }\n\n  /**\n   * Сброс данных о найденных точках\n    */\n  resetResult() {\n    this.result = [];\n  }\n\n  /**\n   * Устанавливает новые координатные точки для прямоугольника\n   * @param {number} x1\n   * @param {number} x2\n   * @param {number} y1\n   * @param {number} y2\n   */\n  setRectCoords(x1, x2, y1, y2) {\n    if (x2 < x1) {\n      [x1, x2] = [x2, x1];\n      console.log(`х2 < x1, меняем их значениями. х1 = ${x1}; x2 = ${x2}`);\n    }\n\n    if (y2 < y1) {\n      [y1, y2] = [y2, y1];\n      console.log(`y2 < y1, меняем их значениями. y1 = ${y1}; x2 = ${y2}`);\n    }\n\n    this.rectCoords = [x1, x2, y1, y2];\n    this.rectWidth = Math.abs(x2 - x1);\n    this.rectHeight = Math.abs(y2 - y1);\n\n    this.draw();\n  }\n\n  /**\n   * Устанавливает новые координатные точки для прямой\n   * @param {array} point1 - координаты 1й точки прямой, в формате [x, y]\n   * @param {array} point2 - координаты 2й точки прямой, в формате [x, y]\n   */\n  setPoints(point1, point2) {\n    this.pointA = point1;\n    this.pointB = point2;\n\n    this.draw();\n  }\n\n  handlerChangeRectCoords() {\n    const value = document.getElementsByClassName('rectAndLine__input')[0].value;\n    if (!value) {\n      console.log('Необходимо ввести данные');\n      return;\n    }\n\n    let coords = value.split(',').map(Number);\n\n    if (coords.length !== 4) {\n      console.log('Необходимо ввести 4 числа');\n      return;\n    }\n\n    const [x1, x2, y1, y2] = coords;\n    this.setRectCoords(x1, x2, y1, y2);\n  }\n\n  handlerChangePointsCoords() {\n    const value1 = document.getElementsByClassName('rectAndLine__input')[1].value;\n    const value2 = document.getElementsByClassName('rectAndLine__input')[2].value;\n\n    if (!value1 && !value2) {\n      console.log('Необходимо ввести координаты обоих точек');\n      return;\n    }\n\n    let point1 = value1.split(',').map(Number);\n    let point2 = value2.split(',').map(Number);\n\n    if (point1.length !== 2 || point2.length !== 2) {\n      console.log('Необходимо ввести по 2 числа для каждой точки');\n      return;\n    }\n\n    this.setPoints(point1, point2);\n  }\n}\n\nwindow.rectAndLine = new Draw();\n\n\n//# sourceURL=webpack:///./src/other/segmentOfArea/index.js?");

/***/ }),

/***/ "./src/sorts/bubbleSort.js":
/*!*********************************!*\
  !*** ./src/sorts/bubbleSort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// пузырьковая сортировка\n\nwindow.bubbleSort = function (arr = [...defaultArray]) {\n    let length = arr.length;\n\n\n    while (length) {\n        sort(arr);\n        length = length - 1;\n    }\n\n    function sort(arr) {\n        for (let i = 0; i < (arr.length - 1); i++) {\n            let val1 = arr[i];\n            let val2 = arr[i+1];\n\n            if (typeof val2 === 'undefined') return;\n\n            if (val1 > val2) {\n                arr[i] = val2;\n                arr[i+1] = val1;\n            }\n        }\n\n    }\n\n    console.log(arr);\n};\n\n//# sourceURL=webpack:///./src/sorts/bubbleSort.js?");

/***/ }),

/***/ "./src/sorts/callAllSort.js":
/*!**********************************!*\
  !*** ./src/sorts/callAllSort.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.callSortAll = function() {\n  console.log('\\n сортировка bubbleSort');\n  bubbleSort();\n\n  console.log('\\n сортировка choiceSort');\n  choiceSort();\n\n  console.log('\\n сортировка insertSort');\n  insertSort();\n\n  console.log('\\n сортировка mergeSort');\n  mergeSort();\n\n  console.log('\\n сортировка quickSort');\n  quickSort();\n  console.log('\\n');\n};\n\n//# sourceURL=webpack:///./src/sorts/callAllSort.js?");

/***/ }),

/***/ "./src/sorts/choiceSort.js":
/*!*********************************!*\
  !*** ./src/sorts/choiceSort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.choiceSort = function (arr = [...defaultArray]) {\n    let length = arr.length;\n\n    function getMaxIndex(arr) {\n        let max = arr[0];\n        let maxInd = 0;\n\n        for (let i = 0; i < length; i++) {\n            if (arr[i] > max) {\n                max = arr[i];\n                maxInd = i;\n            }\n        }\n\n        return maxInd;\n    }\n\n    while(length !== 0) {\n        let maxIndex = getMaxIndex(arr);\n\n        // если максимальный элемент самый последний, пропускаем на след. итерацию\n        if (maxIndex === length) {\n            length = length - 1;\n            continue;\n        }\n\n        // иначе меняем местами\n        const last = arr[length - 1];\n\n        arr[length - 1] = arr[maxIndex];\n        arr[maxIndex] = last;\n\n\n        // теперь ищем максимальный элемент в суженном диапазоне\n        length = length - 1;\n    }\n\n    console.log(arr);\n};\n\n//# sourceURL=webpack:///./src/sorts/choiceSort.js?");

/***/ }),

/***/ "./src/sorts/insertSort.js":
/*!*********************************!*\
  !*** ./src/sorts/insertSort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.insertSort = function(arr = [...defaultArray]) {\n    let length = arr.length - 1;\n\n    for (let i = 0; i <= length; i++) {\n        if (i === 0) continue;\n\n        let y = i;\n        while(y) {\n            if (arr[y] < arr[y-1]) {\n                let small = arr[y];\n                arr[y] = arr[y-1];\n                arr[y-1] = small;\n                y -= 1;\n            } else {\n                // предыдущий элемент массива меньше, можно работать со следующийм элементом\n                break;\n            }\n        }\n    }\n\n    console.log(arr);\n};\n\n\n//# sourceURL=webpack:///./src/sorts/insertSort.js?");

/***/ }),

/***/ "./src/sorts/mergeSort.js":
/*!********************************!*\
  !*** ./src/sorts/mergeSort.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.mergeSort = function( arr = [...defaultArray]) {\n  let result = [];\n\n  // разбили массив на одиночные массивы\n  for (let i = 0; i < arr.length; i+=1) {\n      result.push([arr[i]])\n  }\n\n  // на каждой итерации цикла кол-во элементов массива будет уменьшаться вдвое (т.к. мы соединяем соседние массивы)\n  while (result.length > 1) {\n\n    // массив с новыми соединенными элементами (на каждой итерации исходный массив result будем менять на него)\n    const resultInner = [];\n\n    // проходим по массиву через элемент, параллельно объединяя пары\n    for (let i = 0; i < result.length; i += 2) {\n\n      const leftArr = result[i];    // левый массив\n      const rightArr = result[i+1]; // правый массив\n\n      // массив в который будет складывать отсортированные значения из левого массива и правого.\n      const inner = [];\n\n      // если правого соседа нет, то добавляем левый массив сразу в результат\n      if (!rightArr) {\n        resultInner.push(leftArr);\n        break;\n      }\n\n      // объединяем массивы - \"пары\" до тех пор, пока не закончатся в них элементы\n      while(leftArr.length || rightArr.length) {\n\n        // если элементы закончились в левом массиве, то значит они ещё есть в правом соседе, добавляем оттуда\n        if (leftArr.length === 0) {\n          inner.push(rightArr[0]);\n          rightArr.splice(0, 1);   // удаляем вставленный элемент из правого соседа\n          continue;\n        }\n\n        // если элементы закончились в правом массиве, то значит они ещё есть в левом соседе, добавляем оттуда\n        if (rightArr.length === 0) {\n          inner.push(leftArr[0]);\n          leftArr.splice(0, 1);   // удаляем вставленный элемент из правого соседа\n          continue;\n        }\n\n        // выбираем наименьшее значение из левого и правого массива под индексом 0 и вставляем в промежуточный массив\n        if (leftArr[0] > rightArr[0]) {\n          inner.push(rightArr[0]);\n          rightArr.splice(0, 1)\n        } else {\n          inner.push(leftArr[0]);\n          leftArr.splice(0, 1)\n        }\n      }\n\n      resultInner.push(inner);\n    }\n    result = resultInner;\n  }\n\n  console.log(result[0]);\n};\n\n//# sourceURL=webpack:///./src/sorts/mergeSort.js?");

/***/ }),

/***/ "./src/sorts/quickSort.js":
/*!********************************!*\
  !*** ./src/sorts/quickSort.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.quickSort = function() {\n\n  function recursive(arr = [...defaultArray]) {\n    if (arr.length === 0) return [];\n\n    const left = [], right = [], pivot = arr[0];\n\n    for (let i = 1; i < arr.length; i++) {\n      if(arr[i] < pivot)\n        left.push(arr[i]);\n      else\n        right.push(arr[i]);\n    }\n\n    return recursive(left).concat(pivot, recursive(right));\n  }\n\n  console.log(recursive());\n};\n\n\n//# sourceURL=webpack:///./src/sorts/quickSort.js?");

/***/ }),

/***/ "./src/string/revertStr.js":
/*!*********************************!*\
  !*** ./src/string/revertStr.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const defaultStr = '1234 56 78'; // 78 56 1234\n\nconst revertStr = (str = defaultStr) => {\n    let resultStr = '';\n\n    let to = str.length - 1;\n    let from;\n\n\n    for (let i = (str.length - 1); i >= 0; i-=1) {\n        const el = str[i];\n\n        if (el !== ' ' && i === 0) {\n            from = i;\n\n            while (from <= to) {\n                resultStr += str[from];\n                from += 1;\n            }\n        } else if (el === ' ') {\n            from = i + 1;\n\n            while (from <= to) {\n                resultStr += str[from];\n                console.log(resultStr);\n\n                from += 1;\n            }\n\n            resultStr += ' ';\n\n            to = i - 1;\n        }\n    }\n    console.log(resultStr);\n};\n\n// revertStr();\n\n\nconst reverStr2 = (str = defaultStr) => {\n    const length = str.length - 1;\n\n    let resultArray = [];\n\n    let temporaryArray = [];\n\n    for (let i = length; i >= 0; i-=1) {\n        const el = str[i];\n\n        if (el !== ' ') {\n            temporaryArray.unshift(el);\n        } else {\n            resultArray.push(temporaryArray);\n            temporaryArray = [];\n        }\n\n        if (i === 0) {\n            resultArray.push(temporaryArray);\n        }\n    }\n\n    let resultStr = '';\n\n    resultArray.forEach((arr, ind) => {\n        if (ind === 0) {\n            resultStr += arr.join('');\n        } else {\n            resultStr +=` ${arr.join('')}`;\n        }\n    });\n\n    console.log(resultStr);\n\n    // resultArray = resultArray.map(arr => {\n    //     return arr.join('');\n    // });\n    // console.log(resultArray.join(' '))\n};\n\n// reverStr2();\n\n//# sourceURL=webpack:///./src/string/revertStr.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });