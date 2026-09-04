// ============================================================
// LOOP PRACTICE TASKS
// ============================================================
//
// Practice for BOTH kinds of loops:
//
// 1. FIXED ITERATION  -> we KNOW how many times to repeat
//                        (usually a "for" loop)
//
// 2. NON-FIXED ITERATION -> we DON'T know how many times,
//                           we keep going until a condition
//                           becomes false / true
//                           (usually a "while" loop)
//
// Topics covered below:
//   - Numbers
//   - Strings
//   - Arrays (push, pop, unshift, shift, splice)
//
// HOW TO USE THIS FILE:
//   Read the task, write your solution right under it,
//   then use console.log() to check your output.
//
// Do NOT use objects or functions here.
// Only variables, loops, if/else, and array methods.

// ============================================================
// PART A - FIXED ITERATION (for loop) - NUMBERS
// ============================================================

// TASK A1:
// Print all numbers from 1 to 20.

// TASK A2:
// Print all numbers from 50 down to 41 (counting backwards).

// TASK A3:
// Print only the EVEN numbers from 1 to 30.
// Hint: use i % 2 === 0

// TASK A4:
// Print the multiplication table of 7.
// Example output line: "7 x 3 = 21"

// TASK A5:
// Add all numbers from 1 to 100 and print the total sum.
// Expected answer: 5050

// TASK A6:
// Print the sum of only the ODD numbers between 1 and 50.

// TASK A7:
// Given n = 6, calculate the factorial of n (1 x 2 x 3 x 4 x 5 x 6).
// Expected answer: 720
var n = 6;

// TASK A8:
// Print a countdown from 10 to 1, and after the loop
// print the word "Blast off".

// ============================================================
// PART B - FIXED ITERATION (for loop) - STRINGS
// ============================================================

// TASK B1:
// Print every character of the string below on its own line.
var word = "javascript";

// TASK B2:
// Count how many characters are in the string WITHOUT using .length
// (use a for loop and a counter variable).
var sentence = "practice makes perfect";

// TASK B3:
// Count how many vowels (a, e, i, o, u) are in the string below.
var text = "the quick brown fox";

// TASK B4:
// Build a NEW string that is the reverse of the string below.
// Example: "hello" -> "olleh"
var name = "rohan";

// TASK B5:
// Count how many times the letter "s" appears in the string below.
var line = "she sells sea shells";

// TASK B6:
// Print only the characters that are at an EVEN index (0, 2, 4, ...).
var code = "abcdefghij";

// ============================================================
// PART C - FIXED ITERATION (for loop) - ARRAYS
// ============================================================
// For these tasks, loop over the array by its index:
//   for (var i = 0; i < arr.length; i++) { ... arr[i] ... }

// TASK C1:
// Print each item of the array on its own line, along with its index.
var colors = ["red", "green", "blue", "yellow"];

// TASK C2:
// Find and print the LARGEST number in the array (do not use Math.max).
var nums = [12, 45, 7, 89, 34, 90, 3];

// TASK C3:
// Find and print the SMALLEST number in the array.
var values = [55, 21, 99, 4, 63, 18];

// TASK C4:
// Calculate the average of all numbers in the array.
var scores = [10, 20, 30, 40, 50];

// TASK C5:
// Loop through the array below. For every number that is greater
// than 10, PUSH it into a new array called "big".
// Print "big" at the end.
var data = [4, 15, 8, 23, 42, 9, 11];
var big = [];

// TASK C6:
// Loop through "prices" from the LAST index to the FIRST index
// and UNSHIFT each value into a new array called "reversed".
// Print "reversed" at the end.
var prices = [100, 200, 300, 400];
var reversed = [];

// TASK C7:
// Loop through "letters". Every time you find the letter "x",
// use SPLICE to remove it from the array.
// Be careful with the index after removing an item.
// Print "letters" at the end.
var letters = ["a", "x", "b", "x", "c", "x", "d"];

// TASK C8:
// Loop through "queue". On each pass, use SHIFT to remove the
// first item and print which item was removed, until the array
// is empty. (This can be a for loop OR a while loop.)
var queue = ["task1", "task2", "task3", "task4"];

// ============================================================
// PART D - NON-FIXED ITERATION (while loop) - NUMBERS
// ============================================================

// TASK D1:
// Start with the number 1. Keep doubling it (1, 2, 4, 8, 16, ...)
// and print it each time, until the number goes past 1000.

// TASK D2:
// Start with num = 100. Keep dividing it by 2 (integer-ish is fine)
// and print it, while num is greater than 1.
var num = 100;

// TASK D3:
// You have a savings amount of 0. Each round you add 250.
// Keep going until savings reaches at least 2000.
// Print the number of rounds it took.

// TASK D4:
// Keep asking for a number with prompt() until the user enters
// a number that is divisible by both 3 and 5.
// Print that number.
// (If you are running in Node without prompt, skip the prompt part
//  and just simulate with a starting value.)

// TASK D5:
// Start with n = 27. While n is not equal to 1, do this:
//   - if n is even, n = n / 2
//   - if n is odd,  n = n * 3 + 1
// Print n on every step. (This is the "Collatz" sequence.)
var collatz = 27;

// ============================================================
// PART E - NON-FIXED ITERATION (while loop) - STRINGS
// ============================================================

// TASK E1:
// Keep asking the user for their name with prompt() while the
// entered name has fewer than 3 characters.
// Once valid, print "Welcome, " + name.

// TASK E2:
// You have the string below and an index starting at 0.
// Use a while loop to print each character until you reach
// the end of the string. (Do not use a for loop here.)
var message = "loops are fun";

// TASK E3:
// Start with the string "a". Keep adding "a" to it
// (a, aa, aaa, ...) and print it each time,
// while its length is less than 6.
var repeat = "a";

// TASK E4:
// You have the string below. Using a while loop, count how many
// characters you check before you find the first space " ".
// Print that count.
var phrase = "hello world";

// ============================================================
// PART F - NON-FIXED ITERATION (while loop) - ARRAYS
// ============================================================

// TASK F1:
// You have the array below. While the array still has items,
// use POP to remove the last item and print it.
// Stop when the array is empty.
var stack = [1, 2, 3, 4, 5];

// TASK F2:
// You have the array below. While the FIRST item of the array
// is a negative number, use SHIFT to remove it.
// Print the array at the end.
var readings = [-3, -1, -7, 5, 8, -2, 10];

// TASK F3:
// Start with an empty array "bag".
// While the length of "bag" is less than 5,
// PUSH the current length into it (0, then 1, then 2, ...).
// Print "bag" at the end.
var bag = [];

// TASK F4:
// You have the array below. While the array length is greater
// than 3, use SPLICE to remove ONE item from the middle
// (index = Math.floor(arr.length / 2)).
// Print the array at the end.
var items = [10, 20, 30, 40, 50, 60, 70];

// TASK F5:
// You have the array below and a target = 40.
// Use a while loop with an index to walk through the array.
// Stop as soon as you find the target and print its index.
// If you reach the end without finding it, print -1.
var search = [10, 25, 33, 40, 55, 60];
var target = 40;

// TASK F6:
// Start with the array [0].
// While the LAST item in the array is less than 50,
// PUSH (last item + 7) onto the end.
// Print the array at the end.
var series = [0];
