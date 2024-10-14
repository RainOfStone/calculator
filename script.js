const nums = document.querySelector('#nums') //container of nums
const answers = document.querySelector('#answers'), 
zero = document.querySelector('#zero'),
one = document.querySelector('#one'), 
two = document.querySelector('#two'),
three = document.querySelector('#three'),
four = document.querySelector('#four'),
five = document.querySelector('#five'),
six  = document.querySelector('#six'),
seven  = document.querySelector('#seven'),
eight  = document.querySelector('#eight'),
nine  = document.querySelector('#nine'),
add = document.querySelector('#add'),
subtract = document.querySelector('#subtract'),
multiply = document.querySelector('#multiply'),
divide = document.querySelector('#divide'),
AC = document.querySelector('#AC'),
equal  = document.querySelector('#equal')
let num1, num1Plus, num2 = 'none', op = 'none', // operator
sign, // positive or negative
specialbtn, //ac or equal
Val1, Val2, //represent the first and second num
FuncRan, op2 
nums.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'zero':
            Val1 = 1
            if (op == 'none') {
                num1 = '0'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '0'
                DisplayNum2()
            }
            break  
        case 'one':
            Val1 = 1
            if (op == 'none') {
                num1 = '1'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '1'
                DisplayNum2()
            }
            break
        case 'two':
            Val1 = 1
            if (op == 'none') {
                num1 = '2'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '2'
                DisplayNum2()
            }
            break
        case 'three':
            Val1 = 1
            if (op == 'none') {
                num1 = '3'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '3'
                DisplayNum2()
            }
            break
        case 'four':
            Val1 = 1
            if (op == 'none') {
                num1 = '4'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '4'
                DisplayNum2()
            }
            break
        case 'five':
            Val1 = 1
            if (op == 'none') {
                num1 = '5'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '5'
                DisplayNum2()
            }
            break 
        case 'six':
            Val1 = 1
            if (op == 'none') {
                num1 = '6'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '6'
                DisplayNum2()
            }
            break     
        case 'seven':
            Val1 = 1
            if (op == 'none') {
                num1 = '7'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '7'
                DisplayNum2()
            }
            break   
        case 'eight':
            Val1 = 1
            if (op == 'none') {
                 num1 = '8'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '8'
                DisplayNum2()
            }
            break
        case 'nine':
            Val1 = 1
            if (op == 'none') {
                num1 = '9'
                DisplayNum1()
            }
            else if (op != 'none'){
                num2 = '9'
                DisplayNum2()
            }
            break
        case 'add':
            if (op == 'none') {
                op = '+'
                DisplayOp1()
            }
            else if (op != 'none') {
                op2 = '+'
                DisplayOp2()
            }
            break
        case 'subtract':
            if (op == 'none') {
                op = '-'
                DisplayOp1()
            }
            else if (op != 'none') {
                op2 = '-'
                DisplayOp2()
            }
            break
        case 'multiply':
            if (op == 'none') {
                op = '*'
                DisplayOp1()
            }
            else if (op != 'none') {
                op2 = '*'
                DisplayOp2()
            }
            break
        case 'divide':
            if (op == 'none') {
                op = '/'
                DisplayOp1()
            }
            else if (op != 'none') {
                op2 = '/'
                DisplayOp2()
            }
            break
        case 'AC':
            specialbtn = 'AC'
            Clear()
            break
        case 'equal':  
            specialbtn = 'equal'
            Answer()
            break       
    }
})
function DisplayNum1() {
    if (Val1 == 1 && op == 'none') {
        answers.textContent = `${num1}` 
        FuncRan = 'FuncNum1'
    }
}
function DisplayNum2() {
    answers.textContent = `${num1} ${op} ${num2}`
}
function DisplayOp1() {
    if (Val1 == 1 && op != 'none') {
        answers.textContent = `${num1} ${op}`
        Val1 = 0
        FuncRan = 'FuncOp1'
    }
}
function DisplayOp2() {
    if (op == '+') {
        num1 = Number(num1) + Number(num2)
        console.log(num1)
        answers.textContent = `${num1} ${op2}`
        op = op2
    }
    else if (op == '-') {
        num1 = Number(num1) - Number(num2)
        answers.textContent = `${num1} ${op2}` 
        op = op2
    }
    else if (op == '*') {
        num1 = Number(num1) * Number(num2)
        answers.textContent = `${num1} ${op2}` 
        op = op2
    }
    else if (op == '/') {
        num1 = Number(num1) / Number(num2)
        answers.textContent = `${num1} ${op2}` 
        op = op2
    }
}
function Answer() {
    if (op == '+') {
        num1 = Number(num1) + Number(num2)
        console.log(num1)
        answers.textContent = `${num1}`
    }
    else if (op == '-') {
        num1 = Number(num1) - Number(num2)
        answers.textContent = `${num1}` 
    }
    else if (op == '*') {
        num1 = Number(num1) * Number(num2)
        answers.textContent = `${num1}` 
    }
    else if (op == '/') {
        num1 = Number(num1) / Number(num2)
        answers.textContent = `${num1}` 
    }
    else if (num2 == '0' && op == '/') {
        answers.textContent = 'everyone and their mom knows you can divide by 0'
    }
}
function Clear() {
    answers.textContent = ''
    op = 'none'
    num1 = 'none'
    num2 = 'none'
}
