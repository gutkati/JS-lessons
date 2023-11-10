// урок №1
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {}
for (let i = 0; i <= 6; i++) {
    let day = arr1[i]
    let num = arr2[i]
    obj[day] = num
}
console.log(obj)

// урок №2
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {}
for (let key in obj1) {
    if (obj1[key] % 2 === 0) {
        newObj[key] = obj1[key]
    }
}
console.log(newObj)

// урок №3
let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj2 = {}
for (let key in obj2) {
    newObj2[obj2[key]] = key
}

console.log(newObj2)
