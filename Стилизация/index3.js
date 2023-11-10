// ⊗jsPmStSA
let div1 = document.querySelector('#div1')
let btn1 = document.querySelector('#btn1')

btn1.addEventListener('click', function () {
    div1.style.height = '200px'
    div1.style.width = '300px'
    div1.style.margin = '30px'
    div1.style.background = 'green'
})

// ⊗jsPmStHP
let div2 = document.querySelector('#div2')
let btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', function () {
    div2.style.fontSize = '20px'
    div2.style.marginTop = '30px'
    div2.style.padding = '10px'
    div2.style.background = 'yellow'
})

// ⊗jsPmStEx
let list1 = document.querySelectorAll('#list1 li')
let btn3 = document.querySelector('#btn3')

btn3.addEventListener('click', function () {
    for (let elem of list1)
        elem.style.cssFloat = 'left'
})

// ⊗jsPmStCl
let div3 = document.querySelector('#div3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')

btn4.addEventListener('click', function () {
    div3.classList.toggle('line-through')
})

btn5.addEventListener('click', function () {
    div3.classList.toggle('weight')
})

btn6.addEventListener('click', function () {
    div3.classList.toggle('colored')
})