// Declare all characters
var options = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  special: ["\"", "\ ", "\!", "\#", "\$", "\%", "\^", "\&", "\*", "\)", "\(", "\'", "\+", "\=", "\,", "\-", "\_", "\.", "\/", "\?", "\:", "\;", "\<", "\>", "\@", "\[", "\]", "\{", "\}", "\|", "\~", "\`"],
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword());

// Be able to choose a length between 8 and 128 characters
// Ask for character types to be included
function getUserAnswers() {

  var availableCharacters = [];

  var length = window.prompt("Enter password length between 8 and 128 characters.");
  if (length !== true) {
    return;
  }

  var isLowercase = window.confirm("Would you like to include lowercase letters?");
  if (isLowercase !== true) {
    availableCharacters.splice(options.lowercase);
    console.log(availableCharacters.splice(options.lowercase));
  } else {
    availableCharacters.concat(options.lowercase);
    console.log(availableCharacters.concat(options.lowercase));
  }

  var isUppercase = window.confirm("Would you like to include uppercase letters?");
  if (isUppercase !== true) {
    availableCharacters.splice(options.uppercase);
    console.log(availableCharacters.splice(options.uppercase));
  } else {
    availableCharacters.concat(options.uppercase);
    console.log(availableCharacters.concat(options.uppercase));
  }

  var isNumbers = window.confirm("Would you like to include numbers?");
  if (isNumbers !== true) {
    availableCharacters.splice(options.numbers);
    console.log(availableCharacters.splice(options.numbers));
  } else {
    availableCharacters.concat(options.numbers);
    console.log(availableCharacters.concat(options.numbers));
  }

  var isSpecial = window.confirm("Would you like to include special characters?")
  if (isSpecial !== true) {
    availableCharacters.splice(options.special);
    console.log(availableCharacters.splice(options.special));
  } else {
    availableCharacters.concat(options.special);
    console.log(availableCharacters.concat(options.special));
  }

};

function writePassword() {

  // Generate Password
  for (let i = 0; i = length; i++) {
    Math.floor(Math.random() * (getUserAnswers() * length))
  }
};

// Write password to the #password input
function displayPassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};






