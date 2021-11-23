const demoStorage = (data) =>{
    //const name = "Giedrė";
    localStorage.setItem('students', JSON.stringify(data))
    //localStorage.removeItem('savedName')
    //console.log(localStorage.getItem('savedName'))
    const students = JSON.parse(localStorage.getItem('students'))
    console.log(students)
}
export default demoStorage