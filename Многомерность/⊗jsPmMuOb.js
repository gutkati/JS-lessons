// урок №1
let obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let res1 = 0
for (let keyObj in obj1) {
    for (let keyNum in obj1) {
        res1 += obj1[keyObj][keyNum]
    }
}
console.log(res1)

// урок №2
let obj2 = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
console.log(obj2['2']['2'], obj2['3']['1'])

// урок №3
let obj3 = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        },
        f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
}
let res33 = obj3.key1.a + obj3.key1.b + obj3.key1.c.d + obj3.key1.c.e + obj3.key1.f + obj3.key2.g + obj3.key2.h
console.log(res33)


