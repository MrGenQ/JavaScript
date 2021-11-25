import masData from "./addToWishlist"; 
import localSt from "./localStorage";
import remove from "./remove";
const myWishList = () =>{
    
    let buttons = document.querySelectorAll("ul section button");
    for (let i = 0; i < buttons.length; i++) {
        if (document.addEventListener) {
            buttons[i].addEventListener("click", function() {
                let con = []
                const wish = document.createTextNode('Remove')
                document.querySelector(".four").appendChild(document.createElement("aside")).appendChild(document.createElement("button")).appendChild(wish)
                remove()
                for(let j = 0; j < 5; j++)
                {
                    con.push(masData[i*5+j])
                    localSt.push(con)
                    let cell = document.createTextNode(masData[i*5+j])
                    document.querySelector(".four").appendChild(document.createElement("div")).appendChild(cell)
                }
                
                localStorage.setItem('wishlist', localSt);
                console.log(con)
            });
        } else {
            buttons[i].attachEvent("onclick", function() {
            });
        };
    }; 
}
export default myWishList