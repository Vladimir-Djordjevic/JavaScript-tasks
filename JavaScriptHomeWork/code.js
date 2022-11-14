// Strings:
// 1. Given the user input make all letters uppersase and log it to console.
// // 2. Given the user inptu make all letters in lowercase format.
// let input = prompt("Give us some input");
// console.log(input.toUpperCase());
// console.log(input.toLowerCase());

// 3.  Given the user input make every first letter of new word capitilized.
// let textInput = prompt("hello");
// const wordsArray = textInput.split(" ");
// for (let i = 0; i < wordsArray.length; i++) {
//   const capitalizedString =
//     wordsArray[i].slice(0, 1).toUpperCase() + wordsArray[i].slice(1);
//   console.log(capitalizedString);
// }

// 4  Given the user input as sentence longer then 5 words, find longest word in sentence.
// let arr = [];
// while (arr.length < 5) {
//   let name = prompt("Input more then 5 words");
//   arr = name.split(" ");
// }
// let min = -Infinity;
// let maxWord;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > min) {
//     min = arr[i].length;
//     maxWord = arr[i];
//   }
// }
// console.log(min);
// console.log(maxWord);

// 5 Given the user input reverse it and log it to console.
// const input = prompt("Input some text:");
// const arrayInput = input.split("").reverse();
// const reversedInput = arrayInput.join("");
// console.log(reversedInput);

// Conditional branching

/* 1.)1.Using if..else, write the code which gets a number via prompt and then shows in alert: 
•	1, if the value is greater than zero, 
•	-1, if less than zero, 
•	0, if equals zero. 
In this task we assume that the input is always a number. 
*/
// const input = prompt("Input some number");
// if (input > 0) {
//   alert(1);
// } else if (input < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

/*2. 1.Using if..else, write the code which gets a number via prompt and then shows in alert: 
•	1-3, if the value is greater than zero but less then 3 
•	3-5, if value is greater then 3 but less then 5 
•	5-7 if value is qreater then 5  */
// const input = prompt("Input some number");
// if (input > 0 && input < 3) {
//   alert("1-3");
// } else if (input > 3 && input < 5) {
//   alert("3-5");
// } else if (input > 5) {
//   alert("5-7");
// } else {
//   alert("some-some");
// }

/*3 Rewrite a code using tenerary operators 
let result; 
let a = 1; 
let b = 2; 
 
if (a + b < 5) { 
  result = 'Below'; 
} else { 
  result = 'Over'; 
} */

// let result;
// let a = 1;
// let b = 2;
// a + b < 5 ? (result = "Below") : (result = "Over");

/*4. Want to find out how old you'll be? Calculate it!
•	Store your birth year in a variable.
•	Store a future year in a variable example 2050
•	Calculate your 2 possible ages for that year based on the stored values.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.*/

// const birthYear = 1984;
// const future = 2050;
// document.getElementById("para").innerHTML = `I will be either ${
//   future - birthYear
// }  or dead in ${future}`;

/*5.Give user the info!
•	Write a javascript program that will ask user 3 questions in order
•	What is your age?
•	What is your name?
•	what do you do for a living?
•	After the user has given all the answers, alert the user that Username is {name answer from your user} age is {age answer from user} and he is doing {work answer from user)
*/

// const age = prompt("What is your age?");
// const name = prompt("What is your name?");
// const job = prompt("What do you do for a living?");
// alert("Username is " + name + " age is " + age + " and he is doing " + job);

// 1. Log in console the numbers from 0 to 15 using for loop
// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// 2. Print the numbers from 12 to 24 using while loop
// let i = 12;
// while (i <= 24) {
//   console.log(i);
//   i++;
// }

// 3. Log in console the ODD numbers from numDaysInMonth array
// const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// for (let i = 0; i < numDaysInMonth.length; i++) {
//   if (numDaysInMonth[i] % 2 != 0) {
//     console.log(numDaysInMonth[i]);
//   }
// }

// 4. Log in console  the EVEN numbers from 10 to -20
// for (let i = 10; i >= -20; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 5. Log in console all the elements of the daysInWeek   array
// const daysInWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// for (const days of daysInWeek) {
//   console.log(days);
// }

// 6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console
// const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let sum = 0;
// for (let i = 0; i < numDaysInMonth.length; i++) {
//   sum += numDaysInMonth[i];
// }
// console.log(sum);

// 7. Find in super hero object list s how many super heroes have power level higher than  90
// const superheroes = [
//   {
//     name: "Bruce Wayne",
//     alias: "Batman",
//     powerLevel: 50,
//   },
//   {
//     name: "Wade Wilson",
//     alias: "Deadpool",
//     powerLevel: 90,
//   },
//   {
//     name: "Peter Parker",
//     alias: "Spiderman",
//     powerLevel: 70,
//   },
//   {
//     name: "Kristin Wells",
//     alias: "Superwoman",
//     powerLevel: 99,
//   },
//   {
//     name: "Barry Allen",
//     alias: "The Flash",
//     powerLevel: 80,
//   },
//   {
//     name: "Diana Prince",
//     alias: "Wonder Woman",
//     powerLevel: 90,
//   },
//   {
//     name: "Ororo Munroe",
//     alias: "Storm",
//     powerLevel: 85,
//   },
//   {
//     name: "Helen Parr",
//     alias: "Elastigirl",
//     powerLevel: 70,
//   },
// ];
// let counter = 0;
// for (hero in superheroes) {
//   if (superheroes[hero].powerLevel > 90) {
//     counter++;
//   }
// }
// console.log(
//   "The count of super heroes that have power level higher than 90 is  " +
//     counter
// );

// 8. Write javascript program to check what day of the week is today.
// const date = new Date();
// const daysInWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = daysInWeek[date.getDay()];
// console.log(day);

// 7. Find and log in console how many letters “e” are in the next quote:
// let quote =
//   "There are times in life when people must know when not to let go. Balloons are designed to teach small children this.";
// console.log(
//   "There is : " + quote.match(/e/gi).length + ' letters "e" in the quote'
// );
