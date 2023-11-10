// урок №1
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
for (let work of employees) {
    console.log(work.name + "-" + work.salary)
}

// урок №2
let employees2 = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
let res = 0
for (let sum of employees2) {
    res += sum.salary
}
console.log(res)

// урок №3
let employees3 = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let res2 = 0
for (let sum of employees3) {
    if (sum.age >= 30) {
        res2 += sum.salary
    }
}
console.log(res2)
