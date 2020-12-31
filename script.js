// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("What would you like your password to be?") });

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
