var player = "kertas";

var com = Math.floor(Math.random() * 9);
if (com <= 3) {
  com = "batu";
}
if (com > 3 && com <= 6) {
  com = "kertas";
}
if (com > 6 && com <= 9) {
  com = "gunting";
}

var hasil = "";

if (player == com) {
  hasil = "seri";
} else if (player == "kertas") {
  hasil = com == "batu" ? "menang" : "kalah";
} else if (player == "gunting") {
  hasil = com == "kertas" ? "menang" : "kalah";
} else if (player == "batu") {
  hasil = com == "gunting" ? "menang" : "kalah";
} else if (player != ["kertas", "gunting", "batu"]) {
  hasil = "salah";
}

console.log(hasil);
