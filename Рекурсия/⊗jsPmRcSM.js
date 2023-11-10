// урок №1
let array = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]

function getElement(arr) {
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == 'object') {
        arr[i] = getElement(arr[i])
    } else {
        arr[i] = Math.pow(arr[i], 2)
    }
}
return arr
}

getElement(array)
