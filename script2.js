// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {

// variables set for each possible selection of characters for use in the password
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz"

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberCharacters = "0123456789"

// blank variable for new password
var newPassword = ""

// 
var passwordLength = parseInt(prompt("How many characters between 8-128 would you like?"), 8) 

debugger

if (Number.isNaN(passwordLength.value)) {
    alert("Pick a number please!")
    return null
}

if (passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number between 8-128, please")
    return null
}

var hasSpecialChar = confirm("Would you like special characters?")

var hasLowerCase = confirm("Would you like numbers?")

var hasUpperCase = confirm("Would you like upper case?")

var hasNumbers = confirm("Would you like numbers?")


if(!hasSpecialChar && !hasLowerCase && !hasUpperCase && !hasNumbers) {
    alert("Please pick at least one of the options")
}


function hasSpecialChar() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}

function hasLowerCase() {
    return lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]
}

function hasUpperCase() {
    return upperCharacters[Math.floor(Math.random() * upperCharacters.length)]
}

function hasNumbers() {
    return numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
}

if (hasSpecialChar) {
    // var randomSpecialChar = includeSpecialChar()
    newPassword += specialCharacters
} 

if (hasLowerCase) {
    // var randomLowerCase = includeLowerCase()
    newPassword += lowerCharacters
}

if (hasUpperCase) {
    // var randomUpperCase = includeUpperCase()
    newPassword += upperCharacters
}

if (hasNumbers) {
    // var randomNumber = includeNumber()
    newPassword += numberCharacters
}


for(i = newPassword.length; i < passwordLength; i++) {

    newPassword += newPassword[Math.floor(Math.random() * newPassword.length)]
}

passwordText.value = newPassword

}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
  
  

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)