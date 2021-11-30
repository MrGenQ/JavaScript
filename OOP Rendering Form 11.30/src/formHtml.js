const formHtml = () =>{
    return `
        <div class="row">
            <div class="col-3">
                <input type="text" class="name" placeholder="Name" aria-label="Name">
            </div>
            <div class="col-3">
            <input type="text" class="lname" placeholder="Last Name" aria-label="Last Name">
            </div>
            <div class="col-3">
            <input type="text" class="email" placeholder="Email" aria-label="Email">
            </div>        
            <div class="col-3">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <ul class="result"></ul>
        </div>
    `
}
export default formHtml