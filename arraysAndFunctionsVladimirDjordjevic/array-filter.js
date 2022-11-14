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
//***FILTER***
//1. Get characters with mass greater than 100
const greaterThanHundred = characters.filter(function (value) {
  return value.mass > 100;
});
console.log(greaterThanHundred);

//2. Get characters with height less than 200
const lessTwoHundredHeight = characters.filter(function (value) {
  return value.height < 200;
});
console.log(lessTwoHundredHeight);

//3. Get all male characters
const maleCharacters = characters.filter(function (value) {
  return value.gender === "male";
});
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(function (value) {
  return value.gender === "female";
});
console.log(femaleCharacters);
