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
let num1, num1Plus, num2, op, // operator
sign, // positive or negative
specialbtn //ac or equal
nums.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'zero':
            num1 = '0'
            break  
        case 'one':
            num1 = '1'
            break
        case 'two':
            num1 = '2'
            break
        case 'three':
            num1 = '3'
            break
        case 'four':
            num1 = '4'
            break
        case 'five':
            num1 = '5'
            break 
        case 'six':
            num1 = '6'
            break     
        case 'seven':
            num1 = '7'
            break   
        case 'eight':
            num1 = '8'
            break
        case 'nine':
            num1 = '9'
            break
        case 'add':
            op = 'add'
            break
        case 'subtract':
            op = 'subtract'
            break
        case 'multiply':
            op = 'multiply'
            break
        case 'divide':
            op = 'divide'
            break
        case 'AC':
            specialbtn = 'AC'
            break
        case 'equal':  
            specialbtn = 'equal'
            break       
    }
})