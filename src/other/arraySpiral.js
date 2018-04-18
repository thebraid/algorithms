const n = 4;

function newArray(width, height) {
    const arr = [];

    height = height ? height : width;
    for (let i = 0; i < height; i++) {
        arr[i] = Array(width).fill('-');
    }

    return arr;
}

function spiral(n = n) {
    const count = n * n;
    const direct = [
        [1, 0],   // right
        [0, 1],   // down
        [-1, 0],  // left
        [0, -1]   // top
    ];
    const arr = newArray(n);

    let x = 0;
    let y = 0;
    let dx;
    let dy;

    // начальное направление - right
    [dx, dy] = direct[0];

    for (let i = 1; i <= count; i++) {
        /* console.log(arr[y][x]) */

        if (arr[y] && arr[y][x]) {

            arr[y][x] = i;
            x += dx;
            y += dy;
        } else {
            // if (x >= arr[0].length) {
            //     x = (arr[0].length - 1)
            // } else if (x < 0) {
            //     x = 0;
            // }
            //
            // if (y >= arr.length) {
            //     y = (arr.length - 1)
            // } else if (y < 0) {
            //     y = 0;
            // }

            [dx, dy] = direct[1];
            x += dx;
            y += dy;

        }
    }

    console.log(arr)
}

spiral(n);