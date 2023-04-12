// array
let listSiswa = ["Nana", "Ucok", "Asep"];
let [siswa1, siswa2, siswa3] = listSiswa;
console.log(siswa1, siswa2, siswa3);

// object
let siswa = {
  nama: "Nana handre S",
  nip: "00900032",
  kelas: "12 TKR A",
  alamat: "Majalengka",
};

let { nama, nip, kelas, alamat } = siswa;
console.log(nama, nip, kelas, alamat);

// function, alias, defaultValue

function daftarSiswa({ nama, nip: nomor, kelas, alamat, sekolah = "SMK BISA" }) {
  console.log(nama, nomor, kelas, alamat, sekolah);
}

daftarSiswa(siswa);
