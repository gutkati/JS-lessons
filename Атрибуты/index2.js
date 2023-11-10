// ⊗jsPmAtGt
let elem1 = document.querySelector('#elem1')
let value = elem1.getAttribute('value')
console.log(value)

let elem2 = document.querySelector('#elem2')
let className = elem2.getAttribute('class')
console.log(className)

// ⊗jsPmAtStM
let elem3 = document.querySelector('#elem3')
elem3.setAttribute('value', 'text')

let elem4 = document.querySelector('#elem4')
elem4.setAttribute('class', 'valid')

// jsPmAtRm
let elem5 = document.querySelector('#elem5')
elem5.removeAttribute('value')

// ⊗jsPmAtCh
let elem6 = document.querySelector('#elem6')
console.log(elem6.hasAttribute('value'))

// ⊗jsPmAtDt
let elem7 = document.querySelector('#elem7')

function addTextAtr() {
    let atr = elem7.dataset.text
    elem7.textContent += atr
    elem7.removeEventListener('click', addTextAtr)
}

elem7.addEventListener('click', addTextAtr)

let div1 = document.querySelectorAll(".div1")

function addNumDiv() {
    let atr = this.dataset.num
    this.textContent += atr
}

for (let elem of div1) {
    elem.addEventListener('click', addNumDiv)
}

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let result = document.querySelector('#div2')

function calcClick() {
    btn1.dataset.res = +btn1.dataset.res + 1
}

btn1.addEventListener('click', calcClick)
btn2.addEventListener('click', function () {
    result.textContent = +btn1.dataset.res
})

let elem8 = document.querySelector('#elem8')
let message = document.querySelector('#message')

elem8.addEventListener('blur', function () {
    if (elem8.value.length !== +elem8.dataset.length) {
        console.log(elem8.value.length)
        message.textContent = 'Колличество символов не совпадает с заданным'
    } else {
        message.textContent = ''
    }
})

let elem9 = document.querySelector('#elem9')
let message2 = document.querySelector('#message2')

elem9.addEventListener('blur', function () {
    if (elem9.value.length < +elem9.dataset.min || elem9.value.length > +elem9.dataset.max) {
        console.log(elem9.value.length)
        message2.textContent = 'Колличество символов не попадает в дтапазон от 5 до 10'
    } else {
        message2.textContent = ''
    }
})

// ⊗jsPmAtDHN
let elem10 = document.querySelector('#elem10')

elem10.addEventListener('click', function () {
    elem10.textContent += ' ' + this.dataset.productPrice * this.dataset.productAmount
})

// jsPmAtDM

let div2 = document.querySelectorAll('.div2')
let res = 0
for (elem of div2) {
    res += 1
    elem.setAttribute('data-num', res)

}

// ⊗jsPmAtCAr
let elem11 = document.querySelector('#elem11')
let length2 = elem11.classList.length
console.log(length2)
let listClass = elem11.classList
for (let elem of listClass) {
    console.log(elem)
}

elem11.classList.add('xxx')

elem11.classList.remove('www', 'zzz')

let contains = elem11.classList.contains('ggg')
console.log(contains)

elem11.classList.toggle('www')

