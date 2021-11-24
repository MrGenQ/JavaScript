import masData from "./addToWishlist"; 


const myWishList = () =>{
        let buttons = document.querySelectorAll("ul section button");
        for (let i = 0; i < buttons.length; i++) {
            if (document.addEventListener) {
                buttons[i].addEventListener("click", function() {
                    for(let j = 0; j < 5; j++)
                    {
                        let cell = document.createTextNode(masData[i*5+j])
                        document.querySelector(".four").appendChild(document.createElement("div")).appendChild(cell)

                    }
                });
            } else {
                buttons[i].attachEvent("onclick", function() {
                });
            };
        };
    
}
export default myWishList