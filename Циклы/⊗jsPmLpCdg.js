// урок №1
let arr = [10, 20, 30, 40, 21, 32, 51];
let res
let newArr = []
for (let elem of arr) {
    let str = String(elem)
    if(str[0] === '1' || str[0] === '2') {
       res = +str[0] + +str[1]
        newArr.push(res)
    }
}
console.log(newArr)
