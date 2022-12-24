import { Module } from "./Module.js";


const Table = new Module({
    columns: ["NIM","Nama Mahasiswa", "Email", "Alamat"],
    data: [
      ["123","Teguh Firmansyah", "teguh.firmansyah@gmail.com","Makassar"],
      ["124","Muhammad Adam", "m.adam.gmail.com","Makassar"],
      ["125","Andika Saputra", "andika@gmail.com","Makassar"],
      ["126","Budi","budi@gmail.com","Palu"]
    ]
  });
  const app = document.getElementById("app");
  Table.render(app);

  export {Table};