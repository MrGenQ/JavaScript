import storage from "./storage";
import CreateListEl from "./createListEl";
import clearingInputValue from "./clearingInputValue";
const pushingToStorage = () =>{ // function for adding person's data and placing it in li element
    document.querySelector('form').addEventListener('submit', (event)=> {
        event.preventDefault()
        let name = document.querySelector(".name").value
        let lname = document.querySelector(".lname").value
        let email = document.querySelector(".email").value
        let user = new storage(name, lname, email)
        localStorage.setItem("name", user.name)
        localStorage.setItem("lname", user.lname)
        localStorage.setItem("email", user.email)
        console.log(localStorage)
        CreateListEl()
        clearingInputValue()
    })
}
export default pushingToStorage