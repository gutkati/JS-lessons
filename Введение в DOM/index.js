let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

console.log(elem1)
console.log(elem2)
console.log(elem3)

// ⊗jsPmDmEGAS

let input = document.querySelector('#block p')
console.log(input)

let input2 = document.querySelector('.block р')
console.log(input2)

let input3 = document.querySelector('.www')
console.log(input3)

//⊗jsPmDmEHB

let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')

button1.addEventListener('click', function () {
    alert('1')
})
button2.addEventListener('click', function () {
    alert('2')
})
button3.addEventListener('click', function () {
    alert('3')
})

//⊗jsPmDmNEH
let button4 = document.querySelector('#button4')
let button5 = document.querySelector('#button5')

function func1() {
    console.log(1);
}

function func2() {
    console.log(2);
}

button4.addEventListener('click', func1)
button5.addEventListener('click', func2)

// ⊗jsPmDmMEH
let elem11 = document.querySelector('#elem11');
let elem12 = document.querySelector('#elem12');
let elem13 = document.querySelector('#elem13');
let elem14 = document.querySelector('#elem14');
let elem15 = document.querySelector('#elem15');

function func3() {
    console.log('message');
}

elem11.addEventListener('click', func3)
elem12.addEventListener('click', func3)
elem13.addEventListener('click', func3)
elem14.addEventListener('click', func3)
elem15.addEventListener('click', func3)

// ⊗jsPmDmSH
let elem21 = document.querySelector('#elem21')

function func11() {
    console.log('1');
}

function func21() {
    console.log('2');
}

function func31() {
    console.log('3');
}

elem21.addEventListener('click', func11)
elem21.addEventListener('click', func21)
elem21.addEventListener('click', func31)

// ⊗jsPmDmDEH

let twoClick = document.querySelector('#twoClick')
let mouseover = document.querySelector('#mouseover')
let mouseout = document.querySelector('#mouseout')
let twoDo = document.querySelector('#twoDo')

function showMessage() {
    alert('Привет! Как дела?')
}

function getText() {
    console.log('Скрипт работает')
}

function getMessage() {
    alert('Пока, пока!')
}


twoClick.addEventListener('dblclick', showMessage)
mouseover.addEventListener('mouseover', getText)
mouseout.addEventListener('mouseout', getMessage)
twoDo.addEventListener('mouseover', getText)
twoDo.addEventListener('mouseout', getMessage)

// ⊗jsPmDmET
let text1 = document.querySelector('#text1')
let button11 = document.querySelector('#button11')
let button12 = document.querySelector('#button12')

let num25 = document.querySelector('#number25')
let num100 = document.querySelector('#number100')
let buttonSum = document.querySelector('#buttonSum')

let num20 = document.querySelector('#number20')
let num30 = document.querySelector('#number30')
let num40 = document.querySelector('#number40')
let sumNumber = document.querySelector('#sumNumber')
let buttonNum = document.querySelector('#buttonNum')

let number22 = document.querySelector('#number22')
let buttonOne = document.querySelector('#buttonOne')

let text2 = document.querySelector('#text2')
let buttonAdd = document.querySelector('#buttonAdd')

function showText() {
    console.log(text1.textContent)
}

function changeText() {
    text1.textContent = 'Всё вдруг изменилось...'
}

function calcNumber() {
    console.log(+num25.textContent + +num100.textContent)
}


function calcSum() {
    let num1 = +num20.textContent
    let num2 = +num30.textContent
    let num3 = +num40.textContent
    sumNumber.textContent = (num1 + num2 + num3)
    return sumNumber
}

function changeNum() {
    number22.textContent = +number22.textContent + 1
}

function changeTextAdd() {
    text2.textContent = text2.textContent + '!'
}

button11.addEventListener('click', showText)
button12.addEventListener('click', changeText)
buttonSum.addEventListener('click', calcNumber)
buttonNum.addEventListener('click', calcSum)
buttonOne.addEventListener('click', changeNum)
buttonAdd.addEventListener('click', changeTextAdd)

// ⊗jsPmDmEH
let container = document.querySelector('.container')
let buttonShow = document.querySelector('#buttonShow')
let buttonChange = document.querySelector('#buttonChange')

function showElement() {
    console.log(container.innerHTML)
}

function changeText2() {
    container.innerHTML = '<p><b>Всем привет!</b></p>'
}

buttonShow.addEventListener('click', showElement)
buttonChange.addEventListener('click', changeText2)

// ⊗jsPmDmAVP
let elemEm = document.querySelector('#elemEm')
let buttonAtr = document.querySelector('#buttonAtr')
let buttonSub = document.querySelector('#buttonSub')

let link = document.querySelector('#link')
let buttonHref = document.querySelector('#buttonHref')
let textHref = document.querySelector('#textHref')

let link2 = document.querySelector('#link2')
let buttonHref2 = document.querySelector('#buttonHref2')

let img = document.querySelector('#img')
let buttonLink = document.querySelector('#buttonLink')
let textLink = document.querySelector('#textLink')

let buttonWidth = document.querySelector('#buttonWidth')

let buttonWidth2 = document.querySelector('#buttonWidth2')

let img2 = document.querySelector('#img2')
let buttonLink2 = document.querySelector('#buttonLink2')
let buttonLink3 = document.querySelector('#buttonLink3')


function showAtr() {
    console.log(elemEm.type)
}

function showSub() {
    console.log(elemEm.type = 'submit')
}

function getTextAtr() {
    return textHref.textContent = link.href
}

function getTextHref() {
    return link2.textContent = link2.textContent + '(' + link.href + ')'
}

function getTextSrc() {
    textLink.textContent = img.src
}

function changeWidth() {
    return img.width = 300
}

function changeWidthMax() {
    return img.width = img.width * 2
}

function changeLink2() {
    return img2.src = 'https://mywishboard.com/thumbs/wish/q/n/o/600x0_nkweqautcnhitvjt_jpg_6f19.jpg'
}

function changeLink3() {
    return img2.src = 'https://ruslania.com/pictures/books_photos/27/277918/o.jpg'
}


buttonAtr.addEventListener('click', showAtr)
buttonSub.addEventListener('click', showSub)
buttonHref.addEventListener('click', getTextAtr)
buttonHref2.addEventListener('click', getTextHref)
buttonLink.addEventListener('click', getTextSrc)
buttonWidth.addEventListener('click', changeWidth)
buttonWidth2.addEventListener('click', changeWidthMax)
buttonLink2.addEventListener('click', changeLink2)
buttonLink3.addEventListener('click', changeLink3)

// ⊗jsPmDmTF
let inputText = document.querySelector('#input')
let buttonInput = document.querySelector('#buttonInput')

let inputText2 = document.querySelector('#input2')
let textInput = document.querySelector('#textInput')
let buttonInput2 = document.querySelector('#buttonInput2')

let inputText3 = document.querySelector('#input3')
let inputText4 = document.querySelector('#input4')
let buttonInput3 = document.querySelector('#buttonInput3')

let inputText5 = document.querySelector('#input5')
let inputText6 = document.querySelector('#input6')
let buttonInput4 = document.querySelector('#buttonInput4')

let inputText7 = document.querySelector('#input7')
let inputText8 = document.querySelector('#input8')
let inputText9 = document.querySelector('#input9')
let inputText10 = document.querySelector('#input10')
let inputText11 = document.querySelector('#input11')
let buttonInput5 = document.querySelector('#buttonInput5')
let textRes = document.querySelector('#textRes')

function changeInput() {
    return inputText.value = "Это поле для текста"
}

function changeInput2() {
    return textInput.textContent = inputText2.value
}

function calcPow() {
    return inputText4.value = inputText3.value ** 2
}

function changeInputs() {
    let one = inputText5.value
    let two = inputText6.value
    let res = inputText5.value = two
    let res2 = inputText6.value = one
    return [res, res2]
}


function calcInput() {
    let res = (+inputText7.value + +inputText8.value + +inputText9.value + +inputText10.value + +inputText11.value) / 5
    return textRes.textContent = textRes.textContent + res
}

buttonInput.addEventListener('click', changeInput)
buttonInput2.addEventListener('click', changeInput2)
buttonInput3.addEventListener('click', calcPow)
buttonInput4.addEventListener('click', changeInputs)
buttonInput5.addEventListener('click', calcInput)

// jsPmDmTFF
let inputText12 = document.querySelector('#input12')
let inputText13 = document.querySelector('#input13')
let inputText14 = document.querySelector('#input14')

function getFocus() {
    inputText12.value = 1
}

function getBlur() {
    inputText12.value = 2
}

function getBlurPow() {
    inputText13.value = inputText13.value ** 2
}

function getInput() {
    inputText14.value = ''
}

inputText12.addEventListener('focus', getFocus)
inputText12.addEventListener('blur', getBlur)
inputText13.addEventListener('blur', getBlurPow)
inputText14.addEventListener('focus', getInput)

// ⊗jsPmDmEA
let elem16 = document.querySelector('#elem16')
let buttonClass = document.querySelector('#buttonClass')
let elem17 = document.querySelector('#elem17')
let buttonClass2 = document.querySelector('#buttonClass2')
let elem18 = document.querySelector('#elem18')
let buttonClass3 = document.querySelector('#buttonClass3')

function showText2() {
    return elem16.textContent = elem16.className
}

function createClass() {
    elem17.className = 'new_class'
    console.log(elem17.className)
    elem17.textContent = 'Класс записан'

}

function getArray() {
    console.log(elem18.className.split(' '))
}

buttonClass.addEventListener('click', showText2)
buttonClass2.addEventListener('click', createClass)
buttonClass3.addEventListener('click', getArray)

// ⊗jsPmDmChn
// let image = document.querySelector('#image');
// console.log(image.src);
console.log(document.querySelector('#image').src) // альтернатива выше написаному коду - цепочка методов

// ⊗jsPmDmChA
let image2 = document.querySelector('#image2')
console.log(image2.src)
console.log(image2.width)
console.log(image2.height)

// ⊗jsPmDmThs
let input15 = document.querySelector('#input15')
let buttonClass4 = document.querySelector('#buttonClass4')
let text11 = document.querySelector('#text11')
let text12 = document.querySelector('#text12')
let text13 = document.querySelector('#text13')
let text14 = document.querySelector('#text14')
let text15 = document.querySelector('#text15')
let input16 = document.querySelector('#input16')
let input17 = document.querySelector('#input17')
let input18 = document.querySelector('#input18')

function showNum() {
    this.value = 1
}

function showNum2() {
    this.value = 2
}

function changeNum2() {
    this.value = +this.value + 1
}

function changeText3() {
    this.textContent = this.textContent + '!'
}

function calcPowNum() {
    this.value = this.value ** 2
}

input15.addEventListener('focus', showNum)
input15.addEventListener('blur', showNum2)
buttonClass4.addEventListener('click', changeNum2)
text11.addEventListener('click', changeText3)
text12.addEventListener('click', changeText3)
text13.addEventListener('click', changeText3)
text14.addEventListener('click', changeText3)
text15.addEventListener('click', changeText3)
input16.addEventListener('blur', calcPowNum)
input17.addEventListener('blur', calcPowNum)
input18.addEventListener('blur', calcPowNum)

// ⊗jsPmDmEGG
let texts = document.querySelectorAll('.text')
let input19 = document.querySelector('#input19')
let texts1 = document.querySelectorAll('.text1')
let input20 = document.querySelector('#input20')
let input21 = document.querySelector('#input21')
let numAll = document.querySelectorAll('.num')
let text16 = document.querySelector('#text16')


function changeText4() {
    for (let text of texts) {
        text.textContent = 'text'
    }
}

function changeText5() {
    for (let text of texts1) {
        text.textContent = text.textContent + '!'
    }
}

function calcSumArr() {
    let res = 0
    for (let num of numAll) {
        res += +num.value
    }
    return text16.textContent = res
}


input19.addEventListener('click', changeText4)
input20.addEventListener('click', changeText5)
input21.addEventListener('click', calcSumArr)

// ⊗jsPmDmLNH
let numArr = document.querySelectorAll('.num1')
let num22 = document.querySelectorAll('.text2')

function calcNumber2() {
    this.value = Number(this.value) + 1
}

for (let num of numArr) {
    num.addEventListener('blur', calcNumber2)
}

function calcNumPow() {
    this.textContent = Number(this.textContent) ** 2
}

for (let num of num22) {
    num.addEventListener('click', calcNumPow)
}

// ⊗jsPmDmLAH
let divs = document.querySelectorAll('.div')

for (let div of divs) {
    div.addEventListener('click', function () {
        this.textContent++;
    });
}

// ⊗jsPmDmHU
let linkGoogle = document.querySelector('#linkGoogle')
let buttonLink4 = document.querySelector('#button')
let input22 = document.querySelector('#input22')

function showLink() {
    linkGoogle.textContent = linkGoogle.textContent + '(' + linkGoogle.href + ')'
    this.removeEventListener('click', showLink)
}

function changeButton() {
    if (this.value < 10) {
        this.value++
    } else {
        input22.removeEventListener('click', changeButton)
    }
}

buttonLink4.addEventListener('click', showLink)
input22.addEventListener('click', changeButton)

// ⊗jsPmDmLHU
let text23 = document.querySelectorAll('.text3')

function addSymbol() {
    this.textContent = this.textContent + '!'
    this.removeEventListener('click', addSymbol)

}

for (let elem of text23) {
    elem.addEventListener('click', addSymbol)
}

// ⊗jsPmDmAHU
let list = document.querySelectorAll('ul .list')

for (let li of list) {
    li.addEventListener('click', function func() {
        if (this.textContent < 10) {
            this.textContent = Number(this.textContent) + 1
        }
        this.textContent.removeEventListener('click', func)
    })
}

// ⊗jsPmDmCdg
let list2 = document.querySelectorAll('ul .list2')
let arrList = []
for (let li of list2) {
    console.log(li.textContent)
    let result = 0
    for (let i of li.textContent) {
        console.log(i)
        result += +i
    }
    console.log('res', result)
    if (result === 6) {
        arrList.push(li.textContent)
    }
}
console.log(arrList)
let newRes = arrList.reduce((sum, num) => sum + +num, 0)
console.log('newRes', newRes)

// ⊗jsPmDmMst
let elemP1 = document.querySelectorAll('.p1');

for (let elem of elemP1) {
    elem.textContent += '!';
}

let elemP2 = document.querySelectorAll('.p2');

for (let elem of elemP2) {
    elem.addEventListener('click', function () {
        this.textContent = +this.textContent + 1;
    });
}

let buttonCl = document.querySelector('.buttonCl');
let elemP3 = document.querySelector('.p3');

buttonCl.addEventListener('click', function () {
    elemP3.innerHTML = '<b>' + elemP3.innerHTML + '</b>';
});


let elemP4 = document.querySelectorAll('.p4');

for (let elem of elemP4) {
    elem.addEventListener('click', function () {
        this.textContent += '!';
    });
}

let buttonCl2 = document.querySelector('.buttonCl2');
let elemP5 = document.querySelectorAll('.p5');

buttonCl2.addEventListener('click', function () {
    for (let elem of elemP5) {
        elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
    }
});


let buttonCl3 = document.querySelector('.buttonCl3');
let elemP6 = document.querySelectorAll('.p6');
let sum = 0;

for (let elem of elemP6) {
    sum += Number(elem.textContent);

    buttonCl3.addEventListener('click', function () {
        console.log(sum);
    });
}

let btn = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function () {
    inp3.value = +inp1.value + +inp2.value;
});


let inputs = document.querySelectorAll('.inp20')
let button = document.querySelector('#btn2')

button.addEventListener('click', function () {
    for (let input of inputs) {
        if (input.value === input.dataset.text) {
            input.classList.add('right')
        } else {
            input.classList.add('wrong')
        }
    }
});


let inputs2 = document.querySelectorAll('.inp21')
let btn3 = document.querySelector('#btn3')

let arrTexts = [
    'text1',
    'text2',
    'text3',
];

// btn3.addEventListener('click', function () {
//     for (let i = 0; i <= inputs2.length; i++) {
//         for (let j = i; j === i; j++) {
//             if (inputs2[i].value === arrTexts[j]) {
//                 inputs2[i].classList.add('right')
//             } else {
//                 inputs2[i].classList.add('wrong')
//             }
//         }
//     }
// });

btn3.addEventListener('click', function () {
    for (let i = 0; i <= inputs2.length; i++) {
        if (inputs2[i].value === arrTexts[i]) {
            inputs2[i].classList.add('right')
        } else {
            inputs2[i].classList.add('wrong')
        }

    }
});


let inp22 = document.querySelector('#inp22')

inp22.addEventListener('blur', function () {
    let digits = inp22.value.split('')
    let sum = 0;
    for (let digit of digits) {
        sum += Number(digit);
    }
    console.log(sum);

    // let digits = inp22.value.split('').reduce((sum, num) => sum + +num, 0)
    // console.log(digits)
});

// ⊗jsPmDmPm

let inp23 = document.querySelector('#inp23')
let textNew23 = document.querySelector('#text23')

function addText() {
    textNew23.textContent = textNew23.textContent + " " + inp23.value
}

inp23.addEventListener('blur', addText)

let inp24 = document.querySelectorAll('.inp24')
let btnSum = document.querySelector('#btnSum')
let resSum = document.querySelector('#resSum')

function calcNumSum() {
    let res = 0
    for (let elem of inp24) {
        res += +elem.value
    }
    return resSum.textContent = res
}

btnSum.addEventListener('click', calcNumSum)

let inp25 = document.querySelector('.inp25')
let resSum2 = document.querySelector('#resSum2')

inp25.addEventListener('blur', function () {
    let res25 = inp25.value.split('').reduce((sum, num) => sum + +num, 0)
    resSum2.textContent = res25
})

let inp26 = document.querySelector('.inp26')
let resSum3 = document.querySelector('#resSum3')

inp26.addEventListener('blur', function () {
    let res = 0
    let array = inp26.value.split(',')
    for (let elem of array) {
        res += +elem
    }
    res = res / array.length
    resSum3.textContent = res
})

let inp27 = document.querySelector('#inp27')
let inp28 = document.querySelectorAll('.inp28')

inp27.addEventListener('blur', function () {
    let arrName = inp27.value.split(" ")

    for (let i = 0; i <= inp28.length; i++) {
        inp28[i].value = arrName[i]
    }
})

let inp29 = document.querySelector('#inp29')

inp29.addEventListener('blur', function () {
    let array = inp29.value.split(' ')
    let newArr = []
    for (let elem of array) {
        elem = elem[0].toUpperCase() + elem.slice(1)
        newArr.push(elem)
    }
    inp29.value = newArr.join(' ')

})

let inp30 = document.querySelector('#inp30')

inp30.addEventListener('blur', function () {
    let array = inp30.value.split(' ')
    console.log(array.length)
})

let inp31 = document.querySelector('#inp31')

inp31.addEventListener('blur', function () {
    let arr = inp31.value.split('.').reverse().join('-')
    inp31.value = arr
})

let inp32 = document.querySelector('#inp32')
let btnPlm = document.querySelector('#btnPlm')

const checkPalindrome = () => {
    let arr = inp32.value.split('')
    let arrNew = [...arr].reverse()
    console.log(arrNew.every((el, i) => el === arr[i]))
}

btnPlm.addEventListener('click', checkPalindrome)

let inp33 = document.querySelector('#inp33')

inp33.addEventListener('blur', function () {
    let arr = inp33.value.split('')
    console.log(arr.includes('3'))
})

let textOne = document.querySelectorAll('.p7')
let buttonCl4 = document.querySelector('.buttonCl4')

function addSymbol2() {
    for (let i = 0; i <= textOne.length; i++) {
        textOne[i].textContent = textOne[i].textContent + ' ' + Number(i + 1)
    }
}

buttonCl4.addEventListener('click', addSymbol2)

let link12 = document.querySelectorAll('.link12')
let btn12 = document.querySelector('#btn12')

function addLink() {
    for (let elem of link12) {
        elem.textContent = elem.textContent + '(' + elem.href + ')'
    }
}

btn12.addEventListener('click', addLink)

let link13 = document.querySelectorAll('.link13')
let btn13 = document.querySelector('#btn13')

function checkLink() {
    for (let elem of link13) {
        if (elem.href.includes('http://')) {
            elem.textContent = elem.textContent + '→'
        }
    }
    btn13.removeEventListener('click', checkLink)
}

btn13.addEventListener('click', checkLink)

let num14 = document.querySelectorAll('.num14')

for (let elem of num14) {
    elem.addEventListener('click', function () {
        this.textContent = this.textContent ** 2
    })
}

let inpDate = document.querySelector('#inpDate')
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let arrDate = inpDate.value.split('.').reverse()
let date = new Date(+arrDate[0], +arrDate[1] - 1, +arrDate[2])

inpDate.addEventListener('blur', function () {
    inpDate.value = days[date.getDay()]
})

let inpNum = document.querySelector('#inpNum')
let btn15 = document.querySelector('#btn15')
let btn16 = document.querySelector('#btn16')

btn15.addEventListener('click', function () {
    inpNum.value = Number(inpNum.value) + 1
})

function calcBtn() {
    if (inpNum.value > 0) {
        inpNum.value = Number(inpNum.value) - 1
    } else {
        btn16.removeEventListener('click', calcBtn)
    }
}

btn16.addEventListener('click', calcBtn)


let numOne1 = document.querySelectorAll('.numOne1')
let inpSum = document.querySelector('#inpSum')
let resSumNum = 0
for (let elem of numOne1) {
    elem.addEventListener('click', function () {
        resSumNum += 1
        inpSum.value = resSumNum
    })
}

let textDiv = document.querySelectorAll('.textDiv')

for (let elem of textDiv) {
    elem.textContent = elem.textContent.substr(0, 11) + '...'
}


let inpNum2 = document.querySelector('#inpNum2')
let btn17 = document.querySelector('#btn17')

btn17.addEventListener('click', function () {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let word = ''
    for (let i = 0; i < 8; i++) {
        word += str[Math.round(Math.random() * (str.length - 1))];
    }
    inpNum2.value = word
})


let inpNum3 = document.querySelector('#inpNum3')
let btn18 = document.querySelector('#btn18')

btn18.addEventListener('click', function () {
    let str = inpNum3.value
    let word = ''
    for (let i = 0; i < str.length; i++) {
        word += str[Math.round(Math.random() * (str.length - 1))];
    }
    inpNum3.value = word
})


let inpNum4 = document.querySelector('#inpNum4')
let btn19 = document.querySelector('#btn19')
let numOne2 = document.querySelector('.numOne2')

function getDegrees() {
    numOne2.textContent = (+inpNum4.value - 32) * (5 / 9);
}

btn19.addEventListener('click', getDegrees)

let inpNum5 = document.querySelector('#inpNum5')
let btn20 = document.querySelector('#btn20')
let numOne3 = document.querySelector('.numOne3')

function getFactorial() {
    let num = Number(inpNum5.value)
    let res = 1
    for (let i = 1; i <= num; i++) {
        res *= i
    }
    numOne3.textContent = res
}

btn20.addEventListener('click', getFactorial)

let numA = document.querySelector('#inpNum6')
let numB = document.querySelector('#inpNum7')
let numC = document.querySelector('#inpNum8')
let btn21 = document.querySelector('#btn21')
let numOne4 = document.querySelector('.numOne4')

function getSqrt() {
    let a = +numA.value
    let b = +numB.value
    let c = +numC.value
    let discr = b ** 2 - (4 * a * c)
    console.log('discr', discr)

    if (discr > 0) {
        numOne4.textContent = 'x1=' + (-b + Math.sqrt(discr)) / (2 * a) + ', ' + 'x2=' + (-b - Math.sqrt(discr)) / (2 * a)
    } else if (discr === 0) {
        numOne4.textContent = 'x:' + (-b / (2 * a))
    } else {
        numOne4.textContent = 'Корней нет'
    }

}

btn21.addEventListener('click', getSqrt)