const form = () =>{
    return `
    <div class="row">
        <div class="col-lg-6">
            <input type="text" class="form-control movie" placeholder="Movie" aria-label="Movie">
        </div>
        <div class="col-lg-4">
            <input type="number"  min="1" max="10" step="0.1" list=tickmarks class="form-control rating" placeholder="Rating">
            <datalist id="tickmarks">
            <option value="1" label="1">1</option>
            <option value="2" label="2">2</option>
            <option value="3" label="3">3</option>
            <option value="4" label="4">4</option>
            <option value="5" label="5">5</option>
            <option value="6" label="6">6</option>
            <option value="7" label="7">7</option>
            <option value="8" label="8">8</option>
            <option value="9" label="9">9</option>
            <option value="10" label="10">10</option>
        </datalist>
        </div class="col-lg-2">
        <button type="submit" class="btn btn-primary mb-2 img"><i class="fas fa-search"></i></button>
        
    </div>
    `
}
export default form
