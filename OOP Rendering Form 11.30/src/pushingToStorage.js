import storage from "./storage";
import CreateListEl from "./createListEl";
const pushingToStorage = () =>{
    //var localArray = []
    document.querySelector('form').addEventListener('submit', (event)=> {
        event.preventDefault()
        let name = document.querySelector(".name").value
        let lname = document.querySelector(".lname").value
        let email = document.querySelector(".email").value
        let user = new storage(name, lname, email)
        //for(let i = 0; i < localArray.length; i++) {
            localStorage.setItem("name", user.name)
            localStorage.setItem("lname", user.lname)
            localStorage.setItem("email", user.email)
        //}

        //console.log(localArray[0])
        console.log(localStorage)
        CreateListEl()
    })
}
export default pushingToStorage