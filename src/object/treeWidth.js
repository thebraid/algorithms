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
};

window.treeWidth = function (tree = myTree) {
    const {value, items} = tree;
    console.log(value);

    function innerWidth(items) {
    		let innerItems = [];
    
        items.forEach(item => {
            console.log('item = ', item);
            console.log(item.value)
            
            if (item.items) {
            	innerItems = [...innerItems, ...item.items];
            }

        });

				if (innerItems.length) {
        	innerWidth(innerItems);
        }
    }

    innerWidth(items)
};

treeWidth();
