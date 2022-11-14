const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***SOME***
//1. Is there at least one male character?
const male = characters.some(function (value) {
  return value.gender == "male";
});
console.log(male);

//2. Is there at least one character with blue eyes?
const blueEyes = characters.some(function (value) {
  return value.eye_color == "blue";
});
console.log(blueEyes);

//3. Is there at least one character taller than 210?
const taller = characters.some(function (value) {
  return value.height > 210;
});
console.log(taller);

//4. Is there at least one character that has mass less than 50?
const mass = characters.some((value) => {
  return value.mass < 50;
});
console.log(mass);
