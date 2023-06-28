// Declare all characters
var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = letters.toUpperCase();
var numbers = "1234567890";
var special = " !#$%^&*)('+=,-_./?:;<>@[]{}|~`"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Be able to choose a length between 8 and 128 characters
// Ask for character types to be included
function generatePassword() {
  var length = window.prompt("Enter password length between 8 and 128 characters.");
    if (!length) {
      return;
    }
  
  var lowercase = window.confirm("Would you like to include lowercase letters?");
    if (!lowercase) {
    password = (!lowercase);
    }

  var uppercase = window.confirm("Would you like to include uppercase letters?");
    if (!uppercase) {
    password = (!uppercase)
    }

  var numbers = window.confirm("Would you like to include numbers?");
    if (!numbers) {
    password = (!numbers)
    }

  var special = window.confirm("Would you like to include special characters?")
    if (!special) {
    password = (!special)
    }
  }
// Generate Password
  
 // let generate = '';
   // for (let i = 0; i < length; i++ ) {
   // generate += Math.floor(Math.random() * generatePassword())}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());
