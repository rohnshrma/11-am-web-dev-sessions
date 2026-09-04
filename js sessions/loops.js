// for loop
// initialization ; condition ; update (increment | decrement)

// for (initialization; condition; update){
// code to be executed
// }

// for (var i = 1; i <= 10; i++) {
//   console.log("John doe " + i);
// }

// for (var i = 50; i >= 40; i--) {
//   console.log(i);
// }

// var txt = "hello world";

// for (var i = 0; i < txt.length; i++) {
//   console.log(txt[i], i);
// }

// while (fixed iteration)

// initialization
// while (condition){
// code to be executed
// update
// }

// console.log("Update done before");
// var i = 0;
// while (i < txt.length) {
//   i += 1;
//   console.log(txt[i], i);
// }

// console.log("Update done after ");

// var i = 0;
// while (i < txt.length) {
//   console.log(txt[i], i);
//   i += 1;
// }

// var yourName = prompt("Enter your name :");
// while (yourName.length < 3) {
//   yourName = prompt("Invalid Input\nEnter your name :");
// }

// console.log("Valid name", yourName);

// while (true) {
//   var n = parseInt(prompt("Enter a number : "));
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("Finally found a number divisible by 3 and 5 both : ", n);
//     break;
//   }
//   console.log(n);
// }

// for (var i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Fake number ignore it ");
//     continue;
//   }
//   console.log("John doe " + i);
// }

var i = 1;
while (i <= 10) {
  if (i === 5) {
    i += 1;
    continue;
  }

  console.log(i);

  i += 1;
}
