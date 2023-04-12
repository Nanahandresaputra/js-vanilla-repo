// class tabel {
//   constructor(init) {this.init = init;
//   }

//   createheader(tableHeader) {
//       let open = '<thead class="table table-dark "><tr>';
//       let close = '</thead></tr>';
//       tableHeader.forEach((d) => { open += `<th>${d}</th>`
//          });
//       return open + close;
//   }
//   cretebody(data) {
//     let open = '<tbody>';
//     let close = '</tbody>';
//     data.forEach((d) => {open +=`
//       <tr>
//         <td>${d[0]}</td>
//         <td>${d[1]}</td>
//         <td>${d[2]}</td>
//       </tr>`
//       });
//     return open + close;
    
//   }
// render (element) { let grid ='<table class="table table-hover mt-5 table-bordered">' + this.createheader(this.init.columns) + this.cretebody(this.init.data) + '</table>';
//   element.innerHTML= grid;}
  
// }
  


// let grid = new tabel({ 
//   columns: ['Name', 'Email', 'phone number'],
//   data: [
//     ['John', 'john@example.com', '2323234'],
//     ['Mike', 'mike@gmail.com', '343444545'],
//     ['Nana', 'nana@gmail.com', '5454544545']
//   ] 
// })
// export {grid}
class tabel {
  constructor(init) {
    this.init = init;
  }

  createheader(header) {
    let open = '<thead class="table-dark"><tr>';
    let close = "</thead></tr>";
    header.forEach((d) => {
      open += `<th>${d}</th>`;
    });
    return open + close;
  }
  cretebody(data) {
    let open = "<tbody>";
    let close = "</tbody>";
    data.forEach((d) => {
      open += `
      <tr>
        <td>${d[0]}</td>
        <td>${d[1]}</td>
        <td>${d[2]}</td>
      </tr>`;
    });
    return open + close;
  }
  render(element) {
    let grid =
      '<table class="table table-hover table-bordered mt-5">' +
      this.createheader(this.init.columns) +
      this.cretebody(this.init.data) +
      "</table>";
    element.innerHTML = grid;
  }
}

const grid = new tabel({
  columns: ["Name", "Email", "phone number"],
  data: [
    ["Nana", "gloryglory@email.com", "2323234"],
    ["Handre", "manchester@gmail.com", "343444545"],
    ["Saputra", "united@gmail.com", "121212"]
  ]
});
export { grid };
