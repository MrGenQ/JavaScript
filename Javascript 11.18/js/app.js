for(let i=0; i<16; i++){
    let div = document.createElement('div');
    div.textContent = "Div Nr." + [i];
    document.querySelector('section').appendChild(div)

}
for(let div of document.querySelectorAll('div'))
{
    div.onclick = (e) =>{
        e.target.textContent = "Tekstas pakeistas"
        div.style.backgroundColor = `rgb(${setBg(255)},${setBg(255)},${setBg(255)})`
    }
}

for(let color of document.querySelectorAll('div'))
{
    color.style.backgroundColor = "#00FF00";
}
function setBg(max){
    return Math.floor(Math.random()* (max+1));
}