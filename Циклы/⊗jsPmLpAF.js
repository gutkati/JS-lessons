arr = []

// урок №1
for (let i = 1; i <= 10; i++) {
    arr.push(i)
}
console.log(arr)

// урок №2
for (let i = 1; i <= 10; i++){
    let el = 'x'
    arr.push(el)
}
console.log(arr)

// урок №3
let array = [2, 9, -6, 3, -7, -20]
let newArray = []
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        newArray.push(array[i])
    }
}
console.log(newArray)
