var characterlength = 8;
var choiceArray = [];

var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = [
  "!",
  "@",
  "$",
  "%",
  "^",
  "&",
  "*",
  "!",
  "?",
  "#",
  "_",
  "=",
  "+",
];

// Assignment code here}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
}

function getPrompts() {
  choiceArray = [];

  var characterLength = parseInt(prompt("Please choose 8 to 128 characters")); //NAN

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits. Please try again. "
    );
    return false;
  }

  if (confirm("Would you like to Add Lower Case Letters in your password?")) {
    choiceArray = characterArray.concat(lowercaseArray);
  }
  if (confirm("Would you like to Add Upper Case Letters in your password?")) {
    choiceArray = characterArray.concat(uppercaseArray);
  }
  if (confirm("Would you like to Add Numbers in your password?")) {
    choiceArray = characterArray.concat(numberArray);
  }
  if (confirm("Would you like to Add special characters in your password?")) {
    choiceArray = characterArray.concat(characterArray);
  }
  generatePassword(choiceArray, characterLength);
}

function generatePassword(choiceArray, characterLength) {
  //Generate Password based on the prompts
  console.log(choiceArray);
  console.log(characterLength);
  var password = [];
  // STING IS NOT WORKING**
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    var makePassword = choiceArray[randomIndex];
    password.push(makePassword);
  }
  // return password;
  var finalPassword = password.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}
