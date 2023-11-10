function getSum(...num) {
    let sum = 0
    for (let element of num) {
        sum += element
    }
    return sum / num.length
}

getSum(2, 8, 6, 4)

// 2 вариант
function getSum2(...num) {
    let sumNum = num.reduce((sum, el) => {
        return sum + el
    }, 0)
    return sumNum / num.length
}

getSum2(2, 8, 6, 4)

