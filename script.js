// Assignment code here
var enter;
var characterType;
var number;
var Lowercase;
var Uppercase;


// special chatacters
character = ["!, $, #, &, %, _ , ~ "];

//number characters
number = [1, 2, 3, 4, 5, 6];

//letter characters 
alpha = ["a, b, c, D, e, f, g, h, i , j, k" ];

// choices for user input
var choices;


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  pass = generatePassword();
  document.getElementById("#password")
});

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
  number = confirm("Will this password have numbers?");

};

if (!characterType && !number && !Lowercase && Uppercase) {
  choices = alert("Choose password criteria");

}

// else if for 2 positive options

else if (characterType && number) {
  choices = character.concat(number);
}

else if (characterType && Lowercase) {
  choices = character.concat(alpha);
}

else if (characterType && Uppercase) {
  choices = character.concat(alpha);
}

else if (Lowercase && number) {
  choices = alpha.concat(number);
}

else if (Lowercase && Uppercase) {
  choices = alpha.concat(alpha);
}

else if (number && Uppercase) {
  choices = number.concat(alpha);
}

// else if for 1 positive option

else if (characterType) {
  choices = character;
}
else if (number) {
  choices = number;
}

else if (Uppercase) {
  choices = alpha;
}

else if (Lowercase) {
  choices = alpha;
};

var password = [];

for (var i = 0; i < enter; i++) {
  var Choices = choices[Math.floor(Math.random() * choices.length)];
  password.push(Choices);
}

}





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




