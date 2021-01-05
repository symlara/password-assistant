// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate").addEventListener("click", function() { alert("What is the password lenght?")});


function generatePassword(length) {
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  password.value = writePassword;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




