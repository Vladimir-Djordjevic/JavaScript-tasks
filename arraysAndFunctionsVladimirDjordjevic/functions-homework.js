/*numberToString(Number)
Converts a number a string.
Parameters
n: number
Returns: string, the number as a string
*/

function numberToString(number) {
  return number + "";
}
console.log(typeof numberToString(10 + 2));

// increase(n)
// Adds one to a given number
// Parameters
// n: number
// Returns: number
function increase(n) {
  return ++n;
}
console.log(increase(7));

// decrease(n)
// Subtracts one from a given number
// Parameters
// n: number
// Returns: number
function decrease(n) {
  return --n;
}
console.log(decrease(7));

// add(x, y)
// Adds two numbers.
// Parameters
// x: number
// y: number
// Returns: number, the sum

function add(x, y) {
  return x + y;
}
console.log(add(5, 6));

// subtract(x, y)
// Subtracts the second number from the first.
// Parameters
// x: number
// y: number
// Returns: number, the difference

function substract(x, y) {
  return x - y;
}
console.log(substract(5, 6));

// multiply(x, y)
// Multiplies two numbers.
// Parameters
// x: number
// y: number
// Returns: number, the product
function multiply(x, y) {
  return `number x : ${x} number y: ${y} Product: ${x * y} `;
}
console.log(multiply(5, 6));

//   divide(x, y)
// Divides the first number by the second.
// Parameters
// x: number
// y: number
// Returns: number, the quotient

function divide(x, y) {
  return `number x : ${x} number y: ${y} quotient: ${x / y} `;
}
console.log(divide(12, 6));

//   square(x)
// Multiplies a number by itself.
// Parameters
// x,: number, number to be squared
// Returns: number, squared
function square(x, y) {
  return `number x : ${x} squared: ${Math.pow(x, y)} `;
}
console.log(square(8, 2));

// calculate(operation, x, y)
// Prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4". Returns the result.
// Parameters
// operation: string, "add", "subtract", "multiply", or "divide"
// x: number
// y: number
// Returns: number, the result
function calculate(operation, x, y) {
  switch (operation) {
    case "string":
      return numberToString(x, y);

    case "add":
      return add(x, y);

    case "substract":
      return substract(x, y);

    case "multiply":
      return multiply(x, y);
    case "divide":
      return divide(x, y);
    default:
      console.log("Choose valid operation");
      break;
  }
}

console.log(calculate("multiply", 10, 5));

// isGreaterThan(a, b)
// Returns true if a is greater than b
// Parameters
// a: number
// b: number
// Returns: boolean, a is larger than b

function isGreaterThan(a, b) {
  if (a > b) {
    return `${true}, a is larger then b `;
  } else {
    return `${false}, a is larger then b`;
  }
}
console.log(isGreaterThan(5, 6));

// isLessThan(a, b)
// Returns true if a is less than b
// Parameters
// a: number
// b: number
// Returns: boolean, a is smaller than b

function isLessThan(a, b) {
  if (a < b) {
    return `${true}, a is smaller then b `;
  } else {
    return `${false}, a is not smaller then b `;
  }
}
console.log(isLessThan(3, 6));

// areEqual(a, b)
// Returns true if a and b are equal
// Parameters
// a: number
// b: number
// Returns: boolean, the numbers are equal

function areEqual(a, b) {
  if (a === b) {
    return `${true}, the numbers are equal `;
  } else {
    return `${false}, the numbers are not equal `;
  }
}
console.log(areEqual(5, 5));

//   minimum(x, y)
// Returns the smallest value of two numbers.
// Parameters
// a: number
// b: number
// Returns: number, the smallest number

function minimum(x, y) {
  if (x < y) {
    return `the smallest number is x: ${x}`;
  } else {
    return `the smallest number is y: ${y}`;
  }
}
console.log(minimum(7, 8));

// maximum(x, y)
// Returns the largest value of two numbers.
// Parameters
// a: number
// b: number
// Returns: number, the largest number

function maximum(x, y) {
  if (x > y) {
    return `the largest number is x: ${x}`;
  } else {
    return `the largest number is y: ${y}`;
  }
}
console.log(maximum(9, 8));

// isEven(n)
// Returns true if n is even.
// Parameters
// n: number
// Returns: boolean, the number is even

function isEven(n) {
  if (n % 2 == 0) {
    return ` ${true}, the number is even`;
  } else {
    return `${false}, the number is not even`;
  }
}
console.log(isEven(6));

// isOdd(n)
// Returns true if n is odd.
// Parameters
// n: number
// Returns: boolean, the number is odd
function isOdd(n) {
  if (n % 2 == 1) {
    return `${true}, the number is odd`;
  } else {
    return `${false}, the number is not odd`;
  }
}
console.log(isOdd(7));

// letterGrade(score, total)
// Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%
// Parameters
// score: number
// total: number, maximum possible score
// Returns: string, the score represented as a letter grade

function letterGrade(score, total) {
  let procent = (score / total) * 100;
  console.log(procent);
  if (procent >= 90 && procent <= 100) {
    return "A";
  } else if (procent >= 80 && procent <= 89) {
    return "B";
  } else if (procent >= 70 && procent <= 79) {
    return "C";
  } else if (procent >= 60 && procent <= 69) {
    return "D";
  } else if (procent >= 0 && procent <= 59) {
    return "F";
  } else {
    return "Enter a correct grade";
  }
}
let grade = letterGrade(69, 100);

console.log("Your grade is: " + grade);

// combine(word1, word2)
// Joins two strings with a space.
// Parameters
// word1: string
// word2: string
// Returns: string, joined the words joined with a space

function combine(word1, word2) {
  return `${word1} ${word2}`;
}
console.log(combine("home", "work"));

// createCircle(radius)
// Returns a circle object with the properties circumferance and area.
// Use Math.PI for the value π.
// Parameters
// radius: number
// Returns: object, circle

function createCircle(radius) {
  const circle = new Object();
  circle.circumferance = 2 * Math.PI * radius;
  circle.area = Math.PI * Math.pow(radius, 2);
  return circle;
}
console.log(createCircle(8));
