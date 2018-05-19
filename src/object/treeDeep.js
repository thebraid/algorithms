// Обход дерева в глубину

const myTree = {
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

window.treeDeep = function (tree = myTree) {
    const {value, items} = tree;
    console.log(value);

    if (!items) {
        return;
    }

    items.map(treeDeep)
};