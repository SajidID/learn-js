const datas = [
  {
    nama: "Sajid",
    age: 16,
    role: "Front End Dev",
  },
  {
    nama: "Rizky",
    age: 15,
    role: "Foto Grafer",
  },
  {
    nama: "Haikal",
    age: 20,
    role: "UX / UX",
  },
];

datas.sort((a, b) => a.age - b.age).map((values) => console.log(values));
