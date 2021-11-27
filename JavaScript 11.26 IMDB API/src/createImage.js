const createImage = (url) => {      //function for image creation upon completing search request
    let img = document.createElement("img");
    img.setAttribute('src', url);
    img.setAttribute('alt', 'poster');
    img.setAttribute('width', 350)
    img.setAttribute('height', 500)
    img.setAttribute('onerror', "src='https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'")
    document.querySelector('.result').appendChild(img);
}
export default createImage