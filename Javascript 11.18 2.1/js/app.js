let ok = true
let images = []
let add = function(){
    if (ok === true) {
        for(let i = 0; i < 12; i++) {
            let img = document.createElement("img");
            img.setAttribute("src","img/"+i+".jpeg");
            img.setAttribute("height", "200");
            img.setAttribute("width", "300");
            document.querySelector("ul").appendChild(img);
            images.push(["img/"+i+".jpeg"])
        }
    }
    ok = false;
}

document.querySelector('.show input').addEventListener('click', add);

function shuffle(array) {
    let i = 0 , j = 0 , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

let mixing = function(){

    shuffle(images)
    for(let i = 0; i < 12; i ++) {
        let d = document.querySelector("ul");
        let d_nested = document.querySelector('img');
        d.removeChild(d_nested);
    }
    for(let i = 0; i < 12; i++) {
        let div = document.createElement('div');

        let img = document.createElement("img");
        img.setAttribute("src",images[i]);
        img.setAttribute("height", "200");
        img.setAttribute("width", "300");
        document.querySelector("ul").appendChild(img);
        images.push(["img/"+i+".jpeg"])
    }
}
document.querySelector('.mix input').addEventListener('click', mixing);


console.log(document.querySelector("img"))
