// урок №1
function func([name, surname, department, position, salary]) {
	console.log(name)
	console.log(surname)
	console.log(department)
	console.log(position)
	console.log(salary)
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );

// урок №2
function func2([name, surname, ...info]) {
	console.log(name)
	console.log(surname)
	console.log(info)
}

func2( ['John', 'Smit', 'development', 'programmer', 2000] );

// урок №3
function func3([name, surname, department, position = 'джуниор']) {
	console.log(name)
	console.log(surname)
	console.log(department)
	console.log(position)
}

func3( ['John', 'Smit', 'development'] );

// урок №4
function func4(department, [name, surname], [year, month, day]) {
	console.log(name)
	console.log(surname)
	console.log(department)
	console.log(year, month, day)
}

func4( 'development', ['John', 'Smit'], [2018, 12, 31] );