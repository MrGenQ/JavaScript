const createCustom = (txt, response) => {   //function for Text creation upon completing search request
    let ele = document.createElement('div')
    ele.innerHTML = txt
    ele.innerHTML += document.querySelector('.result').value=response
    ele.style.fontSize = "30px";
    document.querySelector(".result").appendChild(ele);
}
export default createCustom