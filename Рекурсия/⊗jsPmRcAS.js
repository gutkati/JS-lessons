// урок №1
let arr = [1, 2, 3, 4, 5];

function getSum(arr) {
    let sum = Math.pow(arr.shift(), 2)
    if (arr.length !== 0) {
        sum += getSum(arr)
    }
    return sum
}

getSum(arr)