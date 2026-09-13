console.log(document.getElementById("main"));
console.log(document.getElementsByClassName("para"));
console.log(document.getElementsByTagName("p"));

console.log(document.querySelector("#main"));
console.log(document.querySelector(".para"));
console.log(document.querySelector("p"));

console.log(document.querySelectorAll(".para"));
console.log(document.querySelectorAll("p"));

var heading = document.getElementById("main");

// console.log(heading.innerText);
// console.log(heading.textContent);
// console.log(heading.innerHTML);

// heading.innerText = "Bye Bye World";
// heading.innerText = "Bye Bye <u> World</u>";
// heading.innerHTML = "Bye Bye <u> World</u>";

// console.log(heading.attributes);
// console.log(heading.getAttribute("id"));

// heading.setAttribute("class", "new");

// overwrite existing css
// heading.style = "border:2px solid orange";

// heading.style.border = "2px solid orange";

// heading.classList.add("bye_bye");
// heading.classList.remove("new");

// console.log(heading.classList);

// heading.addEventListener("click", (e) => {
//   heading.innerText = "good night";
//   console.log(e.target);
// });

// const audio = new Audio("path");
// audio.play();
