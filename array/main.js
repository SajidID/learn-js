const datas = [
  {
    name: "sajid",
    stack: "programmer fullstack",
    age: "16",
  },
  {
    name: "wahyu",
    stack: "pro player valorant",
    age: "20",
  },
  {
    name: "deny",
    stack: "gamer terkenal",
    age: "34",
  },
  {
    name: "fachrul",
    stack: "proplayer minecraft",
    age: "15",
  },
  {
    name: "luhung",
    stack: "exp",
    age: "11",
  },
];

datas
  .sort((a, b) => b.age - a.age)
  .filter((x) => x.age > 16)
  .map((values) => console.log(values));
