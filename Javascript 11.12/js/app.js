/*console.log(document.getElementById('vip'))
console.log(document.getElementsByTagName('article'))
console.log(document.getElementsByClassName('super'))

console.log(document.querySelector('.super'))
console.log(document.querySelectorAll('article'))

*/
/*section.addEventListener('click', changeBg())
function changeBg(){
    section.style.backgroundColor = "#eeff88";
}*/
/*
const section = document.querySelector('#vip')
const btn = document.querySelector('button')
const color = document.querySelector('input')
btn.addEventListener('click', changeB)
function  changeB() {
    section.style.backgroundColor = color.value;
}*/

const font = document.querySelectorAll('p');
const font_btn = document.querySelector('.fonts button');
const font_input = document.querySelector('.fonts input');

font_btn.addEventListener('click', changeFont);
function changeFont(){

    for(let f of font) {
        f.style.fontFamily = font_input.value;
    }
}

const fontsize_btn = document.querySelector('.f button');
const fontsize_input = document.querySelector('.f input');

fontsize_btn.addEventListener('click', changeSize);
function changeSize(){
    for(let par of font) {
        par.style.fontSize = fontsize_input.value;
    }
}

const fontcolor_btn = document.querySelector('.fontcolor button');
const fontcolor_input = document.querySelector('.fontcolor input');

fontcolor_btn.addEventListener('click', changeColor);
function changeColor(){
    for(let par of font) {
        par.style.color = fontcolor_input.value;
    }
}
