// variables in the global scope so they can be called anywhere in the javascript
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
    //
    generatePassword();
  }

  // Lets us know that if the password entered is less than 8 or greater than 128 characters it is invalid.
  if (userInput < 8 || userInput > 128) {
    window.alert("Password Length Must Be Between 8 and 128 characters");
    generatePassword();
  } else {
    //confirms if user wants numbers in their password
    // concat is used to combine two or more arrays
    if (confirm("Would you like to include numbers in your password?")) {
      optionsCart = optionsCart.concat(numberList);
    }
    //confirms if user wants uppercase letters in their password
    if (
      confirm("Would you like to include uppercase letters in your password?")
    ) {
      optionsCart = optionsCart.concat(uppercaseList);
    }
    //confirms if user wants lower letters in their password
    if (
      confirm("Would you like to include lowercase letters in your password?")
    ) {
      optionsCart = optionsCart.concat(lowercaseList);
    }
    //confirms if user wants symbols in their password
    if (confirm("Would you like to include symbols in your password?")) {
      optionsCart = optionsCart.concat(symbolList);
    }
    //lets user know that if they didnt pick any options they cant generate a password and runs the generate password function again so they can do it again
    if (optionsCart.length === 0) {
      alert(
        "You must choose atleast one type of charcater to generate a password"
      );
      generatePassword();
    } else {
      for (var i = 0; i < userInput; i++) {
        var random = Math.floor(Math.random() * optionsCart.length);
        generatedPassword += optionsCart[random];
      }
    }
  }
  document.querySelector("#password").innerHTML = generatedPassword;
}

generateBtn.addEventListener("click", generatePassword);
