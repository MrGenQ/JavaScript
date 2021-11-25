const form = () =>{
    return `
    <div class="row g-3">
        <div class="col">
            <input type="text" class="form-control term" placeholder="Iveskite adresa" aria-label="Adresas">
        </div>
        <div class="col">
            <input type="text" class="form-control result" aria-label="Adresas" readonly>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Search</button>
    </div>
    `
}
export default form