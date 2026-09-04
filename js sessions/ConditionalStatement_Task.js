// Part A — if / else (numbers)

// 1. Check if a number is positive, negative, or zero.
// let num = Number(prompt("Enter a number :"));
// if (Number.isFinite(num)) {
//     if (num >= 0) {
//         if (num === 0) {
//             console.log("The entered number is zero..");

//         } else {
//             console.log("The entered number is greater than zero..");
//         }
//     }
//     else {
//         console.log("The entered number is less than zero..");
//     }
// } else {
//     console.log("Please input a valid number only..")
// }

// 2. Check if a number is even or odd.

// let num = parseInt(prompt("Enter a number :"));
// if (Number.isFinite(num)) {
//     if (num % 2 === 0) {
//         console.log("The entered number is even");
//     } else {
//         console.log("The entered number is odd");
//     }
// }
// else{
//     console.log("Please input a valid number only..")
// }

// 3. Find the largest of two numbers.

// let firstNumber = Number(prompt("Please enter the first number"));
// let secondNumber = Number(prompt("Please enter the second number"));
// if (Number.isFinite(firstNumber) && Number.isFinite(secondNumber)) {
//     if (firstNumber >= secondNumber) {
//         if (firstNumber === secondNumber) {
//             console.log(`${firstNumber} is equals to ${secondNumber}`);
//         } else {
//             console.log(`${firstNumber} is greater than ${secondNumber}`);
//         }

//     } else {
//         console.log(`${secondNumber} is greater than ${firstNumber}`);
//     }
// } else {
//     console.log("Please input a valid numbers only..")
// }

// 4. Check if a person can vote (age >= 18).

// let age = Number(prompt("Please enter the age :"));
// if (Number.isFinite(age)) {
//     if (age >= 18) {
//         console.log("You can vote..")
//     } else {
//         console.log("You cannot vote..")
//     }
// }
// else {
//     console.log("Please input valid age only..")
// }

// 5. Find the largest of three numbers.

// let firstNum = Number(prompt("Enter the first number "))
// let secondNum = Number(prompt("Enter the second number "))
// let thirdNum = Number(prompt("Enter the third number "))

// if (Number.isFinite(firstNum) && Number.isFinite(secondNum) && Number.isFinite(thirdNum)) {
//     if (firstNum > secondNum) {
//         if (firstNum > thirdNum) {
//             console.log(`${firstNum} is the greatest number`)
//         } else {
//             console.log(`${thirdNum} is the greatest number`)
//         }
//     } else {
//         if (secondNum > thirdNum) {
//             console.log(`${secondNum} is the greatest number`)
//         } else {
//             console.log(`${thirdNum} is the greatest number`)
//         }
//     }
// } else {
//     console.log("Please input valid numbers only..")
// }

// 6. Check if a year is a leap year.

// let year = parseInt(prompt("Enter the year "))
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`${year} is a leap year`)
//         } else {
//             console.log(`${year} is not a leap year`)
//         }
//     } else {
//         console.log(`${year} is a leap year`)
//     }
// } else {
//     console.log(`${year} is not a leap year`)
// }

// 7. Check if a number is divisible by both 5 and 3.

// let num = Number(prompt("Enter any number "))
// if (Number.isFinite(num)) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log(`${num} is divisible by both 3 and 5`)
//     } else {
//         console.log(`${num} is not divisible by both 3 and 5`)
//     }
// } else {
//     console.log("Please enter a valid number..")
// }

// 8. Given marks (0–100), print grade: 90+ A, 80–89 B, 70–79 C, 60–69 D, below 60 F.

// let marks = parseInt(prompt("Enter the marks obtained "))
// switch(true){
//     case (marks >= 90):
//         console.log("Grade A")
//         break;
//     case (marks >= 80 && marks < 90):
//         console.log("Grade B")
//         break;
//     case (marks >= 70 && marks < 80):
//         console.log("Grade C")
//         break;
//     case (marks >= 60 && marks < 70):
//         console.log("Grade D")
//         break;
//     default :
//         console.log("Grade F")
//         break;
// }

// 9. Given a temperature, print "Freezing" (<0), "Cold" (0–15), "Warm" (16–30), "Hot" (>30).

// let temp = Number(prompt("Enter the temperature"))

// if (Number.isFinite(temp)) {
//     if (temp > 30) {
//         console.log("Hot")
//     } else if (temp >= 16) {
//         console.log("Warm")
//     } else if (temp >= 0) {
//         console.log("Cold")
//     } else {
//         console.log("Freezing")
//     }
// } else {
//     console.log("Enter a valid temperature")
// }   

// 10. Check if a number is a single digit, double digit, or triple digit.
// let num = Number(prompt("Enter any number"))
// if (Number.isFinite(num)) {
//     num = Math.abs(num)
//     if (num >= 0 && num <= 9) {
//         console.log(`${num} is a single digit number`);
//     } else if (num >= 10 && num <= 99) {
//         console.log(`${num} is a double digit number`);
//     } else if (num >= 100 && num <= 999) {
//         console.log(`${num} is a triple digit number`);
//     } else {
//         console.log(`${num} has more than 3 digits`);
//     }
// } else {
//     console.log("Please enter valid number")
// }

// 11. Given hours worked, calculate pay at 100/hour, plus 1.5x for hours above 40.

// let hrs = Number(prompt("Enter the hours worked "))
// if (Number.isFinite(hrs) && hrs >= 0) {
//     if (hrs > 40) {
//         hrs = hrs - 40;
//         console.log(4000 + hrs * 150);
//     } else {
//         console.log(100 * hrs);
//     }
// } else {
//     console.log("Please enter valid hrs..")
// }

// 12. Check if a triangle is valid given 3 side lengths.
// let firstSide = Number(prompt("Please enter the first side "))
// let secondSide = Number(prompt("Please enter the second side "))
// let thirdSide = Number(prompt("Please enter the third side "))

// if (Number.isFinite(firstSide) && Number.isFinite(secondSide) && Number.isFinite(thirdSide)) {
//     if (firstSide > 0 && secondSide > 0 && thirdSide > 0) {
//         if ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (firstSide + thirdSide > secondSide)) {
//             console.log(`${firstSide} ${secondSide} ${thirdSide} are valid triangle sides..`)

//         }
//         else {
//             console.log("Triangle not having valid sides..")
//         }
//     }
// }
// else {
//     console.log("Please enter the valid triangle sides..")
// }

// 13. Given a number 1–7, print the weekday name using if/else if.

// let day = Number(prompt("Enter any day(1-7)"))
// if (Number.isFinite(day)) {
//     if (day === 1) {
//         console.log("Today is Sunday")
//     } else if (day === 2) {
//         console.log("Today is Monday")
//     } else if (day === 3) {
//         console.log("Today is Tuesday")
//     } else if (day === 4) {
//         console.log("Today is Wednesday")
//     } else if (day === 5) {
//         console.log("Today is Thrusday")
//     } else if (day === 6) {
//         console.log("Today is Friday")
//     } else if (day === 7) {
//         console.log("Today is Saturday")
//     } else {
//         console.log("Invalid day")
//     }
// } else {
//     console.log("Please enter a valid day in number")
// }

// 14. Check if a number lies between 10 and 50 (inclusive).
// let num = Number(prompt("Enter any number"))
// if (num >10 && num<=50) {
//     console.log(`${num} lies between 10 and 50 (inclusive)`)
// }else{
//     console.log(`${num} not lies between 10 and 50 (inclusive)`)
// }

// 15. Given age: 0–12 "Child", 13–19 "Teen", 20–59 "Adult", 60+ "Senior".

// let age = Number(prompt("Enter the age"))
// if (Number.isFinite(age) && age >= 0) {
//     switch (true) {
//         case (age >= 60):
//             console.log("Senior")
//             break;
//         case (age >= 20):
//             console.log("Adult")
//             break;
//         case (age >= 13):
//             console.log("Teen")
//             break;
//         case (age >= 0):
//             console.log("Child")
//             break;
//     }
// } else {
//     console.log("Please enter a valid age..")
// }

// Part B — if / else (strings)

// 16. Ask for a username; if it equals "admin" print "Welcome Admin", else "Welcome Guest".

// let user = prompt("Enter your name ")
// if (user === "admin") {
//     console.log("Welcome Admin")
// } else {
//     console.log("Welcome Guest")
// }

// 17. Check if a password entered matches "js123" and print "Access Granted" or "Denied".

// let pass = prompt("Enter user password")
// if (pass === "js123") {
//     console.log("Access Granted")
// } else {
//     console.log("Denied")
// }

// 18. Ask for a colour; if "red" print "Stop", "yellow" print "Wait", "green" print "Go", else "Invalid".

// let color = prompt("Enter the color")
// if (color === "red") {
//     console.log("Stop")
// } else if (color === "yellow") {
//     console.log("Wait")
// } else if (color === "green") {
//     console.log("Go")
// } else {
//     console.log("Invalid")
// }

// 19. Check if a string is empty or not.

// let string = prompt("Enter any string")

// if (string.length > 0) {
//     console.log("The entered string is not empty")
// } else {
//     console.log("The entered string is empty")
// }

// 20. Ask for "yes" or "no" and respond accordingly (handle any other input).
// let answer = prompt("Enter yes or no:");

// if (answer === "yes") {
//     console.log("You entered yes.");
// } else if (answer === "no") {
//     console.log("You entered no.");
// } else {
//     console.log("Invalid input. Please enter yes or no.");
// }

// 21. Compare two strings and print whether they are equal (case-sensitive).
// let firstString = prompt("Enter first string:");
// let secondString = prompt("Enter second string:");

// if (firstString === secondString) {
//     console.log("Both strings are equal.");
// } else {
//     console.log("Both strings are not equal.");
// }

// 22. Ask for a day name and print "Weekend" if it's "Saturday" or "Sunday", else "Weekday".

// let day = prompt("Please enter any day")

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend")
// }
// else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thrusday" || day === "Friday") {
//     console.log("Weekday")
// } else {
// console.log("Invalid day")
// }

// 23. Given a month number (1–12), print the month name.

// let month = Number(prompt("Enter the month"))
// if (Number.isFinite(month)) {
//     switch (month) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//         default:
//             console.log("Invalid Month");
//             break;
//     }
// } else {
//     console.log("Please enter a valid month");
// }

// 24. Given a number 1–5, print it in words ("one", "two", ...).
// let day = Number(prompt("Enter the number (1-5)"))
// if (Number.isFinite(day)) {
//     if (day === 1) {
//         console.log("One")
//     } else if (day === 2) {
//         console.log("Two")
//     } else if (day === 3) {
//         console.log("Three")
//     } else if (day === 4) {
//         console.log("Four")
//     } else if (day === 5) {
//         console.log("Five")
//     }
// } else {
//     console.log("Please enter any valid day between (1-5)")
// }

// 25. Build a calculator: read two numbers and an operator code (1 add, 2 subtract, 3 multiply, 4 divide).

// let firstNum = Number(prompt("Enter the first number"))
// let secondNum = Number(prompt("Enter the second number"))
// let operatorCode = Number(prompt("select 1 for add, 2 for subtract, 3 for multiply, 4 for divide"))
// if (Number.isFinite(firstNum) && Number.isFinite(secondNum)) {
//     switch (operatorCode) {
//         case 1:
//             console.log(firstNum + secondNum);
//             break;
//         case 2:
//             console.log(firstNum - secondNum);
//             break;
//         case 3:
//             console.log(firstNum * secondNum);
//             break;
//         case 4:
//             console.log(firstNum / secondNum);
//             break;
//         default:
//             console.log("select choice is not available")
//     }
// } else {
//     console.log("Please enter any valid numbers")
// }

// 26. Given a day number (1–7), use fall-through so 6 and 7 print "Weekend", others "Weekday".

// let day = Number(prompt("Enter any day"))
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Weekday")
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend")
//         break;
//     default:
//         console.log("Invalid day")
//         break;
// }

// 27. Given age, use grouped cases: 0–4 "Free", 5–10 "100", 11–14 "200", else "500".

// let age = Number(prompt("Enter age"))
// switch (age) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Free");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("100")
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         console.log("200")
//         break;
//     default:
//         console.log("500")
//         break;
// }

// Part D — switch (strings)
// 28. Given a traffic light colour string, print the action ("red"/"yellow"/"green").

// let color = prompt("Enter traffic light color")
// switch (color) {
//     case "red":
//         console.log("Stop")
//         break;
//     case "yellow":
//         console.log("Wait")
//         break;
//     case "green":
//         console.log("Go")
//         break;
//     default:
//         console.log("Invalid traffic light colour")
//         break;
// }

// 29. Given a grade letter ("A"–"F"), print a remark ("Excellent", "Good", ... "Fail")

// let grade = prompt("Enter your grade (A-F):")
// switch (grade) {
//     case 'A':
//         console.log("Excellent")
//         break;
//     case 'B':
//         console.log("Very Good")
//         break;
//     case 'C':
//         console.log("Good")
//         break;
//     case 'D':
//         console.log("Satisfactory")
//         break;
//     case 'E':
//         console.log("Needs Improvement")
//         break;
//     case 'F':
//         console.log("Fail")
//         break;
//     default:
//         console.log("Invalid Grade")
//         break;
// }

// 30. Given a fruit name, print its price; use default for unknown fruit.
// let fruit = prompt("Enter fruit name:");

// switch (fruit) {

//     case "apple":
//         console.log("Apple price: ₹100/kg");
//         break;

//     case "banana":
//         console.log("Banana price: ₹60/dozen");
//         break;

//     case "mango":
//         console.log("Mango price: ₹150/kg");
//         break;

//     case "orange":
//         console.log("Orange price: ₹80/kg");
//         break;

//     default:
//         console.log("Unknown fruit");
//         break;
// }
