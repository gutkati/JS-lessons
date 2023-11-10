function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
    return arr
}

let array = [1, 2, 3]

function calcNum(num) {
    return Math.pow(num, 3)
}

test(array, calcNum)