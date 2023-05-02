'use strict'

function returnNeighboringNumbers(x) {
    let arr = [];
    let a = x + 1;
    let b = x - 1;
    arr.push(x, a, b);
    console.log(arr);
}

returnNeighboringNumbers(5);

function getMathResult(x, z) {
    for (let i = 0; i < z; i++) {
        console.log(`${x+x}---`)
    }
};

getMathResult(5, 3);