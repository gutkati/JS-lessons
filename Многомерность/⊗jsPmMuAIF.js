// урок №1
let arr1 = [[1, 2, 3], [4, 5], [6]];
let sumArr1 = 0
for (let i = 0; i < arr1.length; i++) {
    let sumJ = 0
    for (let j = 0; j < arr1[i].length; j++){
        sumJ += arr1[i][j]
    }
       sumArr1 += sumJ
}
console.log(sumArr1)

// урок №2
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum2 = 0
for (let i = 0; i < arr2.length; i++) {
    let sumArr = 0
    for (let j = 0; j < arr2[i].length; j++) {
        let sumEl = 0
        for (let k = 0; k < arr2[i][j].length; k++){
            sumEl += arr2[i][j][k]
        }
        sumArr += sumEl
    }
    sum2 += sumArr
}
console.log(sum2)
