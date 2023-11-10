// урок №1
let arr = [1, 2, 3, 4, 5, 0, 8, 6, 7]
for (let el of arr) {
    console.log(el)
    if (el === 0) {
        break
    }
}

// урок №2
let array = [1, 2, 7, 4, -5, 0, 8, 6, 7]
let sum = 0
for (let el of array) {
    sum = sum + el
    if (el < 0) {
        break
    }
}
console.log(sum)

// урок №3
let array2 = [1, 2, 7, 4, 6, 0, 3, 6, 7]
for (let el of array2) {
    if(array2[el] === 3) {
        console.log(el)
        break
    }
}

// урок №4
let sum3 = 0
for (let i = 1; i < 100; i++) {
    sum3 += i
    if(sum3 > 100) {
        console.log(i)
        break
    }
}