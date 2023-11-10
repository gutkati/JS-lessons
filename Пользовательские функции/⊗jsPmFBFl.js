// урок №1
function arrNum(arr) {
    for (let elem of arr) {
        if (elem % 2) {
            return false
        }
    }
    return true
}

arrNum([4, 2, 8])

// урок №2
function numbers(num) {
    let arr = String(num).split('')
    for (let elem of arr) {
        console.log(elem)
        if (elem % 2 === 0) {

            return false
        }
    }
    return true
}

numbers(183)

// урок №3
function twoNum(arr) {
    for (let i= 0; i < arr.length; i++) {
        console.log(arr[i] === arr[i + 1])
        if (arr[i] === arr[i + 1]) {
            return true
        }
    }
    return false
}
twoNum([1, 2, 3, 3, 5])