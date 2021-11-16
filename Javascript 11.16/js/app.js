/*const par = document.querySelectorAll('p');
const btn = document.querySelector('button');
const text = document.querySelectorAll('.text')
const color = document.querySelector('input');

btn.addEventListener('click', ()=>{
    for(let paragraph of par){
        paragraph.classList.add('super-class', 'duper', 'other')
        paragraph.style.backgroundColor = color.value
        //paragraph.textContent = text.value
        document.querySelectorAll('p').innerHTML = text.value
    }
})

for(let link of document.querySelectorAll('a')){link.href="http://www.delfi.lt"}*/
document.querySelector('.adding button').addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.textContent = document.querySelector('input').value;
    document.querySelector('ul').appendChild(li)
})

document.querySelector('.removing button').addEventListener('click', ()=>{
    let element = document.querySelector('ul');
    element.removeChild(element.lastElementChild);
})