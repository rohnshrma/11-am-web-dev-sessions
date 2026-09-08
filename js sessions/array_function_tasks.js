// ============================================================
// ARRAY + FUNCTION PRACTICE TASKS
// ============================================================
//
// This file is practice for the two things we did today:
//
//   1. array.js     -> arrays and their methods, and the
//                      HIGHER ORDER FUNCTIONS (HOF) we used
//                      on arrays (forEach, map, filter, reduce,
//                      find, findIndex, some, every, sort)
//
//   2. functions.js -> function declaration, function
//                      expression, anonymous function,
//                      arrow function, and CALLBACK functions
//
// The last part mixes BOTH together, because a HOF is really
// just "an array method that takes a function (callback) as
// an argument".
//
// ------------------------------------------------------------
// WHAT IS A HIGHER ORDER FUNCTION (HOF)?
// ------------------------------------------------------------
//
// A higher order function is a function that does at least
// ONE of these:
//
//   - takes another function as an argument (a callback)
//   - returns a function
//
// Array methods like map, filter, reduce are HOFs because
// we pass them a function:
//
//   nums.map(function (n) { return n * 2; });
//   nums.map((n) => n * 2);
//
// ------------------------------------------------------------
// HOW TO USE THIS FILE
// ------------------------------------------------------------
//
//   Read the task, write your solution right under it,
//   then use console.log() to check your output.
//
//   These are TASKS ONLY. No solutions are given.
//
//   Where a task says "use a HOF", do NOT use a plain
//   for / while loop - the whole point is to practice
//   the array method.

// ============================================================
// PART A - ARRAY BASICS (no HOF yet)
// ============================================================
// Methods to practice here:
//   push, pop, unshift, shift, splice, indexOf, includes, slice

// TASK A1:
// Add "grape" and "melon" to the END of this array, then print it.
var fruits = ["apple", "banana", "orange"];

// TASK A2:
// Add "milk" to the START of this array, then print it.
var groceries = ["bread", "eggs", "butter"];

// TASK A3:
// Remove the LAST item of the array and print BOTH
// the removed item and the array after removal.
var stackA = [10, 20, 30, 40];

// TASK A4:
// Remove the FIRST item of the array and print BOTH
// the removed item and the array after removal.
var queueA = ["a", "b", "c", "d"];

// TASK A5:
// Using splice, replace the value 99 (at index 2) with 33.
// Print the array.
var listA = [11, 22, 99, 44, 55];

// TASK A6:
// Using splice, INSERT the value 100 between 2 and 3
// (without removing anything). Print the array.
var listB = [1, 2, 3, 4];

// TASK A7:
// Using splice, REMOVE the middle three items of this array.
// Print the array.
var listC = [5, 6, 7, 8, 9, 10, 11];

// TASK A8:
// Check whether "blue" is in the array.
// Print true or false. (Use includes.)
var colorsA = ["red", "green", "yellow"];

// TASK A9:
// Find the INDEX of "c" in the array and print it.
// Then print the index of "z" (something not in the array).
var charsA = ["a", "b", "c", "d"];

// TASK A10:
// Use slice to make a NEW array containing only the
// first 3 items. Print the new array AND the original
// (the original should be unchanged).
var scoresA = [90, 80, 70, 60, 50, 40];

// ============================================================
// PART B - FUNCTIONS (from functions.js)
// ============================================================

// TASK B1:
// Write a FUNCTION DECLARATION called "greet" that takes a
// name and returns the string "Hello, <name>".
// Call it with your name and print the result.

// TASK B2:
// Write the same greet logic as a FUNCTION EXPRESSION
// (store an anonymous function in a variable called greet2).
// Call it and print the result.

// TASK B3:
// Write the same greet logic as an ARROW FUNCTION
// (one line, short return). Call it and print the result.

// TASK B4:
// Write an arrow function "isEven" that takes a number
// and returns true if it is even, false otherwise.
// Test it with 4 and with 7.

// TASK B5:
// Write a function "rectangleArea" that takes width and height
// and returns the area. Use a multi-line arrow function with { }.

// TASK B6:
// Write a function "applyTwice" that takes a value and a
// function, and calls that function on the value TWICE.
// Example: applyTwice(3, (n) => n + 1)  should return 5.
// (This is a higher order function - it takes a callback.)

// TASK B7:
// Write a function "makeMultiplier" that takes a number "x"
// and RETURNS a new function. The returned function takes "n"
// and returns n * x.
// Example:
//   var triple = makeMultiplier(3);
//   triple(10) -> 30
// (This is a higher order function - it returns a function.)

// TASK B8:
// Write a function "calculate" that takes a, b, and an
// "operation" callback, and returns operation(a, b).
// Call it three times: once for add, once for subtract,
// once for multiply. Print all three results.

// ============================================================
// PART C - forEach
// ============================================================
// forEach runs a callback once for every item.
// It does NOT return a new array. Use it for "do something
// with each item" (like printing).

// TASK C1:
// Use forEach to print every name on its own line.
var namesC = ["asha", "ravi", "meera", "john"];

// TASK C2:
// Use forEach to print each item together with its index,
// like:  "0 -> asha"
var namesC2 = ["asha", "ravi", "meera"];

// TASK C3:
// Use forEach to add up all the numbers into a variable
// "total" declared before the loop. Print total at the end.
var numsC = [5, 10, 15, 20];

// TASK C4:
// Use forEach to build a new array "upper" that contains
// each word in UPPERCASE. Print "upper".
// (Yes, map is better for this - but practice it with forEach
//  and push first, then redo it with map in Part D.)
var wordsC = ["cat", "dog", "bird"];

// ============================================================
// PART D - map
// ============================================================
// map returns a NEW array of the SAME length, where every
// item is the result of the callback.

// TASK D1:
// Use map to create a new array where every number is doubled.
var numsD = [1, 2, 3, 4, 5];

// TASK D2:
// Use map to create a new array of the LENGTHS of each word.
// ["cat", "hello"] -> [3, 5]
var wordsD = ["cat", "hello", "javascript", "hi"];

// TASK D3:
// Use map to turn this array of numbers into an array of
// strings like "Item 1", "Item 2", ...
var idsD = [1, 2, 3, 4];

// TASK D4:
// Use map to create a new array of objects, where each object
// looks like { name: "asha", score: 50 }.
// Give every student the same score of 50 for now.
var studentNamesD = ["asha", "ravi", "meera"];

// TASK D5:
// You have an array of prices. Use map to add 18% tax to each
// price and round to 2 decimals. Print the new array.
var pricesD = [100, 250, 999, 45];

// ============================================================
// PART E - filter
// ============================================================
// filter returns a NEW array containing only the items for
// which the callback returned true.

// TASK E1:
// Use filter to get only the EVEN numbers.
var numsE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TASK E2:
// Use filter to get only the numbers greater than 50.
var numsE2 = [12, 77, 45, 90, 8, 63, 51, 50];

// TASK E3:
// Use filter to get only the words that have MORE than 4 letters.
var wordsE = ["sun", "cloud", "sky", "storm", "ice"];

// TASK E4:
// Use filter to get only the words that START with the letter "a".
var wordsE2 = ["apple", "banana", "avocado", "cherry", "apricot"];

// TASK E5:
// Use filter to REMOVE all the falsy values from this array.
// (falsy: 0, "", null, undefined, false, NaN)
var mixedE = [0, 1, "", "hello", null, 5, undefined, false, 9, NaN];

// ============================================================
// PART F - find and findIndex
// ============================================================
// find     -> returns the FIRST item that matches (or undefined)
// findIndex -> returns the INDEX of the first match (or -1)

// TASK F1:
// Use find to get the first number that is greater than 100.
var numsF = [20, 55, 80, 130, 45, 200];

// TASK F2:
// Use findIndex to get the index of the first negative number.
var numsF2 = [4, 8, 15, -16, 23, -42];

// TASK F3:
// Use find to get the student object whose name is "ravi".
var studentsF = [
  { name: "asha", age: 20 },
  { name: "ravi", age: 22 },
  { name: "meera", age: 19 },
];

// TASK F4:
// Use findIndex to find where the value "target" sits in the
// array. If it is not there, findIndex should give -1 - print
// a message for both cases.
var searchF = ["red", "green", "blue"];
var targetF = "blue";

// ============================================================
// PART G - some and every
// ============================================================
// some  -> true if AT LEAST ONE item passes the test
// every -> true only if ALL items pass the test

// TASK G1:
// Use some to check if the array contains at least one number
// that is greater than 90. Print true/false.
var numsG = [10, 40, 55, 88, 91];

// TASK G2:
// Use every to check if ALL numbers in the array are positive.
// Print true/false.
var numsG2 = [3, 7, 1, 9, 12];

// TASK G3:
// Use every to check if every word in the array is shorter
// than 10 characters.
var wordsG = ["short", "tiny", "medium", "little"];

// TASK G4:
// Use some to check if any student in the list is under 18.
var studentsG = [
  { name: "asha", age: 20 },
  { name: "ravi", age: 17 },
  { name: "meera", age: 19 },
];

// ============================================================
// PART H - reduce
// ============================================================
// reduce boils the whole array down to a SINGLE value.
// callback signature: (accumulator, currentItem) => newAccumulator
// The second argument to reduce is the STARTING accumulator.

// TASK H1:
// Use reduce to get the SUM of all numbers.
var numsH = [10, 20, 30, 40, 50];

// TASK H2:
// Use reduce to get the PRODUCT of all numbers (multiply them).
var numsH2 = [1, 2, 3, 4, 5];

// TASK H3:
// Use reduce to find the LARGEST number (do not use Math.max).
var numsH3 = [23, 87, 12, 90, 45, 88];

// TASK H4:
// Use reduce to count how many times each fruit appears.
// Result should be an object like:
//   { apple: 3, banana: 2, orange: 1 }
var fruitsH = ["apple", "banana", "apple", "orange", "banana", "apple"];

// TASK H5:
// Use reduce to join all the words into one sentence separated
// by spaces (do not use .join - practice reduce).
var wordsH = ["reduce", "is", "very", "powerful"];

// TASK H6:
// Use reduce to build the sum of only the EVEN numbers.
var numsH6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ============================================================
// PART I - sort
// ============================================================
// sort with NO callback sorts as strings.
// For numbers, pass a compare callback:
//   (a, b) => a - b   -> ascending
//   (a, b) => b - a   -> descending

// TASK I1:
// Sort these numbers in ASCENDING order.
var numsI = [40, 1, 5, 200, 25, 8];

// TASK I2:
// Sort these numbers in DESCENDING order.
var numsI2 = [40, 1, 5, 200, 25, 8];

// TASK I3:
// Sort these words alphabetically.
var wordsI = ["banana", "apple", "cherry", "date"];

// TASK I4:
// Sort these words by their LENGTH, shortest first.
var wordsI2 = ["javascript", "css", "html", "react", "go"];

// TASK I5:
// Sort this list of students by age, youngest first.
var studentsI = [
  { name: "asha", age: 20 },
  { name: "ravi", age: 17 },
  { name: "meera", age: 25 },
  { name: "john", age: 19 },
];

// ============================================================
// PART J - COMBINATION: functions.js + array HOFs
// ============================================================
// Here you must actively MIX the two topics:
//   - write your own functions / callbacks
//   - pass them into array HOFs
//   - and CHAIN HOFs together (filter -> map -> reduce)

// TASK J1:
// Write a NAMED function "double" (function declaration) that
// takes n and returns n * 2.
// Then use it as the callback for map on this array.
var numsJ = [3, 6, 9, 12];

// TASK J2:
// Write an arrow function "isPassing" that takes a score and
// returns true if score >= 40.
// Use it as the callback for filter on this array.
var scoresJ = [35, 80, 40, 22, 91, 39, 60];

// TASK J3:
// From this array of numbers:
//   step 1: filter -> keep only odd numbers
//   step 2: map    -> square each of them
//   step 3: reduce -> add them all up
// Do it as ONE chain. Print the final number.
var numsJ3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TASK J4:
// You have a list of products. In one chain:
//   step 1: filter -> keep products that are inStock
//   step 2: map    -> get just the price of each
//   step 3: reduce -> total price of in-stock products
var productsJ = [
  { name: "pen", price: 10, inStock: true },
  { name: "notebook", price: 50, inStock: false },
  { name: "bag", price: 800, inStock: true },
  { name: "bottle", price: 250, inStock: true },
  { name: "eraser", price: 5, inStock: false },
];

// TASK J5:
// Write a higher order function "makeAdder" that takes x and
// RETURNS a function that adds x to its argument.
// Then use makeAdder(10) as the callback for map on this array
// (so every number goes up by 10).
var numsJ5 = [1, 2, 3, 4, 5];

// TASK J6:
// You have an array of full names as strings. In one chain:
//   step 1: map    -> split into { first, last }
//   step 2: filter -> keep only people whose last name is "khan"
//   step 3: map    -> return just the first names
var namesJ6 = [
  "amir khan",
  "sara ali",
  "zoya khan",
  "bilal khan",
  "neha verma",
];

// TASK J7:
// Write a function "averageOf" that takes an array of numbers
// and uses reduce INSIDE it to return the average.
// Test it with the array below.
var marksJ7 = [70, 85, 90, 60, 100];

// TASK J8:
// You have an array of sentences. In one chain:
//   step 1: map    -> number of words in each sentence
//   step 2: filter -> keep only counts greater than 3
//   step 3: reduce -> total word count of those sentences
var sentencesJ8 = [
  "hello there",
  "this is a longer sentence",
  "short one",
  "javascript higher order functions are fun",
  "ok",
];

// TASK J9:
// Write your own function "myMap" that takes (array, callback)
// and returns a NEW array, building it with a plain for loop
// and calling callback(item, index) on each element.
// Test it by doubling the numbers below.
// (This shows what map does under the hood.)
var numsJ9 = [2, 4, 6, 8];

// TASK J10:
// Write your own function "myFilter" that takes (array, callback)
// and returns a NEW array with only the items where
// callback(item) is true.
// Test it by keeping only numbers greater than 10.
var numsJ10 = [4, 18, 9, 27, 6, 40];

// ============================================================
// PART K - MINI CHALLENGES (mix everything)
// ============================================================

// TASK K1:
// From this array, print the sum of the squares of all the
// even numbers, using filter + map + reduce in one chain.
var challengeK1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TASK K2:
// Given this list of students with marks, in one chain:
//   - keep students who scored 50 or above
//   - sort them by marks, highest first
//   - map to strings like "asha: 88"
// Print the final array.
var studentsK2 = [
  { name: "asha", marks: 88 },
  { name: "ravi", marks: 42 },
  { name: "meera", marks: 67 },
  { name: "john", marks: 50 },
  { name: "zoya", marks: 39 },
];

// TASK K3:
// You have an array of words. Use reduce to return an object
// that groups the words by their FIRST letter:
//   { a: ["apple", "avocado"], b: ["banana"], ... }
var wordsK3 = ["apple", "banana", "avocado", "berry", "cherry", "apricot"];

// TASK K4:
// Write a higher order function "runAll" that takes a value
// and an ARRAY of functions, and runs each function on the
// value one after another (feeding the result forward).
// Example:
//   runAll(3, [(n) => n + 1, (n) => n * 2, (n) => n - 5])
//   -> ((3 + 1) * 2) - 5 -> 3
// Hint: reduce is a natural fit here.

// TASK K5:
// From productsK5, in one chain, produce a single object:
//   { count: <how many in stock>, total: <sum of their prices> }
// using reduce (start the accumulator as { count: 0, total: 0 }).
var productsK5 = [
  { name: "pen", price: 10, inStock: true },
  { name: "notebook", price: 50, inStock: false },
  { name: "bag", price: 800, inStock: true },
  { name: "bottle", price: 250, inStock: true },
];
