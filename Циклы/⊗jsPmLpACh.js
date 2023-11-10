let array = [1, 2, 3, 4, 5, 6]

//урок №1
for (let i = 0; i < array.length; i++) {
    array[i] = array[i]**2
}
console.log(array)

// урок №2
for (let i = 0; i < array.length; i++) {
    array[i] -= 1
}
console.log(array)

// урок №3
for (let i = 0; i < array.length; i++) {
    array[i] += 10
}
console.log(array)