//задача №1
let  sum = 0;
for(let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i
    }
}
console.log(sum)

// задача №2
let  res = 0;
for(let i = 1; i <= 99; i++) {
    if (i % 2) {
        res += i
    }
}
console.log(res)

// задача №3
let num = 1
for (let i = 1; i <= 20; i++) {
    num = num*i
}
console.log(num)