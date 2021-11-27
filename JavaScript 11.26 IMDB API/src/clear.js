const clear = () =>{    //function to clear movie search results
    let clearing = document.createElement('button')
    clearing.innerHTML = "Reset"
    clearing.className = "clear"
    document.querySelector(".forms").appendChild(clearing)
    document.querySelector(".clear").addEventListener('click', ()=>{
        document.querySelector(".list-group").innerHTML = ""
        document.querySelector(".movie").value = ""
        document.querySelector(".imdb_id").value = ""
    })
    
}
export default clear