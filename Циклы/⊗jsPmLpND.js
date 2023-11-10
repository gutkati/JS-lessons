// урок №1
for (let i = 10; i < 1000; i++) {
    let str = String(i)
    console.log(str[0])
}

// урок №2
for (let i = 10; i < 1000; i++) {
    let str1 = String(i)
    let sum = +str1[0] + +str1[1]
    console.log(sum)
}

// урок №3
for (let i = 10; i < 1000; i++) {
    let str2 = String(i)
    if(str2[0] === '1') {
        console.log(str2)
    }
}

// урок №4
for (let i = 10; i < 1000; i++) {
    let str3 = String(i)
    if(+str3[0] + +str3[1] === 5) {
        console.log(str3)
    }
}