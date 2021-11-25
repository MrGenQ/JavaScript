import ajaxService from "./scss/ajaxService";
import storage from "./storage";
import output from "./output";
const searchCode = () => {
    let sto = []
    let is = true
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(() => console.log(searchResponse.data[0]))
            .then(()=> {
                if(searchResponse.total === 1){
                    document.querySelector('.result').value=searchResponse.data[0].post_code
                    storage(searchResponse.data[0].post_code, sto)
                }else{
                    document.querySelector('.result').value='Neteisinga adresas'
                }
            })
            .then(() => {
                output(is)
                is = false
            })
            .then(() => {
                console.log(document.querySelector('.storage'))
                document.querySelector('.storage input').addEventListener('click', (event)=>{
                    localStorage.clear()
                    sto = []
                    output(is)
                })
            })
    })
}
export default searchCode

//Savanorių pr. 12, Vilnius
//laisvės al. 12, Kaunas