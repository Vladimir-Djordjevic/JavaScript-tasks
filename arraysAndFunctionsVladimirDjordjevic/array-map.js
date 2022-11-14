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
//***MAP***
//1. Get array of all names
function name(array) {
  return array.name;
}
const arrayNames = characters.map(name);
console.log(arrayNames);

//2. Get array of all heights
function height(array) {
  return array.height;
}
const arrayHeights = characters.map(height);
console.log(arrayHeights);

//3. Get array of objects with just name and height properties
function nameAndHeight(value) {
  const obj = new Object();
  obj.name = value.name;
  obj.height = value.height;
  return obj;
}
const arrayHeightsAndName = characters.map(nameAndHeight);
console.log(arrayHeightsAndName);

//4. Get array of all first names
function firstName(array) {
  const firstName = array.name.split(" ");
  return firstName[0];
}
const arrayFirstNames = characters.map(firstName);
console.log(arrayFirstNames);
