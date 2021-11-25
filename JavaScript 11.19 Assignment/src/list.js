import data from "./data"
import addListEl from "./addListEl";
const list = () =>{
    for(let theme of data){
        for(let meta in theme){
            for(let book of theme[meta]){
                        addListEl(meta)
                        let cellText
                        for(let info in book) {
                            cellText = document.createTextNode(info + ": " + book[info]);
                            if(meta == "Fantastine"){
                                let select = document.querySelectorAll('.one aside')
                                select.forEach(el => el.appendChild(document.createElement("div")).appendChild(cellText))
                            }
                            if(meta == "Grozine"){
                                let select = document.querySelectorAll('.two aside')
                                select.forEach(el => el.appendChild(document.createElement("div")).appendChild(cellText))
                            }
                            if(meta == "Poemos"){
                                let select = document.querySelectorAll('.three aside')
                                select.forEach(el => el.appendChild(document.createElement("div")).appendChild(cellText))
                            }
                        }  
            }
        }
    
    }

}
export default list