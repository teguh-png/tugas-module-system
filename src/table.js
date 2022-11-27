class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += 
        `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += 
        `<tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["NIM","Nama Mahasiswa", "Email", "Alamat"],
    data: [
      ["123","Teguh Firmansyah", "teguh.firmansyah@gmail.com","Makassar"],
      ["124","Muhammad Adam", "m.adam.gmail.com","Makassar"],
      ["125","Andika Saputra", "andika@gmail.com","Makassar"],
      ["126","Budi","budi@gmail.com","Palu"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);

  export {table};