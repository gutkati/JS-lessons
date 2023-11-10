function getDay() {
	return (new Date).getDate();
}

function getMonth() {
	return (new Date).getMonth();
}

function getYear() {
	return (new Date).getFullYear();
}

let date = [2026, , 12]

let [year = getYear(), month = getMonth() + 1, day = getDay()] = date

console.log(year, month, day)