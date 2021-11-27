const form = () =>{ //funtion of forms innerHTML
    return `
    <div class="row">
        <div class="col-6">
            <input type="text" class="form-control movie" placeholder="Movie Title" aria-label="Movie">
        </div>
        <div class="col-4">
        <input type="text" class="form-control imdb_id" placeholder="IMDB ID" aria-label="ID">
        </div>
        <div class="col-2">
        <button type="submit" class="btn btn-primary img"><i class="fas fa-search"></i></button>
        
    </div>
    `
}
export default form
