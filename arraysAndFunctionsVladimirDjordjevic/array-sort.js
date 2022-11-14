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

//***SORT***
//1. Sort by mass
const mass = characters.sort((value1, value2) => {
  return value1.mass - value2.mass;
});
console.log(mass);
//2. Sort by height
const height = characters.sort(function (value1, value2) {
  return value2.height - value1.height;
});
console.log(height);
//3. Sort by name
const nameSort = characters.sort(function (value1, value2) {
  return value1.name > value2.name ? 1 : -1;
});
console.log(nameSort);
//4. Sort by gender
const gender = characters.sort(function (value1) {
  if (value1.gender == "male") {
    return -1;
  } else {
    return 1;
  }
});
console.log(gender);
