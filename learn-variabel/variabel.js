// // menggunakan var
// var nama = "Sajid Abdul Fatah";
// console.log(nama);

// //menggunakan const
// const artiNama = "Hamba yang bersujud kepada Allah dan yang maha pembuka";
// console.log(artiNama);

// //menggunakan let
// let sekolah = "SMK MUTUHARJO";
// console.log(sekolah);

//menggunakan var dan let variabel bisa diubah tetapi menggunakan const tidak bisa

// //nama siswa
// let namaSiswa = "Ibnu";

// //asal sekolah
// const asalSekolah = "SMANSA";

// //kelas
// let kelas = "XII IPA 03";

// //hasil nya
// console.log("Siswa saat belum lulus");
// console.log("Nama :", namaSiswa);
// console.log("Asal Sekolah :", asalSekolah);
// console.log("Kelas :", kelas);

// // //hasil ketika lulus
// console.log("Siswa saat sudah lulus");
// console.log("Nama :", namaSiswa);
// console.log("Asal Sekolah :", asalSekolah);
// kelas = "Lulus";
// console.log("Kelas :", kelas);

// Deklarasi variabel
// const targetNumber = 9; //angka yang harus ditebak(tetap)
// let userName = prompt("What is your name?"); //Nama pengguna
// var guess; //variabel untuk menyimpan tebakan pengguna

// //menampilkan pesan selamat datang
// alert(`selamat datang, ${userName}! Tebak angka dari 1 sampai 10.`);

// //mulai permainan tebak angka
// while (true) {
//   //meminta pengguna untuk memasukkan tebakannya
//   guess = parseInt(prompt("Masukkan angka tebakanmu:"), 10);

//   //cek apakah tebakan benar
//   if (guess === targetNumber) {
//     alert("ANJAYYYY BENER CAHHH MANTAP CUYYY GASKEN CUUKK");
//     break; //keluar dari loop jika tebakan benar
//   } else if (guess < targetNumber) {
//     alert("Angka terlalu kecil, Coba lagi!");
//   } else if (guess > targetNumber) {
//     alert("Angka terlalu besar, Silahkan coba lagi!");
//   } else {
//     alert("Angka tidak valid!");
//   }
// }

//learnVariabel

let namaSaya = "sajid";
const umurSaya = "17";
var alamatSaya = "Colomadu";

alert(
  `Hai nama saya ${namaSaya} umur saya ${umurSaya} alamat saya ${alamatSaya}`
);

console.log(`nama saya ${namaSaya}`);
console.log("umur saya", umurSaya);
console.log("alamat saya", alamatSaya);
