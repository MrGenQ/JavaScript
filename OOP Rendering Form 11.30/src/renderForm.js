import formHtml from "./formHtml";

const renderForm = () =>{       //function to create form with few elements
    let formElement = document.createElement('form');
    formElement.className = "form-inline";
    formElement.innerHTML = formHtml();
    document.querySelector(".container").appendChild(formElement);

}
export default renderForm