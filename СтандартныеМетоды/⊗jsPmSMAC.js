// урок №1
let arr1 = [1, 2, 3, 4, 5]
let newArr1 = arr1.splice(1, 2)
console.log(arr1)

// урок 2
let arr2 = [1, 2, 3, 4, 5]
arr2.splice(3, 0, 'a', 'b', 'c')
console.log(arr2)

// урок №3
let arr3 = [1, 2, 3, 4, 5]
arr3.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
console.log(arr3)