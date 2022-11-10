// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseList = [];
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }


function generatePassword() {
  var generatedPassword = "";
  var optionsCart = [];
  var userInput = window.prompt("How long do you want your password to be?");

  //This if statement lets us know that if the User Inputed password length is not a number we will get an alert saying that it is not a number
 if (isNaN(userInput)) {
  window.alert("That's not a number!");
  generatePassword()
}

// Lets us know that if the password entered is less than 8 or greater than 128 characters it is invalid.
if (userInput < 8 || userInput > 128) {
  window.alert("Password Length Must Be Between 8 and 128 characters");
  generatePassword()
} else {
  if(confirm("Would you like to include numbers in your password?")) {
    optionsCart = optionsCart.concat(numberList)
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
