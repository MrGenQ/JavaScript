const myWishList = () =>{

    let add = function(){
        let li = document.createElement("li");
        document.querySelector(".four").appendChild(li);
    }
    const selects = document.querySelectorAll('ul div');

    selects.forEach(el => el.addEventListener('click', add))
    //document.querySelector('ul div button').addEventListener('click', add);
}
export default myWishList