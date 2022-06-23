var characterlength = 8;
var choiceArray = [];

var uppercaseArray =
  ("A",
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
  "Z");
var lowercaseArray =
  ("a",
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
  "z");
var numberArray = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var characterArray =
  ("!", "@", "$", "%", "^", "&", "*", "!", "?", "#", "_", "=", "+");

// Assignment code here}
generateBtn = document.quierySelector("generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
function generatePassword() {
  //Generate Password based on the prompts
  var password = "";
  // STING IS NOT WORKING**
  for (var i = 0; 1 < characterlength; i++) {
    var randomIndex = math.floor(math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}
function getPrompts() {
  choiceArray = [];

  CharacterLength = parseInt(prompt("Please choose 8 to 128 characters")); //NAN

  if (isNaN(CharacterLength) || CharacterLength < 8 || CharacterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits. Please try again. "
    );
    return false;
  }

  if (confirm("Would you like to Add Lower Case Letters in your password?")) {
    choiceArray = characterArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like to Add Upper Case Letters in your password?")) {
    choiceArray = characterArray.concat(upperCaseArray);
  }
  if (confirm("Would you like to Add Numbers in your password?")) {
    choiceArray = characterArray.concat(numberArray);
  }
  if (confirm("Would you like to Add special characters in your password?")) {
    choiceArray = characterArray.concat(specialcharacterArray);
  }
  return true;
}
