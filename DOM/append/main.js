document.title = "ABDUL GANTENG";
const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = "Saya Sedang Belajar";

const myName = document.createElement("h6");
myName.innerHTML = "Hai, Nama Saya Sajid Abdul Fatah";

const yourName = document.createElement("u");
yourName.innerHTML = "Bocil Windah";

const myHome = document.createElement("p");
myHome.innerHTML = "<marquee>Colomadu</marquee>";

const myHobby = document.createElement("p");
myHobby.innerHTML = "<marquee>MAEN GAME EMEL</marquee>";

body.append(h1);
body.append(myName);
body.append(yourName);
body.append(myHome);
body.append(myHobby);
