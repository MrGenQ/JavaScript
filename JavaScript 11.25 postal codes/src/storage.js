const storage = (data, sto) =>{
    console.log(data)

    sto.push(data)
    localStorage.setItem("post_code", sto)

}
export default storage