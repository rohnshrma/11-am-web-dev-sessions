/* =====================================================================
   HIGHER ORDER FUNCTIONS (HOF) - EXPLAINED IN PLAIN, EVERYDAY LANGUAGE
   =====================================================================

   WHAT IS A "HIGHER ORDER FUNCTION"?
   A function is just a small machine that does one job.
   A "higher order function" is a machine that accepts ANOTHER machine
   (a function) as an ingredient.

   Real-life picture: a photocopier.
   You (the array) hand over a stack of papers. You tell the copier
   what to do with EACH paper ("make it bigger", "skip this one").
   The copier takes care of the boring walking-through-the-stack part;
   you only describe the rule for ONE paper.

   In JavaScript:
       marks.map( (mark) => mark * 2 )
        ^           ^
        |           the small function we hand over (the "rule for ONE item")
        the HOF (it walks through every item and uses our rule)

   The little function we hand over is called a CALLBACK
   ("call me back whenever you have an item for me").

   ARROW FUNCTION SYNTAX (the  =>  thing):
       (mark) => mark * 2
   reads as: "given a mark, give back mark * 2".
   It is a shorter way to write:
       function (mark) { return mark * 2; }
   If you use curly braces { } you MUST write the word `return` yourself.
   If you skip the curly braces, the value is returned automatically.
===================================================================== */

// `var` creates a labelled box in memory. The label is "marks".
// The box holds an ARRAY: an ordered list of things, written inside [ ].
// Each item has a position number called an INDEX, and counting starts at 0:
//   index:  0   1  2   3  4   5    6    7
//   value: 12  34  2  45  2  44  523  354
var marks = [12, 34, 2, 45, 2, 44, 523, 354];

/* ---------------------------------------------------------------------
   1) forEach  ->  arr.forEach((item, index, arrItself) => {})
   ---------------------------------------------------------------------
   "For each item, do this thing."
   It visits every item, one at a time, from first to last.
   It gives you NOTHING back (returns undefined). It is only for "doing"
   things: printing, saving, changing the screen, etc.

   The callback receives up to 3 things (you may use fewer):
     item       -> the current thing we are looking at
     index      -> its position number (0, 1, 2 ...)
     arrItself  -> the whole original array
--------------------------------------------------------------------- */

// The OLD way - a classic `for` loop. You manage everything by hand:
//   var i = 0            start counting at 0
//   i < marks.length     keep going while i is smaller than the number of items
//   i += 1               after each round, add 1 to i
//   marks[i]             pick the item sitting at position i
// for (var i = 0; i < marks.length; i += 1) {
//   console.log(marks[i]);
// }

// The NEW way - forEach. Same result, but JS handles the counting for you.
// marks.forEach((mark, index, arr) => {
//   console.log(mark, index, arr);
// });

/* ---------------------------------------------------------------------
   2) map  ->  arr.map((item, index, arrItself) => {})  gives an ARRAY
   ---------------------------------------------------------------------
   "Transform every item and give me the results as a NEW list."
   Think of a factory conveyor belt: 1 thing goes in, 1 changed thing
   comes out. The number of items in = the number of items out.
   The ORIGINAL array is NOT touched.
--------------------------------------------------------------------- */

// Doing it WITHOUT map (the long way):
// var doubles = [];                 // 1. make an empty basket
// marks.forEach((mark) => {         // 2. look at each mark
//   doubles.push(mark * 2);         // 3. double it and drop it in the basket
// });                               //    (push = add to the END of the array)
// console.log(doubles);

// Doing it WITH map (short and clear):
// var dbls = marks.map((mark) => {
//   return mark * 2;                // whatever we `return` goes into the new array
// });
// console.log(dbls);

/* ---------------------------------------------------------------------
   3) filter  ->  arr.filter((item, index, arrItself) => {})  gives an ARRAY
   ---------------------------------------------------------------------
   "Keep only the items that pass my test."
   Like a tea strainer: the liquid passes, the leaves stay behind.
   Your callback must answer YES (true) or NO (false) for each item.
   true  -> item is kept.   false -> item is thrown out.
   The result can be shorter than the original (even empty).
--------------------------------------------------------------------- */

// The long way:
// var evens = [];
// marks.forEach((mark) => {
//   // `%` is "remainder after dividing". 12 % 2 = 0 (nothing left over)
//   // so a number that leaves 0 after dividing by 2 is EVEN.
//   // `===` means "is exactly equal to".
//   if (mark % 2 === 0) evens.push(mark);
// });
// console.log(evens);

// The short way:
// var evns = marks.filter((mark) => mark % 2 === 0);
// console.log(evns);

/* ---------------------------------------------------------------------
   4) sort  ->  arr.sort(compareFunction)
   ---------------------------------------------------------------------
   "Put the items in order."
   WARNING 1: sort CHANGES the original array (it re-arranges it in place).
   WARNING 2: with no instructions JS sorts everything as TEXT, so
              [10, 9, 100] becomes [10, 100, 9]. (Like a dictionary: "10"
              comes before "9" because "1" comes before "9".)
              That is why we give it a compare function for numbers.

   How the compare function (a, b) works - JS picks two neighbours, a and b:
     returns a NEGATIVE number -> a goes BEFORE b
     returns a POSITIVE number -> a goes AFTER b
     returns 0                 -> keep them as they are
   a - b : small minus big = negative, so small numbers go first = ASCENDING
   b - a : the reverse                                         = DESCENDING
--------------------------------------------------------------------- */

// marks.sort((a, b) => a - b); // ascending  : smallest -> biggest
// marks.sort((a, b) => b - a); // descending : biggest -> smallest

// console.log(marks);

// For WORDS (strings) we use localeCompare. It compares two words the way
// a dictionary would (and understands accents / capital letters properly).
// It also returns negative / positive / 0, just like a - b does for numbers.
// var names = ["john", "josies", "joseph", "start", "bruce"];
// names.sort((a, b) => b.localeCompare(a)); // Z -> A
// names.sort((a, b) => a.localeCompare(b)); // A -> Z  (this one runs last, so it wins)
// console.log(names);

/* ---------------------------------------------------------------------
   5) find  ->  arr.find((item) => condition)
   ---------------------------------------------------------------------
   "Give me the FIRST item that passes the test, then stop looking."
   Like searching a drawer for your keys: once you find them you stop.
   Returns the item itself, or `undefined` ("nothing found") if none match.
--------------------------------------------------------------------- */
// var res = marks.find((mark) => mark % 2 === 0);
// console.log(res); // 12  (the first even number in the list)

/* ---------------------------------------------------------------------
   6) some  ->  "Is AT LEAST ONE item passing the test?"  gives true / false
   ---------------------------------------------------------------------
   Like asking a class: "Did ANYONE bring a pen?" One yes is enough.
   It stops as soon as it finds the first yes.
--------------------------------------------------------------------- */
var someGreaterThanFifty = marks.some((mark) => mark > 50);
console.log(someGreaterThanFifty); // true (523 and 354 are bigger than 50)

/* ---------------------------------------------------------------------
   7) every  ->  "Do ALL items pass the test?"  gives true / false
   ---------------------------------------------------------------------
   Like asking: "Did EVERYONE bring a pen?" One single "no" makes the
   answer false (and it stops right there).
--------------------------------------------------------------------- */
var allGreaterThanFifty = marks.every((mark) => mark > 50);
console.log(allGreaterThanFifty); // false (12 is not bigger than 50)

/* ---------------------------------------------------------------------
   8) findIndex  ->  "At WHICH POSITION is the first item that passes?"
   ---------------------------------------------------------------------
   Same as find, but instead of the item it tells you its position number.
   If nothing matches, it returns -1 (there is no position -1, so -1 means
   "not found").
--------------------------------------------------------------------- */
var position = marks.findIndex((mark) => mark % 2 === 0);
console.log(position); // 0 (the first even number, 12, sits at index 0)

/* ---------------------------------------------------------------------
   9) reduce  ->  arr.reduce((pv, cv) => {...}, startingValue)
   ---------------------------------------------------------------------
   "Squash the whole list down into ONE single result."
   (a total, an average, an object, a longer string... anything.)

   Real-life picture: a SNOWBALL rolling down a hill.
   It starts small, picks up one more bit of snow at every step, and at
   the bottom it is one big ball.

   The two main names:
     pv = "previous value" (also called accumulator): the snowball so far
     cv = "current value": the item we are looking at right now
   Whatever you `return` becomes the NEXT pv.
--------------------------------------------------------------------- */

// CASE 1: NO starting value given.
//   JS quietly uses the first item as pv and starts from the second item.
//   pv = arr[0] = 12
//   cv = arr[1] = 34
//   Round 1: 12 + 34 = 46   -> 46 becomes pv
//   Round 2: 46 + 2  = 48   -> and so on until the end.
//   DANGER: on an EMPTY array with no starting value, JS crashes with an error.
// var total = marks.reduce((pv, cv) => {
//   // pv = pv + cv
//   //   console.log(pv, cv);
//   return pv + cv;
// });
// console.log(total);

// CASE 2: a starting value IS given (here: 0, after the callback).
//   pv = 0  (what WE chose)
//   cv = arr[0] = 12  (starts from the very first item)
//   Round 1: 0 + 12 = 12 -> becomes pv, and so on.
//   Safer: works on empty arrays (gives back the starting value), and lets
//   the result be a different type (an object, a string, an array...).
// var total = marks.reduce((pv, cv) => {
//   // pv = pv + cv
//   console.log(pv, cv);
//   return pv + cv;
// }, 0);
// console.log(total);

/* =====================================================================
   30 PRACTICE TASKS - REAL-LIFE WEB DEVELOPMENT USES
   =====================================================================
   Every task has: a story (where you would see it on a real website),
   the data, and a SOLUTION underneath. Try it yourself first, then
   compare with the solution. Run the file with:  node hof.js

   To keep the output tidy, each task is wrapped in a small function
   (task1, task2 ...). Run just the ones you want at the very bottom.
===================================================================== */

// ---------- SHARED DATA (pretend this came from a server / database) ----------

// ARRAY OF NUMBERS - e.g. prices in rupees in a shopping cart
var prices = [499, 1299, 199, 2499, 799, 99, 1599];

// ARRAY OF NUMBERS - star ratings given by customers (1 to 5)
var ratings = [5, 4, 3, 5, 2, 4, 5, 1, 4, 5];

// ARRAY OF STRINGS - tags on a blog post
var tags = ["react", "javascript", "css", "html", "node", "react", "css"];

// ARRAY OF STRINGS - names typed by users (messy on purpose)
var userNames = ["  rohan ", "PRIYA", "aman  ", " Neha", "karan"];

// ARRAY OF OBJECTS - the products of an online shop
var products = [
  { id: 1, name: "Laptop", price: 55000, category: "electronics", stock: 5, rating: 4.5 },
  { id: 2, name: "T-Shirt", price: 499, category: "clothing", stock: 0, rating: 4.1 },
  { id: 3, name: "Headphones", price: 2999, category: "electronics", stock: 12, rating: 4.7 },
  { id: 4, name: "Jeans", price: 1499, category: "clothing", stock: 20, rating: 3.9 },
  { id: 5, name: "Novel", price: 299, category: "books", stock: 40, rating: 4.8 },
  { id: 6, name: "Smartwatch", price: 7999, category: "electronics", stock: 0, rating: 4.0 },
];

// ARRAY OF OBJECTS - users of an app
var users = [
  { id: 1, name: "Rohan", age: 24, city: "Delhi", isActive: true, role: "admin" },
  { id: 2, name: "Priya", age: 17, city: "Mumbai", isActive: true, role: "user" },
  { id: 3, name: "Aman", age: 31, city: "Delhi", isActive: false, role: "user" },
  { id: 4, name: "Neha", age: 28, city: "Pune", isActive: true, role: "editor" },
  { id: 5, name: "Karan", age: 45, city: "Mumbai", isActive: false, role: "user" },
];

// ARRAY OF OBJECTS - items inside a shopping cart
var cart = [
  { name: "Shoes", price: 2000, qty: 2 },
  { name: "Socks", price: 150, qty: 3 },
  { name: "Cap", price: 500, qty: 1 },
];

// ARRAY OF OBJECTS - tasks in a to-do app
var todos = [
  { id: 1, text: "Learn map", done: true, priority: 2 },
  { id: 2, text: "Learn filter", done: true, priority: 1 },
  { id: 3, text: "Learn reduce", done: false, priority: 3 },
  { id: 4, text: "Build project", done: false, priority: 1 },
];

// ARRAY OF OBJECTS - a student result sheet
var students = [
  { name: "Asha", marks: [80, 90, 70] },
  { name: "Bhavya", marks: [40, 35, 50] },
  { name: "Chirag", marks: [95, 85, 90] },
];

// ---------- THE 30 TASKS ----------

// TASK 1 (map, numbers) - Show prices with the rupee sign in a product list.
function task1() {
  var labels = prices.map((p) => "₹" + p);
  console.log("1:", labels);
}

// TASK 2 (map, numbers) - Add 18% GST to every price before checkout.
function task2() {
  var withGst = prices.map((p) => Math.round(p * 1.18)); // Math.round = nearest whole number
  console.log("2:", withGst);
}

// TASK 3 (filter, numbers) - "Budget picks": only prices under 1000.
function task3() {
  console.log("3:", prices.filter((p) => p < 1000));
}

// TASK 4 (reduce, numbers) - Cart total = add up all the prices.
function task4() {
  console.log("4:", prices.reduce((sum, p) => sum + p, 0));
}

// TASK 5 (reduce, numbers) - Average star rating shown under a product.
function task5() {
  var avg = ratings.reduce((s, r) => s + r, 0) / ratings.length;
  console.log("5:", avg.toFixed(1)); // toFixed(1) keeps one digit after the decimal point
}

// TASK 6 (sort, numbers) - "Price: Low to High" and "High to Low" dropdown.
// [...prices] makes a COPY first, because sort would otherwise scramble the original.
function task6() {
  var low = [...prices].sort((a, b) => a - b);
  var high = [...prices].sort((a, b) => b - a);
  console.log("6:", low, high);
}

// TASK 7 (some, numbers) - Show a "Free delivery!" banner if ANY item is above 2000.
function task7() {
  console.log("7:", prices.some((p) => p > 2000));
}

// TASK 8 (every, numbers) - Allow "Cash on delivery" only if EVERY item is below 5000.
function task8() {
  console.log("8:", prices.every((p) => p < 5000));
}

// TASK 9 (reduce, numbers) - Rating histogram: how many 1-star, 2-star ... 5-star.
// The starting value is an empty OBJECT {}; each round we add 1 to that star's counter.
function task9() {
  var histogram = ratings.reduce((counts, r) => {
    counts[r] = (counts[r] || 0) + 1; // `|| 0` = if it doesn't exist yet, start at 0
    return counts;
  }, {});
  console.log("9:", histogram);
}

// TASK 10 (reduce, numbers) - Find the highest price (to set a price-slider max).
function task10() {
  console.log("10:", prices.reduce((max, p) => (p > max ? p : max), prices[0]));
}

// TASK 11 (map, strings) - Clean user-typed names: remove spaces, capitalise first letter.
function task11() {
  var clean = userNames.map((n) => {
    var t = n.trim().toLowerCase(); // trim = cut spaces from both ends
    return t.charAt(0).toUpperCase() + t.slice(1); // big first letter + the rest
  });
  console.log("11:", clean);
}

// TASK 12 (filter + indexOf, strings) - Remove duplicate tags.
// indexOf gives the FIRST position of a word; if this item's own position
// is that first position, we are seeing it for the first time -> keep it.
function task12() {
  var unique = tags.filter((tag, i, arr) => arr.indexOf(tag) === i);
  console.log("12:", unique);
}

// TASK 13 (sort, strings) - Alphabetical tag list for a tag cloud.
function task13() {
  console.log("13:", [...tags].sort((a, b) => a.localeCompare(b)));
}

// TASK 14 (map, strings) - Turn tags into URL-ready hashtags: "react" -> "#react".
function task14() {
  console.log("14:", tags.map((t) => "#" + t));
}

// TASK 15 (find, strings) - Search box: first tag that starts with "j".
function task15() {
  console.log("15:", tags.find((t) => t.startsWith("j")));
}

// TASK 16 (filter, objects) - Category page: show only "electronics".
function task16() {
  console.log("16:", products.filter((p) => p.category === "electronics").map((p) => p.name));
}

// TASK 17 (filter, objects) - Hide out-of-stock products from the shop page.
function task17() {
  console.log("17:", products.filter((p) => p.stock > 0).map((p) => p.name));
}

// TASK 18 (map, objects) - Build the HTML cards for a product grid.
// (In React this exact idea becomes <ProductCard /> for each product.)
function task18() {
  var cards = products.map((p) => `<div class="card"><h3>${p.name}</h3><p>₹${p.price}</p></div>`);
  console.log("18:", cards[0]);
}

// TASK 19 (find, objects) - Product detail page: get the product whose id is in the URL.
function task19() {
  var idFromUrl = 3; // e.g. /product/3
  console.log("19:", products.find((p) => p.id === idFromUrl));
}

// TASK 20 (findIndex, objects) - Remove a todo: first find where it lives.
// splice(position, 1) deletes 1 item at that position.
function task20() {
  var copy = [...todos];
  var at = copy.findIndex((t) => t.id === 2);
  if (at !== -1) copy.splice(at, 1); // -1 means "not found", so we check first
  console.log("20:", copy.map((t) => t.text));
}

// TASK 21 (sort, objects) - Sort products by rating, best first.
function task21() {
  console.log("21:", [...products].sort((a, b) => b.rating - a.rating).map((p) => p.name));
}

// TASK 22 (sort, objects) - Sort users by name A-Z (admin user table).
function task22() {
  console.log("22:", [...users].sort((a, b) => a.name.localeCompare(b.name)).map((u) => u.name));
}

// TASK 23 (reduce, objects) - Cart grand total = price x quantity of every line.
function task23() {
  console.log("23:", cart.reduce((sum, item) => sum + item.price * item.qty, 0));
}

// TASK 24 (reduce, objects) - Group users by city (for a "users by city" report).
function task24() {
  var byCity = users.reduce((groups, u) => {
    if (!groups[u.city]) groups[u.city] = []; // first user of this city -> open a new list
    groups[u.city].push(u.name);
    return groups;
  }, {});
  console.log("24:", byCity);
}

// TASK 25 (some, objects) - Does the logged-in list contain any admin? (show admin menu)
function task25() {
  console.log("25:", users.some((u) => u.role === "admin"));
}

// TASK 26 (every, objects) - "Mark all as done" button: disable it if every todo is done.
function task26() {
  console.log("26:", todos.every((t) => t.done));
}

// TASK 27 (filter, objects) - Age check: only adults (18+) may see a restricted page.
function task27() {
  console.log("27:", users.filter((u) => u.age >= 18).map((u) => u.name));
}

// TASK 28 (filter -> map -> reduce chain, objects) - Total value of stock still in the warehouse:
// keep products in stock, then price x stock for each, then add all up.
function task28() {
  var value = products
    .filter((p) => p.stock > 0)
    .map((p) => p.price * p.stock)
    .reduce((sum, v) => sum + v, 0);
  console.log("28:", value);
}

// TASK 29 (map + reduce inside objects) - Report card: average per student + pass/fail.
// Pass means average of 40 or more.
function task29() {
  var report = students.map((s) => {
    var avg = s.marks.reduce((a, b) => a + b, 0) / s.marks.length;
    return { name: s.name, average: Math.round(avg), result: avg >= 40 ? "Pass" : "Fail" };
  });
  console.log("29:", report);
}

// TASK 30 (filter + sort + map chain, objects) - "Pending work" panel:
// not-done todos, most important (priority 1) first, shown as plain text lines.
function task30() {
  var pending = todos
    .filter((t) => !t.done) // `!` flips true/false: "not done"
    .sort((a, b) => a.priority - b.priority)
    .map((t) => `P${t.priority}: ${t.text}`);
  console.log("30:", pending);
}

// ---------- RUN THEM ALL ----------
[task1, task2, task3, task4, task5, task6, task7, task8, task9, task10,
 task11, task12, task13, task14, task15, task16, task17, task18, task19, task20,
 task21, task22, task23, task24, task25, task26, task27, task28, task29, task30,
].forEach((task) => task()); // forEach once more: "for each task function, run it"
