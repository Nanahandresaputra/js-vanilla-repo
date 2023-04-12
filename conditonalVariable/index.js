// conditional variable
let nilai = 84;
let hasil = nilai >= 70 ? "Aman" : "remedial";
console.log(hasil);

// map
let data = [
  {
    nama: "Nana handre S",
    nip: 090034,
    kelas: "12 TKR A",
    nilai: 80,
  },
  {
    nama: "Mamat kopling",
    nip: 090045,
    kelas: "12 TKR A",
    nilai: 60,
  },
  {
    nama: "James rodriguez",
    nip: 090023,
    kelas: "12 TKR A",
    nilai: 81,
  },
];

let dataNama = data.map((index) => index.nama);
console.log(dataNama);

// filter
let dataLulus = data.filter((index) => index.nilai >= 70);
console.log(dataLulus);
