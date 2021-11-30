import renderForm from "./renderForm";
import storage from "./storage";
import pushingToStorage from "./pushingToStorage";
window.onload = function()
{
    window.localStorage.clear();
}
renderForm()
pushingToStorage()


require('bootstrap')