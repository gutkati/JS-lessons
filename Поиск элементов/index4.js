// ⊗jsPmSrED
let elem1 = document.querySelector('#elem1')

let elementOne = elem1.firstElementChild // первый ребенок

elementOne.style.color = 'red'

let elementLast = elem1.lastElementChild // последний ребенок

elementLast.style.color = 'red'

let arrElement = elem1.children // массив детей

for (let elem of arrElement) {
    elem.textContent += "!"
}

// ⊗jsPmSrEP

let elemLi = document.querySelector('#elem2')
let parent = elemLi.parentElement // находит родителя элемента
console.log(parent)
parent.style.border = '1px solid green'

// ⊗jsPmSrAP
let elem3 = document.querySelector('#elem3')
let family = elem3.closest('div') // найдет ближайшего родителя div
console.log(family)

let family2 = elem3.closest('.www') // найдет ближайшего родителя с классом "www"
console.log(family2)

// ⊗jsPmSrSb

let elem4 = document.querySelector('#elem4')

let preElem = elem4.previousElementSibling // поиск соседнего элемента сверху (внутри одного родителя)
preElem.textContent += "!"

console.log(preElem)

let nextElem = elem4.nextElementSibling // поиск соседнего элемента снизу (внутри одного родителя)
nextElem.textContent += "!"

let nextElemTwo = nextElem.nextElementSibling
nextElemTwo.textContent += "!"

let twoNext = preElem.textContent
let fourText = nextElem.textContent

preElem.textContent = fourText
nextElem.textContent = twoNext

// ⊗jsPmSrBI
let elemId = document.getElementById('elem5') // поиск элементя по id
elemId.textContent = "Все хорошо!"

// ⊗jsPmSrBT
let listP = document.getElementsByTagName('p') // находит элементы страницы по имени тэга
for (let p of listP) {
    p.style.color = 'red'
}

// ⊗jsPmSrBC
let classList = document.getElementsByClassName('www') // находит элементы страницы по имени класса

for (let name of classList) {
    name.style.color = 'red'
}

// ⊗jsPmSrIE
let parent2 = document.querySelector('#parent') // элемент родитель
let elems1 = parent2.querySelectorAll('.www') // находи элементы внутри родителя
let elems2 = parent2.querySelectorAll('.ggg')
console.log(elems1, elems2)


