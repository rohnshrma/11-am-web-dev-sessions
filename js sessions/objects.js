// ============================================================
// OBJECTS + CLASSES  (today's class notes)
// ============================================================
//
// An OBJECT is a way to keep related information about ONE thing
// together in a single box.
//
// Think about a real car. It has a model, a brand, a year, some
// colours. Instead of making 4 separate loose variables, we put
// all of it inside ONE object and give each piece a label.
//
// The label is called a KEY.
// The information is called a VALUE.
// Together we say "key : value".


// ---- 1. A plain object -------------------------------------

// var car = {
//   model: "i20",
//   brand: "Hyundai",
//   year: 2020,
//   colors: ["red", "green"],
//   engine: {
//     mileage: "20 kmpl",
//   },
// };

// A value can be anything: text, a number, an array, even another
// object (look at "engine" above, that is an object living inside
// an object).

// How do we read a value back out?

// console.log(car.engine);       // dot notation   -> car DOT engine
// console.log(car["engine"]);    // bracket notation -> same result
// console.log(car["model"]);     // bracket needs the key in quotes

// Dot notation is the normal everyday way.
// Bracket notation is handy when the key name is sitting inside a
// variable, or when the key has spaces in it.


// ---- 2. An object that can DO things ----------------------

// A value can also be a function. A function that lives inside an
// object is called a METHOD. It is just "a thing this object can do".

// var car = {
//   model: "i20",
//   brand: "Hyundai",
//   year: 2020,
//   colors: ["red", "green"],
//   start: function () {
//     console.log(`${this.model} engine started`);
//   },

//   stop: function () {
//     console.log(`${this.model} engine stopped`);
//   },
// };

// "this" means "the object I am sitting inside right now".
// So when we call car.start(), this.model means car.model -> "i20".

// car.start();   // "i20 engine started"
// car.stop();    // "i20 engine stopped"


// ---- 3. Changing and adding properties --------------------

// Objects are not frozen. We can change a value after making it.

// car.model = "Verna";   // the model key now holds "Verna"

// console.log(car);

// We can also add a brand new key that did not exist before.
// Just assign to it and it appears.

// car.isIndian = false;

// console.log(car);


// ============================================================
// MAKING MANY SIMILAR OBJECTS
// ============================================================
//
// Writing an object by hand is fine for ONE car or ONE student.
// But what if we need 100 students? We do not want to retype the
// same shape 100 times. We want a machine that stamps them out.


// ---- 4. Constructor FUNCTION (the older way) --------------

// A constructor is a function whose whole job is to build an object.

// function Student(name, age, gender) {
//   // When we call this with the keyword "new", JavaScript quietly
//   // creates a fresh empty object {} for us and names it "this".
//   console.log(this);

//   // We stick the incoming values onto that empty object.
//   this.stu_name = name;
//   this.age = age;
//   this.gender = gender;

//   // We can attach a method the same way.
//   this.info = function () {
//     console.log(
//       `Name : ${this.stu_name} is ${this.age} year old ${this.gender}.`
//     );
//   };
//   // "this" is handed back automatically at the end.
// }

// The "new" keyword is what makes the magic happen:
// var kanika = new Student("Kanika", 19, "Female");
// kanika.info();   // Name : Kanika is 19 year old Female.


// ---- 5. CLASS with fixed values --------------------------

// A class is a cleaner, more modern way to write the same idea.
// It is a BLUEPRINT for objects.

// class Student {
//   name = "john";     // every student built from this blueprint
//   age = 23;          // comes out with these exact same values
//   gender = "Male";

//   info() {           // a method. no "function" keyword needed inside a class
//     console.log(`Name : ${this.name} is ${this.age} year old ${this.gender}.`);
//   }
// }

// var john = new Student();
// john.info();   // Name : john is 23 year old Male.

// var stu2 = new Student();
// stu2.info();   // ALSO "john"... every object is identical. not useful yet.


// ---- 6. CLASS, semi dynamic (feed values in later) ------

// Here the values are not baked in. We call a method afterwards
// to hand each object its own data.

// class Student {
//   // {} : this

//   takeValues(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   info() {
//     console.log(`Name : ${this.name} is ${this.age} year old ${this.gender}.`);
//   }
// }

// var john = new Student();
// john.takeValues("John doe", 23, "Male");   // extra step, easy to forget

// john.info();

// var stu2 = new Student();
// stu2.takeValues("Kanika", 21, "Female");

// stu2.info();


// ---- 7. CLASS, dynamic (the real way) ------------------

class Student {
  // {} : this

  // The constructor is a SPECIAL method.
  // It runs ALL BY ITSELF the moment we say `new Student(...)`.
  // Whatever we put inside  new Student( HERE )  lands in these
  // parameters (name, age, gender).

  constructor(name, age, gender) {
    // "this" is the new object currently being built.
    // We save each incoming value onto it.
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // A normal method. It uses "this" to read the values we saved above.
  info() {
    console.log(`Name : ${this.name} is ${this.age} year old ${this.gender}.`);
  }
}

// Build a student. The constructor runs right now with:
// name = "John doe", age = 23, gender = "Male"
var john = new Student("John doe", 23, "Male");

john.info(); // Name : John doe is 23 year old Male.

// Build another one with completely different data, same blueprint.
var stu2 = new Student("Kanika", 21, "Female");

stu2.info(); // Name : Kanika is 21 year old Female.
