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
    eye_color: "",
    gender: "male",
  },
];

//***REDUCE***
//1. Get total mass of all characters
const allMass = characters.map(function (value) {
  return value.mass;
});
const totalMass = allMass.reduce(function (total, value) {
  return total + value;
});
console.log(totalMass);
//2. Get total height of all characters
const allHeight = characters.map((value) => {
  return value.height;
});
console.log(allHeight);
const totalHeight = allHeight.reduce(function (total, value) {
  return total + value;
});
console.log(totalHeight);

//3. Get total number of characters by eye color

let charactersByEyes = characters.map((value) => {
  let counter = 0;
  if (value.eye_color != null) {
    counter++;
  }

  return counter;
});
console.log(charactersByEyes);
const numberEyeClolor = charactersByEyes.reduce((total, value) => {
  return total + value;
});
console.log(numberEyeClolor);

//4. Get total number of characters in all the character names
const charactersInnames = characters.map(function (value) {
  let value2 = value.name.replaceAll(" ", "");
  return value2.length;
});
console.log(charactersInnames);
const totalCharactersInNames = charactersInnames.reduce((total, value) => {
  return total + value;
});
console.log(totalCharactersInNames);
