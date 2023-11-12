// ⊗jsPmFmTa
let elem1 = document.querySelector('#elem1')
let text1 = document.querySelector('#text1')

elem1.addEventListener('blur', function () {
    text1.textContent = elem1.value
})

// ⊗jsPmFmDsb
let inp1 = document.querySelector('#inp1')
let btn1 = document.querySelector('#btn1')
if (inp1) {
    inp1.disabled = false
}


btn1.addEventListener('click', function () {
    inp1.disabled = true
})

let inp2 = document.querySelector('#inp2')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

//let inpDis = inp2.setAttribute('disabled', 'false')

if (inp2) {
    inp2.disabled = false
}

btn2.addEventListener('click', function () {
    inp2.disabled = true
})
btn3.addEventListener('click', function () {
    inp2.disabled = false
})

let inp3 = document.querySelector('#inp3')
let btn4 = document.querySelector('#btn4')

btn4.addEventListener('click', function () {

    if (inp3.hasAttribute('disabled') === false) {
        console.log('Инпут заблокирван')
        inp3.setAttribute('disabled', '')
    } else if (inp3.hasAttribute('disabled') === true) {
        console.log('Инпут разблокирован')
        inp3.removeAttribute('disabled')
    }
})

// ⊗jsPmFmChb
let inp4 = document.querySelector('#inp4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')

btn5.addEventListener('click', function () {
    inp4.setAttribute('checked', '')
})

btn6.addEventListener('click', function () {
    inp4.removeAttribute('checked')
})

let inp5 = document.querySelector('#inp5')
let btn7 = document.querySelector('#btn7')
let text2 = document.querySelector('#text2')

inp5.addEventListener('click', function () {
    if (inp5.hasAttribute('checked') === false) {
        inp5.setAttribute('checked', '')
    } else if (inp5.hasAttribute('checked') === true) {
        inp5.removeAttribute('checked')
    }
})

btn7.addEventListener('click', function () {
    if (inp5.hasAttribute('checked') === true) {
        text2.textContent = 'Привет'
    } else if (inp5.hasAttribute('checked') === false) {
        text2.textContent = 'Пока'
    }
})

// ⊗jsPmFmAWVA
let inp6 = document.querySelector('#inp6')
let btn8 = document.querySelector('#btn8')

btn8.addEventListener('click', function () {
    inp6.checked = !inp6.checked
})

// ⊗jsPmFmRd
let radios = document.querySelectorAll('input[type="radio"]')
let btn9 = document.querySelector('#btn9')
let text4 = document.querySelector('#text4')

btn9.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            text4.textContent += radio.value
        }
    }
})

// ⊗jsPmFmOch
let chg1 = document.querySelector('#chg1')
let text5 = document.querySelector('#text5')

chg1.addEventListener('change', function () {
    text5.textContent = this.value
})

let chbInp7 = document.querySelector('#inp7')
let text6 = document.querySelector('#text6')

chbInp7.addEventListener('change', function () {
    if (chbInp7.checked) {
        text6.textContent = "Активен"
    } else {
        text6.textContent = "Не активен"
    }

})

let inp8 = document.querySelector('#inp8')

inp8.addEventListener('change', function () {
    if (inp8.value.length < 5) {
        inp8.style.border = '1px solid green'
    } else {
        inp8.style.border = '1px solid red'
    }
})

// ⊗jsPmFmOin
let inp9 = document.querySelector('#inp9')
let text7 = document.querySelector('#text7')
let text8 = document.querySelector('#text8')
inp9.addEventListener('input', function () {
    if (inp9.value.length >= 5) {
        text7.textContent = "длина текста достигнет 5-ти символов"
        text8.textContent = 'Длина текста превышает: ' + (this.value.length - 5)
    } else {
        text7.textContent = ""
        text8.textContent = "Можно ввести еще: " + (5 -this.value.length)
    }
})

// ⊗jsPmFmFB
let inp10 = document.querySelector('#inp10')
let inp11 = document.querySelector('#inp11')

inp10.addEventListener('input', function () {
if(inp10.value.length === 2) {
    inp11.focus()
}
})

inp11.addEventListener('input', function () {
 if(inp11.value.length === 2) {
    inp11.blur()
}
})


let textarea = document.querySelector('#textarea');
let div = document.querySelector('#div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.value;
});

let checkbox = document.querySelector('#checkbox');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	if (checkbox.checked === true) {
		console.log('+++');
	} else {
		console.log('---');
	}
});

