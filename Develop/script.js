// Declare all characters
var options = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ["1","2","3","4","5","6","7","8","9","0"],
  special: ["\"","\ ","\!","\#","\$","\%","\^","\&","\*","\)","\(","\'","\+","\=","\,","\-","\_","\.","\/","\?","\:","\;","\<","\>","\@","\[","\]","\{","\}","\|","\~","\`"],
};

  // Assignment Code
  var generateBtn = document.querySelector("#generate");


// Be able to choose a length between 8 and 128 characters
// Ask for character types to be included
var generatePassword = function() {
  var answers = getUserAnswers();
  }
  
var getUserAnswers = function() {
  
  var availableCharacters = [];

  var length = window.prompt("Enter password length between 8 and 128 characters.");
    if (!length) {
      return;
    } 
  
  var isLowercase = window.confirm("Would you like to include lowercase letters?");
    if (!isLowercase) {
    } else { availableCharacters.concat(options.lowercase);
    }
    console.log(availableCharacters);

  var uppercase = window.confirm("Would you like to include uppercase letters?");
    if (!uppercase) {
    } else {
      availableCharacters.concat(options.uppercase);
    }
    console.log(availableCharacters);

  var numbers = window.confirm("Would you like to include numbers?");
    if (!numbers) {
    index = (!numbers)
    } 

  var special = window.confirm("Would you like to include special characters?")
    if (!special) {
    index = (!special)
    } 
    console.log("index: " + index);

// Generate Password
  
  
    //for (let i = 0; i = generatePassword.length; i++ ) {
  let index = Math.floor(Math.random() * options.length);



  return index;

  };

  function makePassword() {
      // Write password to the #password input
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
  }
   
  // Add event listener to generate button
  generateBtn.addEventListener("click",  
     makePassword);
