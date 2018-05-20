// разворачивание односвязанного списка

const myList = {
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
};

window.revertList = function(list = myList, child = null) {
    let newList;

    if (list.child === null) {
        newList = {value: list.value, child: child};
        console.log(`Исходный list: \n ${JSON.stringify(myList)}`);
        console.log(`Результат: \n ${JSON.stringify(newList)}`);
    } else {
        newList = {value: list.value, child: child};
        revertList(list.child, newList)
    }
};

revertList.default = myList;