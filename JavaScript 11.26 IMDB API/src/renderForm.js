import form from "./form";
const renderForm = () =>{
    let formElement = document.createElement('form');
    formElement.className = "form-inline";
    formElement.innerHTML = form();
    //const el = document.createElement("div")
    //el.innerHTML = '<i class="fas fa-search"></i>'
    //document.querySelector(".img").appendChild(el)
    //console.log(el)
    document.querySelector("main .card-body").appendChild(formElement);
    console.log(document.querySelector('.rating').value)
}
export default renderForm