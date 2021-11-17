function generate_table() {
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
 
    document.querySelector(".button").style.backgroundColor = "#e22d00"
    document.querySelector(".button").style.color = "#ffffff"
    for (let i = 0; i < document.querySelector('.rows').value; i++) {
      let row = document.createElement("tr");
      for (let i = 0; i < document.querySelector('.colum').value; i++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("Man labai patinka JavaScript :)");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }