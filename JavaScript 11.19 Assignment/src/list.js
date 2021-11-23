import data from "./data"
const list = () =>{
    for(let theme of data){
        for(let meta in theme){
            for(let book of theme[meta]){
                    //let A = []
                    const wish = document.createTextNode('Add to Wishlist')
                    if(meta == "Fantastine"){document.querySelector(".one").appendChild(document.createElement("div")).appendChild(document.createElement("button")).appendChild(wish)}
                    if(meta == "Grozine"){document.querySelector(".two").appendChild(document.createElement("div")).appendChild(document.createElement("button")).appendChild(wish)}
                    if(meta == "Poemos"){document.querySelector(".three").appendChild(document.createElement("div")).appendChild(document.createElement("button")).appendChild(wish)}
                    for(let info in book) {

                        let cellText = document.createTextNode(info + ": " + book[info] + " | ");
                        //A.push(cellText)
                        if(meta == "Fantastine"){document.querySelector('.one').appendChild(cellText)}
                        if(meta == "Grozine"){document.querySelector(".two").appendChild(cellText)}
                        if(meta == "Poemos"){document.querySelector(".three").appendChild(cellText)}
                    }
            }
        }
    
    }
    
}

export default list