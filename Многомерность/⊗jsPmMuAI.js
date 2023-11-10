// урок №1
let arr1 = [[1, 2, 3], [4, 5], [6]];
let sumArr1 = 0
for (let subArr of arr1) {
    let sumEl1 = 0
    for (let element of subArr) {
        sumEl1 += element
    }
    sumArr1 += sumEl1
}
console.log(sumArr1)

// урок №2
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum2 = 0
for (let subArr of arr2) {
    let sumArr = 0
    for (let subArr2 of subArr) {
        let sumEl = 0
        for (let el of subArr2) {
            sumEl += el
        }
        sumArr += sumEl
    }
    console.log(sumArr)
    sum2 += sumArr
}
console.log(sum2)