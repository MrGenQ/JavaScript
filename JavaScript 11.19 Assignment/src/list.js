import data from "./data"
const list = () =>{
    for(let theme of data){
        for(let meta in theme){
            for(let book of theme[meta]){
                    if(meta == "Fantastine"){document.querySelector(".one").appendChild(document.createElement("li"))}
                    if(meta == "Grozine"){document.querySelector(".two").appendChild(document.createElement("li"))}
                    if(meta == "Poemos"){document.querySelector(".three").appendChild(document.createElement("li"))}
                    for(let info in book) {  
                        let cellText = document.createTextNode(info + ": " + book[info] + " | ");
                        if(meta == "Fantastine"){document.querySelector(".one").appendChild(cellText)}
                        if(meta == "Grozine"){document.querySelector(".two").appendChild(cellText)}
                        if(meta == "Poemos"){document.querySelector(".three").appendChild(cellText)}                 
                    }
            }
        }
    
    }
    
}
export default list