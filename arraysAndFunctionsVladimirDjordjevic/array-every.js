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
//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every((value) => {
  return value.eye_color === "blue";
});
console.log(blueEyes);
//2. Does every character have mass more than 40?
const mass = characters.every((value) => {
  return value.mass > 40;
});
console.log(mass);
//3. Is every character shorter than 200?
const short = characters.every((value) => {
  return value.height < 200;
});
console.log(short);
//4. Is every character male?
const male = characters.every((value) => {
  return value.gender === "male";
});
console.log(male);
