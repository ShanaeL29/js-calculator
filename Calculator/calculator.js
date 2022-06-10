// const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const clearText = document.querySelector('.clear-button');
const backspace = document.querySelector('.backspace');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const equal = document.querySelector('.equal');

input.value = '0';

// for(let button of buttons){
//     button.addEventListener('click', () => {
//         if(button.innerHTML.match(/[0-9]/)){
//             if(input.value === '0') input.value = '';
//         input.value += button.innerHTML;
//         }
//     });
// }

for(let number of numbers){
    number.addEventListener('click', () => {
        if(input.value === '0') input.value = '';
        input.value += number.innerHTML;
    });
};

clearText.addEventListener('click', () => {
    input.value = '0';
});

backspace.addEventListener('click', () => {
    if(input.value !== '0'){
        input.value = input.value.slice(0, -1);
    }
    if(input.value.lastIndexOf('-') === input.value.length - 1){
        input.value = input.value.slice(0, -1);
    }
});

divide.addEventListener('click', () => {
    if(input.value !== '0'){
        input.value += '/';
    } else input.value += '0/';
});

multiply.addEventListener('click', () => {
    if(input.value !== '0'){
    input.value += '*';
    } else {
        input.value = '0*';
    }
});

subtract.addEventListener('click', () => {
    if(input.value !== '0'){
    input.value += '-';
    } else {
        input.value = '0-';
    }
});

add.addEventListener('click', () => {
    if(input.value !== '0'){
    input.value += '+';
    } else {
        input.value = '0+';
    }
});

equal.addEventListener('click', () => {
    input.value = eval(input.value);
});

//remove touch functionality
//change text size to fit screen
//toFixed(#) to set decimal places allowed