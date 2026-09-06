// ============================================================
// PART A - FIXED ITERATION (for loop) - NUMBERS
// ============================================================

// TASK A1:
// Print all numbers from 1 to 20.

//  for(let i=1 ; i < 21; i++){
//     console.log(i);
//  }

// TASK A2:
// Print all numbers from 50 down to 41 (counting backwards).

// for (let i = 50; i > 40; i--) {
//    console.log(i);
// }

// TASK A3:
// Print only the EVEN numbers from 1 to 30.
// Hint: use i % 2 === 0

// for (let i = 1; i < 31; i++) {
//    if (i % 2 === 0) {
//       console.log(i)
//    }
// }

// TASK A4:
// Print the multiplication table of 7.
// Example output line: "7 x 3 = 21"
// console.log("The multiplication table of 7 is :")
// for (let i = 1; i < 11; i++) {
//    console.log("7 * " + i + " = " +(7 * i));
// }

// TASK A5:
// Add all numbers from 1 to 100 and print the total sum.
// Expected answer: 5050
// let total = 0;
// for (let i = 1; i < 101; i++) {
//     total=total+i;
// }
// console.log(total)

// TASK A6:
// Print the sum of only the ODD numbers between 1 and 50.

// let total = 0;
// for (let i = 1; i < 51; i++) {
//     if (i % 2 !== 0) {
//         total = total + i;
//     }
// }
// console.log(total);

// TASK A7:
// Given n = 6, calculate the factorial of n (1 x 2 x 3 x 4 x 5 x 6).
// Expected answer: 720
// var n = 6;
// let fact = 1;
// for (n = 6; n >= 1; n--) {
//     fact = fact * n;
// }
// console.log(fact);

// TASK A8:
// Print a countdown from 10 to 1, and after the loop
// print the word "Blast off".

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// console.log("Blast off")

// ============================================================
// PART B - FIXED ITERATION (for loop) - STRINGS
// ============================================================

// TASK B1:
// Print every character of the string below on its own line.
// var word = "javascript";
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }
// TASK B2:
// Count how many characters are in the string WITHOUT using .length
// (use a for loop and a counter variable).
// var sentence = "practice makes perfect";
// var count = 0;
// for (let character of sentence) {
// count++;
// }
// console.log(count);

// TASK B3:
// Count how many vowels (a, e, i, o, u) are in the string below.
// var text = "the quick brown fox";
// var count = 0;
// for(let character of text){
//     if(character === 'a' ||character === 'e'|| character === 'i'|| character === 'o' || character === 'u'){
//         count++
//     }
// }
// console.log("The total vowels in the text is "+count);

// TASK B4:
// Build a NEW string that is the reverse of the string below.
// Example: "hello" -> "olleh"
// var name = "rohan";
// var reverse = "";

// for (let i = 0; i < name.length; i++) {
//     reverse = name[i] + reverse;
// }
// console.log(reverse);

// TASK B5:
// Count how many times the letter "s" appears in the string below.
// var line = "she sells sea shells";
// let count = 0;
// for (let character of line) {
//     if (character === 's') {
//         count++;
//     }
// }
// console.log(count);

// TASK B6:
// Print only the characters that are at an EVEN index (0, 2, 4, ...).
// var code = "abcdefghij";

// for (let i = 0; i < code.length; i++) {
//     if (i % 2 === 0) {
//         console.log(code[i]);
//     }
// }

// ============================================================
// PART C - FIXED ITERATION (for loop) - ARRAYS
// ============================================================
// For these tasks, loop over the array by its index:
//   for (var i = 0; i < arr.length; i++) { ... arr[i] ... }

// TASK C1:
// Print each item of the array on its own line, along with its index.
// var colors = ["red", "green", "blue", "yellow"];
// for (let i = 0; i < colors.length; i++) {
// console.log(colors[i], i);
// }

// TASK C2:
// Find and print the LARGEST number in the array (do not use Math.max).
// var nums = [12, 45, 7, 89, 34, 90, 3];
// let temp = nums[0];
// for (let i = 0; i < nums.length-1; i++) {
//     if (temp > nums[i + 1]) {
//         continue;
//     }
//     else {
//         temp = nums[i + 1];
//     }
// }
// console.log(temp);

// TASK C3:
// Find and print the SMALLEST number in the array.
// var values = [55, 21, 99, 4, 63, 18];
// let temp = values[0]; //55
// for (let i = 0; i < values.length - 1; i++) {
//     if (temp < values[i + 1]) {
//         continue;
//     } else {
//         temp = values[i + 1];//21
//     }
// } console.log(temp);

// TASK C4:
// Calculate the average of all numbers in the array.
// var scores = [10, 20, 30, 40, 50];
// let avg = 0; let total = 0;
// for (let i = 0; i < scores.length; i++) {
//     total = total + scores[i];
// }
// console.log(total/scores.length);

// TASK C5:
// Loop through the array below. For every number that is greater
// than 10, PUSH it into a new array called "big".
// Print "big" at the end.
// var data = [4, 15, 8, 23, 42, 9, 11];
// var big = [];
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > 10) {
//         big.push(data[i]);
//     }
// }
// console.log(big);

// TASK C6:
// Loop through "prices" from the LAST index to the FIRST index
// and UNSHIFT each value into a new array called "reversed".
// Print "reversed" at the end.
// var prices = [100, 200, 300, 400];
// var reversed = [];
// for (let i = prices.length - 1; i >= 0; i--) {
// reversed.unshift(prices[i]);
// }
// console.log(reversed);

// TASK C7:
// Loop through "letters". Every time you find the letter "x",
// use SPLICE to remove it from the array.
// Be careful with the index after removing an item.
// Print "letters" at the end.
// var letters = ["a", "x", "b", "x", "c", "x", "d"];
// for (var i = 0; i < letters.length - 1; i++) {
//     if (letters[i] === 'x') {
//         letters.splice(i,1);
//         i--;
//     }
// }
// console.log(letters);

// TASK C8:
// Loop through "queue". On each pass, use SHIFT to remove the
// first item and print which item was removed, until the array
// is empty. (This can be a for loop OR a while loop.)
// var queue = ["task1", "task2", "task3", "task4"];

// while (queue.length > 0) {
//     console.log(queue.shift());
// }

// ============================================================
// PART D - NON-FIXED ITERATION (while loop) - NUMBERS
// ============================================================

// TASK D1:
// Start with the number 1. Keep doubling it (1, 2, 4, 8, 16, ...)
// and print it each time, until the number goes past 1000.

// let x = 1;

// while (x <= 1000) {
//     console.log(x);
//     x = x * 2;
// }

// TASK D2:
// Start with num = 100. Keep dividing it by 2 (integer-ish is fine)
// and print it, while num is greater than 1.
// var num = 100;
// while(num>1){
//     console.log(num);
//     num = num/2;
// }

// TASK D3:
// You have a savings amount of 0. Each round you add 250.
// Keep going until savings reaches at least 2000.
// Print the number of rounds it took.
// let amt = 0
// let attempts = 0
// while (amt < 2000) {
//     amt = amt + 250;
//     attempts++;
// }
// console.log("attempts made ", attempts);

// TASK D4:
// Keep asking for a number with prompt() until the user enters
// a number that is divisible by both 3 and 5.
// Print that number.
// (If you are running in Node without prompt, skip the prompt part
//  and just simulate with a starting value.)

// let num = Number(prompt("Enter a number:"));

// while (!(num % 3 === 0 && num % 5 === 0)) {
//     num = Number(prompt("Enter a number:"));
// }

// console.log("Number divisible by both 3 and 5:", num);

// TASK D5:
// Start with n = 27. While n is not equal to 1, do this:
//   - if n is even, n = n / 2
//   - if n is odd,  n = n * 3 + 1
// Print n on every step. (This is the "Collatz" sequence.)

// var collatz = 27;
// while (collatz !== 1) {
//     console.log(collatz);
//     if (collatz % 2 === 0) {
//         collatz = collatz / 2;
//     } else {
//         collatz = collatz * 3 + 1;
//     }
// }
// console.log(collatz);

// ============================================================
// PART E - NON-FIXED ITERATION (while loop) - STRINGS
// ============================================================

// TASK E1:
// Keep asking the user for their name with prompt() while the
// entered name has fewer than 3 characters.
// Once valid, print "Welcome, " + name.

// var name = prompt("Enter the name ")
// while (name.length < 3) {
//     name = prompt("Enter the name ")
// }
// console.log(`Welcome ${name}`)

// TASK E2:
// You have the string below and an index starting at 0.
// Use a while loop to print each character until you reach
// the end of the string. (Do not use a for loop here.)
// var message = "loops are fun";
// var counter = 0;
// while (counter < message.length) {
//     console.log(message[counter]);
//     counter++;
// }

// TASK E3:
// Start with the string "a". Keep adding "a" to it
// (a, aa, aaa, ...) and print it each time,
// while its length is less than 6.
// var repeat = "a";
// while (repeat.length < 6) {
//     console.log(repeat);
//     repeat = repeat + "a";
// }

// TASK E4:
// You have the string below. Using a while loop, count how many
// characters you check before you find the first space " ".
// Print that count.
// var phrase = "hello world";
// let counter = 0;
// while (counter < phrase.length && phrase[counter] !== " ") {
//     counter++;
// }
// console.log(counter);

// ============================================================
// PART F - NON-FIXED ITERATION (while loop) - ARRAYS
// ============================================================

// TASK F1:
// You have the array below. While the array still has items,
// use POP to remove the last item and print it.
// Stop when the array is empty.
// var stack = [1, 2, 3, 4, 5];
// while(stack.length > 0){
//     console.log(stack.pop())
// }

// TASK F2:
// You have the array below. While the FIRST item of the array
// is a negative number, use SHIFT to remove it.
// Print the array at the end.
// var readings = [-3, -1, -7, 5, 8, -2, 10];
// while (readings[0] < 0) {
//     readings.shift();
// }   
// console.log(readings);

// TASK F3:
// Start with an empty array "bag".
// While the length of "bag" is less than 5,
// PUSH the current length into it (0, then 1, then 2, ...).
// Print "bag" at the end.
// var bag = [];
// let i = 0
// while (bag.length < 5) {
//     bag.push(i);
//     i++;
// }
// console.log(bag)

// TASK F4:
// You have the array below. While the array length is greater
// than 3, use SPLICE to remove ONE item from the middle
// (index = Math.floor(arr.length / 2)).
// Print the array at the end.
// var items = [10, 20, 30, 40, 50, 60, 70];
// let index = Math.floor(items.length / 2)
// while(items.length>index){
//     items.splice(index,1);
// }
// console.log(items);

// TASK F5:
// You have the array below and a target = 40.
// Use a while loop with an index to walk through the array.
// Stop as soon as you find the target and print its index.
// If you reach the end without finding it, print -1.
// var search = [10, 25, 33, 40, 55, 60];
// var target = 40;
// let i = 0
// while (i < search.length) {
//     if (search[i] === target) {
//         console.log(`The element ${search[i]} found at index ${i}`)
//         break;
//     }
//     i++;
// }

// TASK F6:
// Start with the array [0].
// While the LAST item in the array is less than 50,
// PUSH (last item + 7) onto the end.
// Print the array at the end.
// var series = [0];
// while (series[series.length - 1] < 50) {
//     let last = series[series.length - 1];
//     series.push(last + 7);
// }

// console.log(series);