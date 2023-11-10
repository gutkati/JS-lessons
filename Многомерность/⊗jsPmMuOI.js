// урок №1
let obj1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let res1 = 0
for (let key in obj1) {
    let subObj = obj1[key]
    for (let subKey in subObj) {
        res1 += subObj[subKey]
    }
}
console.log(res1)

// урок №2
let obj2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let res2 = 0
for (let key in obj2){
    let subObj = obj2[key]
    for (let subKey in subObj) {
        let subObj2 = subObj[subKey]
        for (let subKey2 in subObj2) {
            res2 += subObj2[subKey2]
        }
    }
}
console.log(res2)