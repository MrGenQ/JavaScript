const ajaxService = (term, searchEngine)=>{ // ajax function for getting data from omdbapi.com
    const url = "https://www.omdbapi.com/";
    const key = "c9d4de65";
    return fetch(`${url}${searchEngine}${term}&apikey=${key}`)
    .then(response => response.json())

}
export default ajaxService