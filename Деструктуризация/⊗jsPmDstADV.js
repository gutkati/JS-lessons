let arr = ['John', 'Smit', 'development', 'programmer'];
let array = ['John', 'Smit', 'development'];
let [name, surname, department, position = 'trainee'] = arr
let [name2, surname2, department2, position2 = 'trainee'] = array

console.log(name, surname, department, position)
console.log(name2, surname2, department2, position2)