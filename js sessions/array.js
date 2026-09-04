// ============================================================
// 1. FUNCTION DECLARATION
// ============================================================

// A function is a reusable block of code.
//
// Instead of writing the same code again and again,
// we can put that code inside a function and call the
// function whenever we need it.
//
// General syntax:
//
// function functionName(parameters) {
//     code to be executed
// }

// ------------------------------------------------------------
// Creating a function called "addition"
// ------------------------------------------------------------

function addition(a, b) {
  // "a" and "b" are called PARAMETERS.
  //
  // Parameters are variables that receive values
  // when we call the function.
  //
  // For example:
  //
  // addition(12, 234)
  //
  // In this case:
  // a = 12
  // b = 234

  // return sends a value back to the place
  // where the function was called.
  //
  // Here we are adding a and b.
  //
  // If:
  // a = 12
  // b = 234
  //
  // Then:
  // a + b = 246

  return a + b;
}

// ------------------------------------------------------------
// Calling / Invoking the function
// ------------------------------------------------------------

// A function does NOT execute just because we created it.
//
// We need to CALL the function.
//
// We call it by writing:
//
// functionName(arguments)
//
// Here:
// 12 and 234 are called ARGUMENTS.
//
// Arguments are the actual values that we pass
// to the function's parameters.

var res = addition(12, 234);

// JavaScript executes:
//
// addition(12, 234)
//
// So internally:
//
// a = 12
// b = 234
//
// return a + b
// return 12 + 234
// return 246
//
// Therefore:
//
// res = 246

// console.log() is used to print something
// in the browser console / terminal.

console.log(res);

// Output:
// 246

// ============================================================
// 2. FUNCTION EXPRESSIONS
// ============================================================

// A function expression means that we create a function
// and store that function inside a variable.
//
// Example:
//
// var myFunction = function() {
//     ...
// };
//
// Here, the function itself becomes a VALUE.
//
// Just like we can store:
//
// var x = 10;
//
// we can also store a function:
//
// var x = function() {
//     ...
// };

// ============================================================
// 3. ANONYMOUS FUNCTION
// ============================================================

// "Anonymous" means "without a name".
//
// Notice that this function does NOT have a name:
//
// function (x) {
//     return x ** 2;
// }
//
// Normally, a function declaration looks like:
//
// function square(x) {
//
// }
//
// The function above has a name: square
//
// But our function below has NO function name.

var sqFn = function (x) {
  // x is a parameter.
  //
  // When we call:
  //
  // sqFn(123)
  //
  // x will become 123.

  // ** is the exponentiation operator.
  //
  // x ** 2 means:
  //
  // x raised to the power of 2
  //
  // In mathematical terms:
  //
  // x²
  //
  // If x = 123:
  //
  // 123 ** 2
  // = 123 × 123
  // = 15129

  return x ** 2;
};

// ------------------------------------------------------------
// Calling the anonymous function
// ------------------------------------------------------------

// sqFn contains a function.
//
// Therefore, we can use parentheses () after sqFn
// to execute that function.
//
// We pass 123 as an argument.
//
// So:
//
// x = 123

var sq = sqFn(123);

// The function returns:
//
// 123 ** 2
//
// Which is:
//
// 15129
//
// Therefore:
//
// sq = 15129

console.log(sq);

// Output:
// 15129

// ============================================================
// 4. ARROW FUNCTIONS
// ============================================================

// Arrow functions are a shorter way of writing functions.
//
// They were introduced in ES6 (ECMAScript 2015).
//
// Instead of:
//
// function cube(n) {
//     return n ** 3;
// }
//
// We can write:
//
// var cube = n => n ** 3;

// ------------------------------------------------------------
// Creating an arrow function
// ------------------------------------------------------------

var cube = (n) => n ** 3;

// Let's understand this carefully:
//
// var
// |
// // Creates a variable
//
// cube
// |
// // Name of the variable
//
// =
// |
// // Assigns a value
//
// n
// |
// // Parameter of the function
//
// =>
// |
// // Arrow function syntax
//
// n ** 3
// |
// // Code that is executed
//
// Because there is only ONE expression,
// JavaScript automatically returns its result.
//
// So this:
//
// var cube = n => n ** 3;
//
// is basically equivalent to:
//
// var cube = function(n) {
//     return n ** 3;
// };

// ------------------------------------------------------------
// Calling the arrow function
// ------------------------------------------------------------

var res = cube(2);

// We passed:
//
// 2
//
// So:
//
// n = 2
//
// The function calculates:
//
// 2 ** 3
//
// = 2 × 2 × 2
//
// = 8
//
// Therefore:
//
// res = 8

console.log(res);

// Output:
// 8

// ============================================================
// 5. IMPORTANT: FUNCTION DECLARATION VS FUNCTION EXPRESSION
// ============================================================

// FUNCTION DECLARATION:
//
// function addition(a, b) {
//     return a + b;
// }
//
// Here we directly declare a function with a name.
//
// The function's name is:
// addition

// FUNCTION EXPRESSION:
//
// var sqFn = function(x) {
//     return x ** 2;
// };
//
// Here we create a function and store it
// inside a variable.
//
// The variable's name is:
// sqFn
//
// The function itself does not have a name.
//
// Therefore it is an ANONYMOUS FUNCTION.

// ============================================================
// 6. THREE COMMON USES OF FUNCTIONS AS VALUES
// ============================================================

// In JavaScript, functions are treated as VALUES.
//
// This is a VERY important concept.
//
// We can store a function in a variable:
//
// var square = function(x) {
//     return x * x;
// };

// We can also store a function as a value
// inside an object:

var student = {
  name: "Rohan",

  // Here "greet" is a KEY.
  //
  // The VALUE of greet is a function.

  greet: function () {
    console.log("Hello!");
  },
};

// We can call the function using:

student.greet();

// Output:
// Hello!

// So functions can be:
//
// 1. Stored in variables
// 2. Stored as object values
// 3. Passed as arguments to other functions
//
// When a function is passed to another function,
// it is commonly called a CALLBACK.

// ============================================================
// 7. CALLBACK FUNCTION - BASIC EXAMPLE
// ============================================================

// Let's create a function that accepts another function
// as a parameter.

function calculate(a, b, operation) {
  // operation is expected to be a function.

  return operation(a, b);
}

// Now we create a function and pass it
// to the calculate() function.

var result = calculate(10, 20, function (a, b) {
  // This anonymous function is being passed
  // as an argument.

  return a + b;
});

console.log(result);

// Output:
// 30

// What happened?
//
// calculate(10, 20, function(a, b) {...})
//
// a = 10
// b = 20
//
// operation = the anonymous function
//
// Then:
//
// operation(a, b)
//
// becomes:
//
// operation(10, 20)
//
// And the anonymous function returns:
//
// 10 + 20
//
// = 30

// ============================================================
// 8. ARROW FUNCTION WITH ONE PARAMETER
// ============================================================

// If an arrow function has only ONE parameter,
// parentheses around the parameter are optional.
//
// This:
//
// var cube = n => n ** 3;
//
// is valid.
//
// We can also write:
//
// var cube = (n) => n ** 3;
//
// Both are valid.

// ============================================================
// 9. ARROW FUNCTION WITH MULTIPLE PARAMETERS
// ============================================================

// If there are TWO or more parameters,
// parentheses are required.

var additionArrow = (a, b) => a + b;

console.log(additionArrow(10, 20));

// Output:
// 30

// ============================================================
// 10. ARROW FUNCTION WITH MULTIPLE LINES
// ============================================================

// If the arrow function contains multiple statements,
// we need curly braces.
//
// Example:

var multiply = (a, b) => {
  var result = a * b;

  return result;
};

console.log(multiply(5, 4));

// Output:
// 20

// ============================================================
// 11. SHORT RETURN IN ARROW FUNCTIONS
// ============================================================

// This:

var square1 = (n) => n ** 2;

// is equivalent to:

var square2 = function (n) {
  return n ** 2;
};

// And also equivalent to:

var square3 = (n) => {
  return n ** 2;
};

// The important difference is:
//
// When using:
//
// n => n ** 2
//
// JavaScript automatically returns:
//
// n ** 2
//
// But when using curly braces:
//
// n => {
//     n ** 2
// }
//
// JavaScript does NOT automatically return the value.
//
// You need:
//
// return n ** 2;

// ============================================================
// QUICK SUMMARY
// ============================================================

// FUNCTION DECLARATION:
//
// function addition(a, b) {
//     return a + b;
// }
//
// Named function.
// Can be called by its function name.

// FUNCTION EXPRESSION:
//
// var square = function(x) {
//     return x ** 2;
// };
//
// Function stored inside a variable.
// Usually an anonymous function.

// ARROW FUNCTION:
//
// var cube = n => n ** 3;
//
// Shorter syntax for writing functions.

// CALLBACK:
//
// A function passed to another function.
//
// Example:
//
// calculate(10, 20, function(a, b) {
//     return a + b;
// });

// FUNCTIONS AS VALUES:
//
// JavaScript treats functions as values.
//
// Therefore, a function can be:
//
// 1. Stored in a variable
// 2. Stored as an object property
// 3. Passed as an argument
// 4. Returned from another function
// 5. Used as a callback

// revision
//

var marks = [23, 3, 2, 4, 52, 43];

// add a new item/s at the end of an array
marks.push(10000, 20000);
console.log(marks);

// add a new item/s at the start of an array
marks.unshift(10000, 20000);
console.log(marks);

// removes the last item from an array
marks.pop();
console.log(marks);
// removes the first item from an array
marks.shift();
console.log(marks);

marks.splice(0, 1, 999);

console.log(marks);

marks.splice(0, 0, 888);

console.log(marks);

marks.splice(1, 3);
console.log(marks);
