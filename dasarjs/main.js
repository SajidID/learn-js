// TUGAS KECIL

/*
1.promp untuk mengetahui saldo akhir dari apa yang di inputkan user
2.menentukan hari dari tanggal yang ada saat ini di laptop kita
**/

// tugas 1
const saldoAwal = 10000;
const saldoAkhir = 100000;
const saldo = saldoAwal + saldoAkhir;
console.log(saldo);


// tugas 2
const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const hariIni = new Date().getDay();
let hari = namaHari[hariIni];
console.log(hari);
