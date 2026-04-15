/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}
let myButton = document.querySelector('button'); // [cite: 75]
let myHeading = document.querySelector('h1'); // [cite: 75]

function setUserName() {
  let myName = prompt('Please enter your name.'); // [cite: 80, 95]
  
  if(!myName) {
    setUserName(); // [cite: 82, 88]
  } else {
    localStorage.setItem('name', myName); // [cite: 89, 97]
    myHeading.innerHTML = 'Велком, ' + myName; // [cite: 90, 98]
  }
}

// Перевірка при завантаженні
if(!localStorage.getItem('name')) { // [cite: 100, 114]
  setUserName(); // [cite: 101]
} else {
  let storedName = localStorage.getItem('name'); // [cite: 110, 115]
  myHeading.innerHTML = 'Велком, ' + storedName; // [cite: 111, 115]
}

// Обробка натискання кнопки
myButton.onclick = function() { // [cite: 116, 118]
  setUserName(); // [cite: 118]
}