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
  if (isLowercase != true) {
    isLowercase = null
  }
  var isUppercase = window.confirm("Would you like to include uppercase letters?");
  console.log("isUppercase: " + isUppercase);
  if (isUppercase != true) {
    isUppercase = null
  }
  var isNumbers = window.confirm("Would you like to include numbers?");
  console.log("isNumbers: " + isNumbers);
  if (isNumbers != true) {
    isNumbers = null
  }
  var isSpecial = window.confirm("Would you like to include special characters?")
  console.log("isSpecial: " + isSpecial);
  if (isSpecial != true) {
    isSpecial = null
  }
  var userAnswers = {
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isNumbers: isNumbers,
    isSpecial: isSpecial,
    length: length
  };
  return userAnswers;
}

function makePassword() {
  var userAnswers = getUserAnswers();
  console.log(userAnswers);

  if (userAnswers.isLowercase) {
    userAnswers.isLowercase = options.lowercase;
  } else {
    userAnswers.isLowercase = [0];
  }
  if (userAnswers.isUppercase) {
    userAnswers.isUppercase = options.uppercase;
  } else {
    userAnswers.isUppercase = [0];
  }
  if (userAnswers.isNumbers) {
    userAnswers.isNumbers = options.numbers;
  } else {
    userAnswers.isNumbers = [0];
  }
  if (userAnswers.isSpecial) {
    userAnswers.isSpecial = options.special;
  } else {
    userAnswers.isSpecial = [0];
  };
  return userAnswers;
}


// Generate Password
function generateRandom(userAnswers) {
  var userAnswers = makePassword();
  console.log(userAnswers);

  var isUserAnswers = [ ...userAnswers.isLowercase, ...userAnswers.isUppercase, ...userAnswers.isNumbers, ...userAnswers.isSpecial];
  console.log(isUserAnswers);
  
  var length = userAnswers.length;
  var password = [];
  for ( var i = 0; i < length; i++ ) {
    password = password + Math.floor(Math.random() * isUserAnswers);
  };

  return password;

};

// Write password to the #password input
function displayPassword() {

  var password = generateRandom();
  console.log(password);
  var passwordText = document.querySelector("#password");

  return passwordText.textContent = "Your new password is " + password;
};

displayPassword();

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener('click', makePassword);
