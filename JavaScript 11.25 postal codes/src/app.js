import renderForm from "./renderForm";
import searchCode from "./searchCode";
window.onload = function()
{
    window.localStorage.clear();
}
renderForm()
searchCode()

require('bootstrap')