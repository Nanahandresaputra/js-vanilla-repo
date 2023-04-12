// mahasiswa
var nama = "Nana handre saputra";
var nim = 2205100114;
var hasil = "";
var matkul = "Daspro";
// nilai
var tugas1 = 80;
var tugas2 = 91;
var tugas3 = 84;
var absensi = 90;
var uts = 78;
var uas = 81;
var totalNilai = tugas1 + tugas2 + tugas3 + absensi + uts + uas;
var jumlahNilai = 6;
var rataRataNilai = totalNilai / jumlahNilai;
// logic mengkonversikan nilai angka ke huruf
if (rataRataNilai >= 90) {
  hasil = "A";
}
if (rataRataNilai >= 80 && rataRataNilai <= 89) {
  hasil = "B";
}
if (rataRataNilai >= 70 && rataRataNilai <= 79) {
  hasil = "C";
}
if (rataRataNilai >= 60 && rataRataNilai <= 69) {
  hasil = "D";
}
if (rataRataNilai < 60) {
  hasil = "E";
}

console.log({
  Nama: nama,
  Nim: nim,
  Matkul: matkul,
  Grade: hasil,
});
