import out from "./out";

const output = (is) =>{
    if(is){
        let Element = document.createElement('div');
        Element.innerHTML = out();
        document.querySelector(".sto").appendChild(Element);
    }
    let ele = document.querySelector('.storage div');
    ele.innerHTML = localStorage.getItem("post_code")

    //document.querySelector(".storage div").appendChild(ele)
}
export default output