// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword(length) {
  var password = "Abcdefgh00005678910!!";
  var passwordText = document.querySelector("#password");
  
  passwordText.value =  password;

}
  

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("What would you like the length of the password to be?")});

var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("Must be at least 8 characters and no more than 128 characters")})

var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("What kind of character types are needed in the password?")});

var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("lowercase, uppercase, numeric, and/or special characters")});

