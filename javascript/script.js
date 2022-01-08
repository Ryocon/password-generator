// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

// variables set for each possible selection of characters for use in the password
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// to see what special characters generated
console.log(specialCharacters)

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz"

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberCharacters = "0123456789"

// blank variable for new password
var password = ""

// blank variable to compile possible password options within
var possibleChars = ""

// first prompt to get user input on password length
var passwordLength = prompt("How many characters between 8-128 would you like?")

// password is parsed into an integer from a string
var passwordLength = parseInt(passwordLength)

debugger

// used to check if user input is an integer (although it doesn't always seem to work!)
if (Number.isNaN(passwordLength.value)) {
    alert("Pick a number please!")
    return null
}

// used to check if the parameters of password length is correct through the user input
if (passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number between 8-128, please")
    return null
}

// confirms for true or false on the users preference for their password
var hasSpecialChar = confirm("Would you like special characters?")

var hasLowerCase = confirm("Would you like lower case?")

var hasUpperCase = confirm("Would you like upper case?")

var hasNumbers = confirm("Would you like numbers?")

// used to make sure a user has selected at least one of the available options
if(!hasSpecialChar && !hasLowerCase && !hasUpperCase && !hasNumbers) {
    alert("Please pick at least one of the options")
    return null
}

// if statement block used to concatonate/add possible characters for the users password
if (hasSpecialChar) {
  possibleChars += specialCharacters
}

if (hasLowerCase) {
  possibleChars += lowerCharacters
}

if (hasUpperCase) {
  possibleChars += upperCharacters
}

if (hasNumbers) {
  possibleChars += numberCharacters
}

// for loop using random assignment from the possible options and the users selected password length to generate an appropriate password
for (var i = 0; i < passwordLength; i++) {
  password += possibleChars[Math.floor(Math.random() * possibleChars.length)]
}

return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);