// урок №1
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

// урок №2
for (let i = 100; i >= 1; i--) {
    console.log(i)
}

// урок №3
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0)
        console.log(i)
}

// урок №4
let arr4 = []
for (let i = 1; i <= 10; i++) {
    arr4.push('x')
}
console.log(arr4)

// урок №5
let arr5 = []
for (let i = 1; i <= 10; i++) {
    arr5.push(i)
}
console.log(arr5)

// урок №6
let arr6 = [1, 5, 8, 11, -5, 10, 6, 14, 20, 0]
for (let element of arr6) {
    if (element > 0 && element < 10)
        console.log(element)
}

// урок №7
let arr7 = [1, 5, 8, 11, -5, 10, 6, 14, 20, 0]
for (let element of arr7) {
    if (element === 5) {
        console.log(element)
    }
}

// урок №8
let arr8 = [1, 5, 8, 11, 10, 6, 14, 20, 0]
let sum = 0
for (let element of arr8) {
    sum += element
}
console.log(sum)

// урок 9
let arr9 = [1, 5, 8, 11, 10, 6, 14, 20, 0]
let sum9 = 0
for (let element of arr9) {
    sum9 += element ** 2
}
console.log(sum9)

// урок №10
let arr10 = [1, 5, 8, 11, 10, 6, 14]
let sum10 = 0
for (let element of arr10) {
    sum10 += element / arr10.length
}
console.log(sum10)

// урок №11
let factorial = 5
let res = 1
for (let i = 1; i <= factorial; i++) {
    res *= i
}
console.log(res)

// урок №12
let arr12 = []
for (let i = 10; i >= 1; i--) {
    arr12.push(i)
}
console.log(arr12)

// урок №13
let arr13 = [1, 5, 8, 11, -5, 10, 6, -14, -20, 0]
let res13 = 0
for (let element of arr13) {
    if (element > 0) {
        res13 += element
    }
}
console.log(res13)

// урок №14
let arr14 = [10, 20, 30, 50, 235, 3000];
for (let element of arr14) {
    let num14 = String(element)
    if (num14[0] === '1' || num14[0] === '2' || num14[0] === '5') {
        console.log(+num14)
    }
}

//  урок №15
let arr15 = [1, 5, 8, 11, -5, 10, 6, -14, -20, 0]
for (let i = arr15.length; i >= 0; i--) {
    console.log(arr15[i])
}

// урок №16
let arr16 = [0, 1, 8, 3, -5, 10, 6, -14, 8]
for (let i = 0; i < arr16.length; i++) {
    if (i === arr16[i]) {
        console.log(arr16[i])
    }
}

// урок №17
let arr17 = [1, 5, 8, 11, 10, 6, 14, 20, 0]
for (let element of arr17) {
    document.write(element, '<br/>')
}

// урок №18
let arr18 = [1, 5, 8, 11, 10, 6, 14, 20, 0]
for (let element of arr18) {
    document.write('<p>' + element + '</p>')
}

// урок №19
let arr19 = [1, 2, 3, 4, 5, 6, 7]
for (let element of arr19) {
    if (element < 5) {
        document.write(element)
    } else {
        document.write(element, '<b>')
    }

}

// урок №20
let arr20 = [1, 2, 3, 4, 5, 6, 7]
for (let element of arr20) {
    let day = 1
    if (element !== day) {
        document.write(element)

    } else {
        document.write("<i>" + element + "</i>")
    }
}

// урок №21
let obj21 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj21) {
    obj21[key] = (obj21[key] * 0.1) + obj21[key]
    console.log(key, obj21[key])
}


// урок №22
let obj22 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj22) {
    if (obj22[key] <= 400) {
        obj22[key] = (obj22[key] * 0.1) + obj22[key]
    }
    console.log(key, obj22[key])
}

// урок №23
let arr123 = [1, 2, 3, 4, 5];
let arr223 = [6, 7, 8, 9, 10];
let obj23 = {}
for (let i = 0; i <= 4; i++) {
    obj23[arr123[i]] = arr223[i]
}
console.log(obj23)

// урок №24
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum1 = 0
let sum2 = 0
let res
for (let key in obj24) {
    sum1 += +key
    sum2 += +obj24[key]
    res = sum1 / sum2
}
console.log(res)

// урок №25
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arrKey = []
let arrMean = []
for (let key in obj25) {
    arrKey.push(key)
    arrMean.push(obj25[key])
}
console.log(arrKey)
console.log(arrMean)

// урок №26
let obj26 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr26 = []
for (let key in obj26) {
    let str = String(obj26[key])
    if (str[0] === '1' || str[0] === '2') {
        arr26.push(+str)
    }

}
console.log(arr26)

// урок № 27
let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {}
for (let i = 1; i < 5; i++) {
    obj27[i] = arr27[i]
}
console.log(obj27)

// урок №28
let arr28 = ['a', 'b', 'c', 'd', 'e'];
let obj28 = {}
for (let i = 1; i < 5; i++) {
    obj28[arr28[i]] = i
}
console.log(obj28)