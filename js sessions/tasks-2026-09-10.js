// ============================================================
// PRACTICE TASKS  -  2026-09-10
// ------------------------------------------------------------
// Topics we did today:
//   - objects (keys/values, dot vs bracket, methods, `this`)
//   - classes (constructor, methods, `new`)
//   - reduce  (with and without a starting value)
//   - findIndex, flat
//   - higher order functions on ARRAYS OF OBJECTS:
//       map / filter / sort / reduce / some / every / findIndex
//   - callbacks / XMLHttpRequest
// ------------------------------------------------------------
// HOW TO USE THIS FILE
//   - Read a task.
//   - Write your code right under it.
//   - Run it with:   node "tasks-2026-09-10.js"
//     (or add <script src="tasks-2026-09-10.js"></script> to index.html)
//   - The expected answer is written next to most tasks so you
//     can check yourself. Try it BEFORE looking anything up.
// ============================================================


// ============================================================
// SHARED DATA  (use these arrays for the tasks below)
// ============================================================

var students = [
  { name: "Aarav", age: 19, marks: 78, city: "Delhi", gender: "M" },
  { name: "Kanika", age: 21, marks: 92, city: "Mumbai", gender: "F" },
  { name: "Rohan", age: 20, marks: 45, city: "Delhi", gender: "M" },
  { name: "Sara", age: 22, marks: 88, city: "Pune", gender: "F" },
  { name: "Vikram", age: 19, marks: 63, city: "Mumbai", gender: "M" },
  { name: "Isha", age: 23, marks: 35, city: "Delhi", gender: "F" },
];

var products = [
  { title: "Pen", price: 10, stock: 200, category: "stationery" },
  { title: "Notebook", price: 60, stock: 0, category: "stationery" },
  { title: "Bag", price: 900, stock: 15, category: "accessories" },
  { title: "Bottle", price: 250, stock: 40, category: "accessories" },
  { title: "Marker", price: 35, stock: 0, category: "stationery" },
];

var nested = [[1, 2], [3, 4], [5, 6, 7]];


// ============================================================
// PART 1  -  OBJECTS  (basic)
// ============================================================

// Task 1.1
// Make an object called "book" with keys: title, author, pages, isRead.
// Print the author using DOT notation.
// Print the pages using BRACKET notation.


// Task 1.2
// Add a new key "year" to the book object AFTER creating it.
// Change "isRead" to true.
// Print the whole object.


// Task 1.3
// Add a method "summary" to the book object that logs:
//   "<title> by <author>, <pages> pages"
// using `this`. Then call it.


// ============================================================
// PART 2  -  CLASSES  (basic -> intermediate)
// ============================================================

// Task 2.1
// Write a class "Circle".
//   constructor takes: radius
//   method area()          -> returns Math.PI * radius * radius
//   method circumference() -> returns 2 * Math.PI * radius
// Make a Circle with radius 5 and print both results.


// Task 2.2
// Write a class "BankAccount".
//   constructor takes: owner, balance   (default balance to 0 if not passed)
//   method deposit(amount)  -> add to balance, log the new balance
//   method withdraw(amount) -> if amount > balance, log "Not enough money"
//                              else subtract and log the new balance
// Test: create an account, deposit 1000, withdraw 400, withdraw 5000.


// Task 2.3
// Turn each plain object in the `students` array into a "Student" class
// instance.
//   constructor(name, age, marks, city, gender)
//   method passed() -> returns true if marks >= 40
// Use a loop or .map(). Then print how many students passed.


// ============================================================
// PART 3  -  reduce  (basic -> intermediate)
// ============================================================

// Task 3.1
// Given [5, 10, 15, 20, 25], use reduce to get the SUM.        -> 75


// Task 3.2
// Given [5, 10, 15, 20, 25], use reduce to get the PRODUCT.    -> 375000
// (hint: pass a starting value of 1)


// Task 3.3
// Given ["a", "b", "c", "d"], use reduce to build the string "a-b-c-d".


// Task 3.4
// Given [3, 1, 9, 4, 9, 2], use reduce to find the SMALLEST number. -> 1


// Task 3.5  (intermediate)
// Using the `students` array, use reduce to get the TOTAL of all marks.
// Then divide by students.length to get the class average.


// Task 3.6  (intermediate)
// Given [1, 2, 2, 3, 1, 1, 4], use reduce to build a COUNT object:
//   { "1": 3, "2": 2, "3": 1, "4": 1 }


// ============================================================
// PART 4  -  findIndex  &  flat
// ============================================================

// Task 4.1
// In the `students` array, use findIndex to get the POSITION of the
// first student whose city is "Pune".


// Task 4.2
// In the `students` array, use findIndex to get the first student
// with marks below 40. If none matched, it should give -1.


// Task 4.3
// Flatten `nested` into a single array [1,2,3,4,5,6,7] using .flat().


// Task 4.4
// Given [1, [2, [3, [4]]]], flatten it COMPLETELY into [1, 2, 3, 4].
// (hint: .flat() can take a number... or Infinity)


// ============================================================
// PART 5  -  HIGHER ORDER FUNCTIONS on ARRAYS OF OBJECTS
// map / filter / sort / reduce / some / every / findIndex
// ============================================================

// ---- map  (transform every item into something new) ----

// Task 5.1
// From `students`, make an array of just the names.
//   -> ["Aarav", "Kanika", "Rohan", "Sara", "Vikram", "Isha"]


// Task 5.2
// From `students`, make a new array of objects holding only
// { name, marks } for each student.


// Task 5.3
// From `products`, make a new array where each price is increased by
// 18% tax. Keep all the other keys, only change price.
// (return a NEW object each time, do not mutate the originals)


// ---- filter  (keep only the items that pass a test) ----

// Task 5.4
// From `students`, keep only the students from "Delhi".


// Task 5.5
// From `products`, keep only the products that are IN STOCK (stock > 0).


// Task 5.6
// From `students`, keep only female students older than 20.


// ---- sort  (put items in order) ----
// remember:
//   - ascending  -> return a - b
//   - descending -> return b - a
//   - sort CHANGES the original array, so copy first with [...arr]

// Task 5.7
// Sort a COPY of `students` by marks, highest first.


// Task 5.8
// Sort a COPY of `products` by price, lowest first.


// Task 5.9
// Sort a COPY of `students` by name, A to Z.
// (hint: a.name.localeCompare(b.name))


// ---- reduce  (boil the whole array down to one value) ----

// Task 5.10
// From `products`, use reduce to get the total value of all stock:
//   the sum of (price * stock) for every product.


// Task 5.11
// From `students`, use reduce to build an object grouping names by city:
//   { Delhi: ["Aarav", "Rohan", "Isha"], Mumbai: [...], Pune: [...] }


// Task 5.12
// From `students`, use reduce to find the student OBJECT with the
// highest marks (return the whole object, not just the number).


// ---- some / every  (yes-or-no questions about the array) ----

// Task 5.13
// Does `students` contain AT LEAST ONE student with marks >= 90?   (some)


// Task 5.14
// Did EVERY student score above 30?                                (every)


// Task 5.15
// Are ALL products priced under 1000?                              (every)


// Task 5.16
// Is there ANY product that is out of stock (stock === 0)?         (some)


// ---- findIndex  (WHERE is the matching item?) ----

// Task 5.17
// Find the index of the first student named "Sara".


// Task 5.18
// Find the index of the first product in the "accessories" category.


// Task 5.19  (intermediate)
// Write a function updateMarks(name, newMarks) that:
//   - uses findIndex to locate the student by name
//   - if found, updates that student's marks
//   - if not found, logs "No such student"
// Test with updateMarks("Rohan", 70) and updateMarks("Zoya", 50).


// ============================================================
// PART 6  -  MIXED / MINI CHALLENGES  (intermediate)
// ============================================================

// Task 6.1
// In one chain (filter + map + reduce):
// the total marks of all students from "Mumbai".


// Task 6.2
// Build a single report object from `students`:
//   {
//     count: 6,
//     average: <class average marks>,
//     topper: "Kanika",
//     failed: ["Isha"]        // names of students with marks < 40
//   }


// Task 6.3
// From `products`, produce a count per category using reduce:
//   { stationery: 3, accessories: 2 }


// ============================================================
// PART 7  -  CALLBACKS  (stretch)
// ============================================================

// Task 7.1
// Write a function greet(name, callback) that builds the string
// "Hello " + name and passes it to callback. It should NOT console.log
// by itself, the callback decides what to do with the string.
// Call it twice: once printing the string, once printing it uppercased.


// Task 7.2
// Write doAfter(ms, callback) that uses setTimeout to run callback
// after `ms` milliseconds. Test it with 1000ms.


// Task 7.3  (browser only, open through index.html)
// Reuse the sendRequest() function from async/callback.js.
//   - fetch a joke, on success print the joke
//   - on failure print "could not load joke"
// Then call sendRequest again with a broken URL to watch the
// error path actually run.
