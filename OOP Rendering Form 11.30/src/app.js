import renderForm from "./renderForm";
import pushingToStorage from "./pushingToStorage";
window.onload = function()  //clears localStorage upon opening your browser
{
    window.localStorage.clear();
}
renderForm()
pushingToStorage()


require('bootstrap')