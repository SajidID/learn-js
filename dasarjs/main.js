// TUGAS KECIL

/*
1.promp untuk mengetahui saldo akhir dari apa yang di inputkan user
2.menentukan hari dari tanggal yang ada saat ini di laptop kita
**/

// tugas 1
const saldoAwal = 9000;
const saldoAkhir = 8000;
console.log(saldoAwal + saldoAkhir);
alert(
  ` saldo awal ${saldoAwal} saldo akhir ${saldoAkhir} hasil akhir ${
    saldoAwal + saldoAkhir
  }`
);

// tugas 2

const namaHari = [
  "hari ini adalah hari Ahad",
  "hari ini adalah hari Senin",
  "hari ini adalah hari Selasa",
  "hari ini adalah hari Rabu",
  "hari ini adalah hari Kamis",
  "hari ini adalah hari Jumat",
  "hari ini adalah hari Sabtu",
];

const hariIni = new Date().getDay();
let hari = namaHari[hariIni];
console.log(hari);
