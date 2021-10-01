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

  var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var totalCharacters = ""; 
  var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  var numbersString = "1234567890";
  var specialCharString = "~!@#$%^&*()_+`{}|:<>?[];',./";
  
  function findCharacters () {
    var uppercase = confirm("Do you want to use uppercase letters?")
    var lowercase = confirm("Do you want to use lowercase letters?");
    var numbers = confirm("Do you want to use numbers?");
    var specialChar = confirm("Do you want to use a special character?")
    
    if (uppercase === true) {
      totalCharacters = totalCharacters.concat(uppercaseLetters) 
      console.log(totalCharacters)
    }

    if (lowercase === true) {
      totalCharacters = totalCharacters.concat(lowercaseLetters) 
      console.log(totalCharacters)
    }

    if (numbers === true) {
      totalCharacters = totalCharacters.concat(numbersString) 
      console.log(totalCharacters)
    }
  
    if (specialChar === true) {
      totalCharacters = totalCharacters.concat(specialCharString) 
      console.log(totalCharacters)
    }

    if (totalCharacters.length === 0) {
      alert("Please choose at least one type of character")
      findCharacters()
    }

  }

  findCharacters()

var passLength;
function getLength(){
  passLength = prompt("Please choose a password length between 8 - 128 characters")
return passLength
}
getLength()

  if (passLength < 8 || passLength > 128) {
    window.alert("Choose a password BETWEEN 8 - 128 characters")
    getLength()
  }

  if (isNaN(passLength)) {
    window.alert("Choose only numbers")
    getLength()
  }
  console.log("password length = " + passLength)

  var password = "";
for(var i = 0; i < passLength; i++) {
  var index = Math.floor (Math.random() * totalCharacters.length);
  password = password.concat(totalCharacters[index])
}

return password;
}






//WHAT WE HAVE
//what the password is made of (numbers, letters, etc)
//know how long it should be
//WHAT WE NEED
//you need to use a for loop, and you need to iterate through the totalCharacters var as many times as the password is long
//choose a random character 17 times (Math.random)
//as it chooses a random character, you need to PUSH that character to the final password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
