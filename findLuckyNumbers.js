// Write your code below this line.

// var arr = [];
// while(arr.length < n){
//     let r = Math.floor(math.random()*10) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }

luckyNumbers = (n) => {
    let luckyArray = []
    while(luckyArray.length < n){
        let r = Math.floor(Math.random()*10) + 1;
        if (n < 1 || n > 10){
            return 'must choose a number between 1 and 10'
        }
        else if (luckyArray.indexOf(r) === -1) luckyArray.push(r);
    }
    return luckyArray
}

console.log(luckyNumbers(7))
