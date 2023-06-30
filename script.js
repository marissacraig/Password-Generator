// Declare all characters
var options = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  special: ["\"", "\ ", "\!", "\#", "\$", "\%", "\^", "\&", "\*", "\)", "\(", "\'", "\+", "\=", "\,", "\-", "\_", "\.", "\/", "\?", "\:", "\;", "\<", "\>", "\@", "\[", "\]", "\{", "\}", "\|", "\~", "\`"],
};

// Be able to choose a length between 8 and 128 characters
// Ask for character types to be included
function getUserAnswers() {

  var length = window.prompt("Enter password length between 8 and 128 characters.");
  if (length < 8) {
    return;
  }

  var isLowercase = window.confirm("Would you like to include lowercase letters?");
  console.log("isLowercase: " + isLowercase);

  var isUppercase = window.confirm("Would you like to include uppercase letters?");
  console.log("isUppercase: " + isUppercase);

  var isNumbers = window.confirm("Would you like to include numbers?");
  console.log("isNumbers: " + isNumbers);

  var isSpecial = window.confirm("Would you like to include special characters?")
  console.log("isSpecial: " + isSpecial);

  var userAnswers = {
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isNumbers: isNumbers,
    isSpecial: isSpecial,
    length: length
  };
  return userAnswers;
};

function makePassword() {
  var userAnswers = getUserAnswers();
  var password = [];
  var availableCharacters = [];
  console.log(userAnswers);

  if (userAnswers.isLowercase) {
    availableCharacters.concat(options.lowercase);
    console.log(availableCharacters.concat(options.lowercase));
  }

  if (userAnswers.isUppercase) {
    availableCharacters.concat(options.uppercase);
    console.log(availableCharacters.concat(options.uppercase));
  }

  if (userAnswers.isNumbers) {
    availableCharacters.concat(options.numbers);
    console.log(availableCharacters.concat(options.numbers));
  }

  if (userAnswers.isSpecial) {
    availableCharacters.concat(options.special);
    console.log(availableCharacters.concat(options.special));
  }
  return password;
}

// //var writePassword = function () {
//   // Generate Password
// var passwords = makePassword();
// var newPassword = Math.floor(Math.random() * availableCharacters().length);
//   console.log(newPassword);
// };


// Write password to the #password input
function displayPassword() {
  var password = makePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
};

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', displayPassword);


