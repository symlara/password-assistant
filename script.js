// Assignment code here
var enter;
var characterType;
var number;
var Lowercase;
var Uppercase;


// special chatacters
character = ["!", "$", "#", "&", "%", "_" , "~ "];

//number characters
number = [1, 2, 3, 4, 5, 6];

//letter characters 
alpha = ["a", "b", "c", "D", "e", "f", "g", "h", "i" , "j", "k" ];

// choices for user input
var choices = [];


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");



// function to generate password 

function generatePassword() {
  
  enter = parseInt(prompt("What would you like the length of the password to be? Choose between 8 and 128"));

if(!enter) {
  alert("This needs value");
  
} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Choose between 8 or 128"));

} else {
  characterType =  confirm("What character types are in this password?");
  Lowercase = confirm("Will there be lowercase letters?");
  Uppercase = confirm("Will there be uppercase letters?");
  number_input = confirm("Will this password have numbers?");

};

// arrays calling from above 
if(Lowercase){
  choices = choices.concat(alpha)
}

if(Uppercase){
  choices = choices.concat(character);
}

if(number){
  choices = choices.concat(number);
}


var password = [];

for (var i = 0; i < enter; i++) {
  var Choices = choices[Math.floor(Math.random() * choices.length)];
  password.push(Choices);
}
console.log(password);

// turn the array into a string
return password.join("");
}





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




