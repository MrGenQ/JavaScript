const addListEl = (meta) =>{
    const wish = document.createTextNode('Add to Wishlist')
    if(meta == "Fantastine"){document.querySelector(".one").appendChild(document.createElement("section")).appendChild(document.createElement("button")).appendChild(wish)
            document.querySelector(".one").appendChild(document.createElement("aside"))}
    if(meta == "Grozine"){document.querySelector(".two").appendChild(document.createElement("section")).appendChild(document.createElement("button")).appendChild(wish)
            document.querySelector(".two").appendChild(document.createElement("aside"))}
    if(meta == "Poemos"){document.querySelector(".three").appendChild(document.createElement("section")).appendChild(document.createElement("button")).appendChild(wish)
            document.querySelector(".three").appendChild(document.createElement("aside"))}
}
export default addListEl