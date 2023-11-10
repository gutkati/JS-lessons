// задача №1
let arr = [2, 5, 9, 15, 1, 4];
for (let element of arr) {
    if (element > 3 && element < 10) {
       console.log(element)
    }
}

// задача №2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
if (obj[key] % 2) {
    console.log(key, obj[key])
}
}