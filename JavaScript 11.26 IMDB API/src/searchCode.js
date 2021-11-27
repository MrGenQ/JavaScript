import ajaxService from "./ajaxService";
import createCustom from "./createCustom";
import createImage from "./createImage";
const searchCode = () => {   //function for getting specified tada using text submit
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault()
        let searchEngine
        let search
        if(document.querySelector('.movie').value.length !== 0) {
            searchEngine = '?t='
            search = document.querySelector('.movie').value;
        }if(document.querySelector('.imdb_id').value.length !== 0){
            if (document.querySelector('.movie').value.length > 0) {
                window.alert("IMDB ID field has priority over Movie title");
            }
            document.querySelector(".movie").clear
            searchEngine = '?i='
            search = document.querySelector('.imdb_id').value;
        }
        var searchResponse;
        ajaxService(search, searchEngine)
            .then(result => searchResponse = result)
            .then(() => console.log(searchResponse))
            .then(() => {
                let Element = document.createElement('div');
                Element.className = "result"
                document.querySelector(".list-group").appendChild(Element);
                //console.log(document.querySelector(".list-group"))
                
            })
            .then(() => {
                createCustom('Movie Title: ', searchResponse.Title)
                createCustom('IMDB ID: ', searchResponse.imdbID)
                createCustom('IMDB Rating: ', searchResponse.imdbRating)
                createImage(searchResponse.Poster)    
            })
           
    })
}
export default searchCode