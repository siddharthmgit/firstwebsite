// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://upload.wikimedia.org/wikipedia/commons/e/e7/Firefox_logo%2C_2019.png") {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Mozilla_Firefox_wordmark.png?_=20120313194220");
  } else {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/e/e7/Firefox_logo%2C_2019.png");
  }
});

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});