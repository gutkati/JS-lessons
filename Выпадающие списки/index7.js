// ⊗jsPmSlInr
let select1 = document.querySelector('#select1')
let btn1 = document.querySelector('#btn1')
let text1 = document.querySelector('#text1')


btn1.addEventListener('click', function () {
    text1.textContent = select1.value
})

let select2 = document.querySelector('#select2')
let text2 = document.querySelector('#text2')
select2.addEventListener('change', function () {
    if (this.value % 4 === 0) {
        text2.textContent = this.value + ' ' + 'год високосный'
    } else {
        text2.textContent = this.value + ' ' + 'год не високосный'
    }
})


// ⊗jsPmSlVA
let select3 = document.querySelector('#select3')
let text3 = document.querySelector('#text3')

select3.addEventListener('change', function () {
    if (this.value < 6) {
        text3.textContent = 'рабочий день'
    } else {
        text3.textContent = 'выходной день'
    }
})

// ⊗jsPmSlSICh
let select4 = document.querySelector('#select4')
select4.addEventListener('change', function () {
    let date = new Date()
    let month = (date.getMonth() + 1)
    select4.value = month
})

// ⊗jsPmSlSIN
let select5 = document.querySelector('#select5')
let text4 = document.querySelector('#text4')

text4.addEventListener('blur', function () {
    select5.selectedIndex = text4.value - 1 // хранит в себе номер того пункта списка, который сейчас выбран, нумерация с 0
})

let select6 = document.querySelector('#select6')

select6.addEventListener('change', function () {
    let date = new Date()
    let day = (date.getDay())
    select6.selectedIndex = day

})


let select7 = document.querySelector('#select7');
let options = select7.querySelectorAll('option'); // Получение пунктов выпадающего списка
console.log(options);

// ⊗jsPmSlIAA
let select8 = document.querySelector('#select8')

for (let option of select8) {
    option.text += option.value
}

// ⊗jsPmSlOp
let select9 = document.querySelector('#select9')

for (let option of select9) {
    if (option === select9[2]) {
        option.selected = true
        option.text += "?"
    } else {
        option.text += "!"
    }
}

// ⊗jsPmSlOS
let select10 = document.querySelector('#select10')
let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', function () {
    console.log(select10.length - 1)
    let option = select10[select10.length - 1]
    option.selected = true
})

// ⊗jsPmSlSOG
let select11 = document.querySelector('#select11')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let text5 = document.querySelector('#text5')

btn3.addEventListener('click', function () {
    let option = select11[select11.selectedIndex] // можно получить выбранный тег option таким образом
    text5.textContent = option.text
})

btn4.addEventListener('click', function () {
    let option = select11[select11.selectedIndex]
    option.text += "!"
})


