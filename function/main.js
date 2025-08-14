// or = || , and &&
// function operator(a, b) {
//   let or = `${a} || ${b} = ${a || b}`
//   let and = `${a} && ${b} = ${a && b}`
//   console.log(or)
//   console.log(and)
// } 

// operator(true, false)
// operator(true, true)

// const nama = "Sajid"
// const umur = 17
// const testSim = false
// const nyogok = true

// function cetakSim(umur, testStatus) {
//   console.log(`sim diberikan status: ${((umur >= 17) && testStatus) ? `kepada ${nama}` : "sim belum berhak diberikan"}`)
// }

// cetakSim(umur, testSim)

// function cetakSimIlegal(umur, testStatus) {
//   console.log(`sim diberikan status: ${(((umur >= 17) && testStatus) || nyogok) ? `kepada ${nama}` : "sim belum berhak diberikan" }`)
// }

// cetakSimIlegal(umur, testSim)

function tambah(angka1, angka2) {
  console.log("angka 1 = ", angka1)
  if (angka2 == 2) {
    console.log("angka 2 = 2")
  }
  return angka1 + angka2
}

console.log(tambah(1, 2))


// //soal 1 menampilkan output Hallo, Dunia!
// function sapa() {
//   return "Hello, Dunia";
// }
// console.log(sapa());

// //soal 2 penjumlahan
// function penjumlahan(number1, number2) {
//   return `${number1} + ${number2} = ${number1 + number2}`;
// }
// console.log(penjumlahan(1, 2))

// const kelipatan = (number) => {
//   return number * number;
// };
// console.log(kelipatan(100));

// const sapa = (nama) => {
//   return "Hallo, " + nama;
// };
// console.log(sapa("Namaku Aris!"));

// const hewan = ["kucing", "sapi", "kelinci"];
// console.log(hewan[1]);

// let angka = [1, 90, 3, 4];
// angka.push(10,12);
// console.log(angka.sort());

// let warna = [{
//   nama : "sajid",
//   usia: 15,
// }];
// warna = 1;
// console.log(warna);

// let buah = ["apel", "jeruk", "mangga", "pisang"];
// console.log(buah.length);

// let nama = (namaPlatform) => {
//   return "Halo, " + namaPlatform + "! Selamat belajar Javascript!";
// };
// console.log(nama("ChatGPT"));

// function tambahAngka(angkapertama, angkakedua) {
//   return angkapertama + angkakedua;
// }
// console.log(tambahAngka(5, 3));

// function cekGanjilGenap(angka) {
//   if (angka % 2 === 0) {
//     return "Genap"
//   } else {
//     return "Ganjil"
//   }
// }
// console.log(cekGanjilGenap(6))
// console.log(` 4 % 2 =`, 4 % 2)
// function modulus(a, b) {
//   console.log(` ${a} % ${b} = ${a % b}`)
// }
// modulus(8, 4)

// function tes(a, b) {
//   return a || b && false;
// }
// console.log(tes(false, true));

// function kebenaran(a, b) {
//   console.log(`${a} || ${b} =`, a || b)
//   console.log(`${a} && ${b} =`, a && b)
// }

// kebenaran("apel", "mangga")
