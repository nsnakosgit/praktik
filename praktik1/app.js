// let keys = document.querySelectorAll('#calc span');
// let buttons = document.querySelectorAll("button");
// let operators = ['+', '-', 'x', '÷'];
// let decimalAdded = false;

// for (let i = 0; i < keys.length; i++) {
//     keys[i].onclick = function(e) {
//         let input = document.querySelector('.display');
//         let inputVal = input.innerHTML;
//         let btnVal = this.innerHTML;

//         if (btnVal == 'C') {
//             input.innerHTML = '';
//             decimalAdded = false;
//         } else if (btnVal == '=') {
//             let equation = inputVal;
//             let lastChar = equation[equation.length - 1];

//             equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

//             if (operators.indexOf(lastChar) > -1 || lastChar == '.')
//                 equation = equation.replace(/.$/, '');

//             if (equation)
//                 input.innerHTML = eval(equation);

//             decimalAdded = false;
//         } else if (operators.indexOf(btnVal) > -1) {
//             let lastChar = inputVal[inputVal.length - 1];

//             if (inputVal != '' && operators.indexOf(lastChar) == -1)
//                 input.innerHTML += btnVal;

//             else if (inputVal == '' && btnVal == '-')
//                 input.innerHTML += btnVal;


//             if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
//                 input.innerHTML = inputVal.replace(/.$/, btnVal);
//             }

//             decimalAdded = false;
//         } else if (btnVal == '.') {
//             if (!decimalAdded) {
//                 input.innerHTML += btnVal;
//                 decimalAdded = true;
//             }
//         } else {
//             input.innerHTML += btnVal;
//         }

//         e.preventDefault();
//     }
// }

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, true);




document.addEventListener('DOMContentLoaded', () => {
    
    let calc = document.getElementById('calc');
    let display = calc.querySelector('.display');
    
    let buttons = Array.from(calc.querySelectorAll('button'));
    // // document.querySelector(display.).innerHTML = buttons



    buttons.map(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('c')) {
        display.textContent = '0';
        } else if (button.classList.contains('signed')) {
        if (display.textContent.startsWith('-')) {
            display.textContent = display.textContent.substring(1);
        } else {
            display.textContent = '-' + display.textContent;
        }
        } else if (button.classList.contains('percent')) {
        display.textContent = display.textContent / 100;
        } else if (button.classList.contains('divide')) {
        window.operator = '÷';
        window.firstOperand = display.textContent;
        display.textContent = '0';
        } else if (button.classList.contains('times')) {
        window.operator = 'x';
        window.firstOperand = display.textContent;
        display.textContent = '0';
        } else if (button.classList.contains('minus')) {
        window.operator = '-';
        window.firstOperand = display.textContent;
        display.textContent = '0';
        } else if (button.classList.contains('plus')) {
        window.operator = '+';
        window.firstOperand = display.textContent;
        display.textContent = '0';
        } else if (button.classList.contains('equals')) {
        window.secondOperand = display.textContent;
        if (window.operator === '÷') {
            display.textContent = window.firstOperand / window.secondOperand;
        } else if (window.operator === 'x') {
            display.textContent = window.firstOperand * window.secondOperand;
        } else if (window.operator === '-') {
            display.textContent = window.firstOperand - window.secondOperand;
        } else if (window.operator === '+') {
            display.textContent = parseFloat(window.firstOperand) + parseFloat(window.secondOperand);
        }
        } else {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
        }
    });
    });
});
