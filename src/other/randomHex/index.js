function randomHexColor(){
    let n = 6;
    let s = '#';

    while(n--){
        s += Math.floor(Math.random() * 16).toString(16);    // random char from 0 to f
    }

    document.getElementById('app').style.backgroundColor = s;
    return s;
}

// console.log(randomHexColor());