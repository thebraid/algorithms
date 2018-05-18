window.man = function() {
  console.log(`
1. Сортировка массивов.
   По умолчанию все функции сортировок используют массив defaultArray = [6, 5, 3, -1, 0, -2, 8, 7, 2, 4, -16, 12, 54, 12, 65].
   Его можно изменить через глобальную переменную "defaultArray" и все сортировки будут брать этот массив.
   Или можно передавать нужный массив как 1й аргумент в функцию.
   Каждая из сортировок не меняет defaultArray.
   
   1.0) callSortAll()      - вызовет по очереди все сортировки с массивом по умолчанию.
   1.1) bubbleSort(array)  - пузырьковая сортировка
   1.2) choiceSort(array)  - сортировка выбором
   1.3) insertSort(array)  - сортировка вставками
   1.4) mergeSort(array)   - сортировка слиянием
   1.5) quickSort(array)   - быстрая сортировка
   
2) Поиск простых чисел
   Аргумент по умолчанию 100 - т.е. все простые числа до 100.

   2.1) findSimpleNumber1(N) - первый вариант нахождения простых чисел
   2.2) findSimpleNumber2(N) - улучшенный 1й вариант
   2.3) findSimpleNumber3(N) - финальный вариант (улучшенный 2й вариант).
   
3) Заполнить массив по спирали 
  arraySpiral(NxM) где N = 4 по умолчанию,M = N по умолчанию
  
  пример вызова:
    arraySpiral();    // 4x4
    arraySpiral(5);   // 5x5
    arraySpiral(5,7); // 5x7
    
4) Бинарный поиск по массиву
    binarySearch(elem, array), где
    elem  - элемент который ищем в массиве, по умолчанию = 5;
    array - массив поиска, по умолчанию = [1,2,3,4,5,6,7,8,9,10]. Массив должен быть упорядоченным.
    
5) Баланс скобок в строке.
   bracketBalance(str), где str по умолчанию = '{asda asdadasd (asdasd} 5434534}' (строка с ошибкой)
   
6) Расставить ферзей.
   chess(N), где N по умолчанию = 8 (размер поля 8х8 и ищем расстановку 8 ферзей).
   Можно задавать размер поля любым, но при значении 12 и свыше вычисления будут занимать длительное время.
   
7) Разворот обьекта в обратную сторону.
  revertList(obj), где obj по умолчанию =
  
  {
    "value": "a",
    "child": {
        "value": "b",
        "child": {
            "value": "c",
            "child": {
                "value": "d",
                "child": {
                    "value": "e",
                    "child": null
                }
            }
        }
    }
}
  
  
8) Обход дерева в глубину
   treeDeep(tree), где tree по умолчанию =
   
   {
    "value": 1,
    "items": [
        {
            "value": 2,
            "items": [
                {"value": 4},
                {"value": 5}
            ]
        },
        {
            "value": 3,
            "items": [
                {"value": 6}
            ]
        }
    ]
};


9) Обход дерева в ширину
   treeWidth(tree), где tree по умолчанию = 
   
   {
    "value": 1,
    "items": [
        {
            "value": 2,
            "items": [
                {
                    "value": 4,
                    "items": [
                        {"value": 7},
                        {
                          "value": 8,
                          "items": [
                              {"value": 11},
                              {"value": 12}
                          ]
                        }
                    ]
                },
                {
                    "value": 5,
                    "items": [
                        {"value": 9},
                        {"value": 10}
                    ]
                }
            ]
        },
        {
            "value": 3,
            "items": [
                {
                    "value": 6
                }
            ]
        }
    ]
}


10. Нахождение пересечения прямоугольника с координатами x1,x2,y1,y2 с заданными координатами 2 точек прямой.
   10.1) rectAndLine.draw() - нарисует по умолчанию прямоугольник x1=-250, x2=250, y1=-250, y2=250 и прямую с координатами точек [-5, 1] и [4, 2].
   10.2) rectAndLine.setRectCoords(x1, x2, y1, y2); - изменит координаты прямоугольника
   10.3) rectAndLine.setPoints([x1, y1], [x2, y2]);   - изменит координаты точек прямой
     
   
  `)
};