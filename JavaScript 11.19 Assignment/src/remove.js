import masData from "./addToWishlist"; 
import localSt from "./localStorage";
const remove = () =>{
    let buttons = document.querySelectorAll("ul aside button");
    for (let i = 0; i < buttons.length; i++) {
        if (document.addEventListener) {
            buttons[i].addEventListener("click", function() {
                
                let top = document.querySelector(".four");
                

                for(let j = 0; j < 5; j++)
                {
                    let nested = document.querySelector(".four div");

                    // Throws Uncaught TypeError
                    top.removeChild(nested);
                }
                localStorage.clear()
            });
        } else {
            buttons[i].attachEvent("onclick", function() {
            });
        };
    };   
}
export default remove