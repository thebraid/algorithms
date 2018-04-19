const myTree = {
    "value": 1,
    "items": [
        {
            "value": 2,
            "items": [
                {
                    "value": 4,
                    "items": [
                        {"value": 7},
                        {"value": 8}
                    ]
                },
                {
                    "value": 5
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
};

window.treeWidth = function (tree = myTree) {
    const {value, items} = tree;
    console.log(value);

    function innerWidth(items) {
        items.map(item => {
            console.log('item = ', item);
            console.log(item.value)
        });

        items.map(item => {
            console.log(item);
            if (item.items) {
                innerWidth(item.items)
            }

            // item.items.map( innerItem => {
            //     console.log(innerItem.value)
            // })
        })
        // items.map(item => {
        //     // console.log(item);
        //     if (item.items) {
        //         innerWidth(item.items);
        //     }
        // });


    }

    innerWidth(items)
};

treeWidth();