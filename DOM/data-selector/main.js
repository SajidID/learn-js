document.title = "sajid abdul";
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const defaultText = "Submit Data 1";
btn1.textContent = defaultText;

const defaultText2 = "Submit Data 2";
btn2.textContent = defaultText2;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.backgroundColor = "cyan";
btn1.style.borderRadius = "10px";

btn2.style.border = "none";
btn2.style.padding = "8px";
btn2.style.fontSize = "24px";
btn2.style.backgroundColor = "gold";
btn2.style.borderRadius = "10px";

// BAGIAN TOMBOL SUBMIT 1

function changeColor() {
  console.log("data 1 masuk");
  btn1.style.background = "grey";
  const newText = document.createElement("p");
  newText.textContent = "Terimakasih telah submit 1";
  body.append(newText);
}

function changeText() {
  console.log("ubah text");
  btn1.textContent = "tekan untuk submit 1";
}

function oriText() {
  btn1.textContent = defaultText;
}

// AKHIR TOMBOL SUBMIT 1

// BAGIAN TOMBOL SUBMIT 2

// Fungsi untuk menangani mouse masuk
function handleMouseEnter(message) {
  const output = document.getElementById("outputText");
  output.innerText = message;
  output.style.color = "black"; // Warna teks saat mouse masuk
}

// Fungsi untuk menangani mouse keluar
function handleMouseLeave(color) {
  const output = document.getElementById("outputText");
  output.style.color = color; // Ubah warna teks saat mouse keluar
}

// AKHIR TOMBOL SUBMIT 2
