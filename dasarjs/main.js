// TUGAS KECIL

/*
1.promp untuk mengetahui saldo akhir dari apa yang di inputkan user
2.menentukan hari dari tanggal yang ada saat ini di laptop kita
**/

// tugas 1

let saldoAwal = 9000;
let saldoTambahan = 6500;
const saldoAkhir = saldoAwal + saldoTambahan;

alert(
  `saldo awal saya Rp${saldoAwal} sedangkan saya memiliki saldo tambahan sebesar Rp${saldoTambahan} jadi total saldo saya adalah Rp${saldoAkhir}`
);

// tugas 1 selesai

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
const hari = new Date().getDay();

let hariIni = namaHari[hari];

console.log(hariIni);
