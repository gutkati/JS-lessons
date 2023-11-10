// ⊗jsPmNdInr
let elem1 = document.querySelector('#elem1')

console.log(elem1.lastChild) // учитывая все узлы дочернего эелмента
console.log(elem1.lastElementChild) // хранит в себе последний дочерний элемент

console.log(elem1.nextSibling) // учитывая все узлы
console.log(elem1.nextElementSibling) // содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.

console.log(elem1.previousSibling) // учитывая все узлы
console.log(elem1.previousElementSibling) // содержит предыдущий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.

// ⊗jsPmNdLI
let elem4 = document.querySelector('#elem4')
for (let el of elem4.childNodes) { // содержит в себе все потомки-узлы элемента.
    console.log(el)
    console.log(el.nodeName) // получает имена узлов
}

// ⊗jsPmNdTp
let elem5 = document.querySelector('#elem4')
let arrType = []
for (let el of elem5.childNodes) { // содержит в себе все потомки-узлы элемента.
    element = el.nodeType // Типы узлов. Его значение числовое: 1 для элементов, 3 для текстовых узлов
    if (el.nodeType < 8) {
        arrType.push(element)
    }
}
console.log(...arrType)

// ⊗jsPmNdTx
// Для всех узлов работает свойство textContent.
// Для текстовых узлов и комментариев есть свойства nodeValue и data
// Для элементов есть свойство innerHTML, прочитывающее текст вместе с тегами.
let elem6 = document.querySelector('#elem4')
for (let el of elem6.childNodes) {
    console.log(el.textContent)

}

for (let el of elem6.childNodes) {
    console.log(el.data)
}

for (let el of elem6.childNodes) {
    if (el.nodeType === 3) {
        console.log(el.data)
    } else {
        console.log(el.innerHTML)
    }

}

for (let el of elem6.childNodes) {
    console.log(el.textContent += el.nodeType)
}



