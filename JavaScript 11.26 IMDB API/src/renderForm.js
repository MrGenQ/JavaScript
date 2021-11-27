import form from "./form";
import clear from "./clear";

const renderForm = () =>{       //function to create form with few elements
    let formElement = document.createElement('form');
    formElement.className = "form-inline";
    formElement.innerHTML = form();
    document.querySelector("main .card-body").appendChild(formElement);
    clear()
    

}
export default renderForm