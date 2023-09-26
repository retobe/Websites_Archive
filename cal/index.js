

const operatorButtons = document.querySelectorAll('.operator');
let selectedButton = null;
let selectedButtonId = null;
let operator = null
let justSelected = false;
let previousNumber = null;
// Add a click event listener to each button
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id; // Parse the button ID as an integer
    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }
    switch (buttonId) {
      case "box3":
        operator = "/"
        break;
      case "box4":
        operator = "*"
        break;
      case "box8":
        operator = "-"
        break;
      case "box12":
        operator = "+"
        break;
      default:
        operator = null;
        break;
    }
    // If there is a previously selected button, remove the "selected" class
    // Add the "selected" class to the clicked button
    button.classList.add('selected');
    justSelected = true;
    // Set the clicked button as the selected button
    selectedButton = button;

  });
});


// Get all the divs with class "number"
const numberButtons = document.querySelectorAll('.number');

// Add a click event listener to each button
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the number from the button text
    const number = button.querySelector('h3').textContent;
    const resultContent = document.getElementById("result").textContent
    // Log the number that was clicked
    if (selectedButton) {
      if (justSelected === true) {
        if (resultContent) {
          previousNumber = parseInt(resultContent);
          document.getElementById("result").innerText = number
          return justSelected = false;
        } else {
          return document.getElementById("result").innerText += number
        }
      }
    }
    document.getElementById("result").innerText += number

  });
});

const clearButtons = document.querySelectorAll('.clear');

clearButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById("result").innerText = "";
    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }
    justSelected = false;
    selectedButtonId = null
  });
});

const miscButtons = document.querySelectorAll('.misc');

miscButtons.forEach(button => {
  button.addEventListener('click', () => {
    var currentText = document.getElementById("result").textContent

    if (button.querySelector('h3').textContent === ".") {
      if (currentText.includes(".")) {
        return;
      } else {
        document.getElementById("result").innerText += "."
      }
    } else {
      currentText = currentText.slice(0, -1);
      document.getElementById("result").innerText = currentText
    }
  });
});


const enterButton = document.querySelector(".enter")

enterButton.addEventListener('click', () => {
  let currentNumber = parseInt(document.getElementById("result").textContent);
  let answer = null;
  if (previousNumber) {
    switch (operator) {
      case "-":
        document.getElementById("result").innerHTML = Math.abs(currentNumber -= previousNumber)
        break;
      case "+":
        document.getElementById("result").innerText = (currentNumber += previousNumber)
        break;
      case "/":
        document.getElementById("result").innerText = (previousNumber /= currentNumber);
      case "*":
        document.getElementById("result").innerText = (previousNumber *= currentNumber);
        break;
      default:
        break;
    }
  }
})

