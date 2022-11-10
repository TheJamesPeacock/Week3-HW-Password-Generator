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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
