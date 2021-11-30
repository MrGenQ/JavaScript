

const CreateListEl = () => {
        let ele = document.createElement('li')
        ele.innerText = JSON.stringify(localStorage)
        document.querySelector('ul').appendChild(ele)

}
export default CreateListEl