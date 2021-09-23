// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var uppercase = confirm("Do you want to use uppercase letters?")
  console.log (uppercase)

  var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var totalCharacters = "";

  if (uppercase === true) {
    totalCharacters = totalCharacters.concat(uppercaseLetters) 
    console.log(totalCharacters)
  }

  var lowercase = confirm("Do you want to use lowercase letters?")

  var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";

  if (lowercase === true) {
    totalCharacters = totalCharacters.concat(lowercaseLetters) 
    console.log(totalCharacters)
  }

  var numbers = confirm("Do you want to use numbers?")

  var numbersString = "1234567890";

  if (numbers === true) {
    totalCharacters = totalCharacters.concat(numbersString) 
    console.log(totalCharacters)
  }

  var specialChar = confirm("Do you want to use a special character?")

  var specialCharString = "~!@#$%^&*()_+`{}|:<>?[];',./";

  if (specialChar === true) {
    totalCharacters = totalCharacters.concat(specialCharString) 
    console.log(totalCharacters)
  }

  var passLength = prompt("Please choose a password length between 8 - 128 characters")

  if (passLength < 8 || passLength > 128) {
    window.prompt ("Choose a password BETWEEN 8 - 128 characters")
  }

  if (isNaN(passLength)) {
    window.prompt ("Choose only numbers")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
