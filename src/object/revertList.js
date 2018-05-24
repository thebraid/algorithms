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


// const reverList2 = (first = true, list = myList, child = null) => {
//     if (list.child === null) {
//         return {value: list.value, child: child};
//     } else {
//         const newChild = {value: list.value, child: child};
//         const newList = list.child;
//         return reverList2(newList, newChild);
//     }
// };
//
// const list2 = reverList2();
// console.log(list2);