
const CreateListEl = () => {           //creates li element with localStorages information
        let ele = document.createElement('li')
        ele.innerText = localStorage.getItem('name') + " " + localStorage.getItem('lname') + " " + localStorage.getItem('email')
        document.querySelector('ul').appendChild(ele)

}
export default CreateListEl