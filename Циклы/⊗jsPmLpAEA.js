let arr = [2, 5, 9, 3, 1, 4];

// задача №1
let res = 0
for (let el of arr) {
    res += el
}
console.log(res)

//задача №2
let num = 0
for (let el of arr) {
    if (el % 2 === 0) {
        num += el
    }
}
console.log(num)

// задача №3
let sum = 0
for (let el of arr) {
    sum = sum + (el * el)
}
console.log(sum)

// задача №4
let one = 1
for (let el of arr) {
    one = one * el
}
console.log(one)