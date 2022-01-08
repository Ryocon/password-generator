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
var password = ""

var possibleChars = []

var guaranteedChars = []


// var passwordLength = parseInt(prompt("How many characters between 8-128 would you like?"), 8) 
var passwordLength = prompt("How many characters between 8-128 would you like?")

var passwordLengthInt = parseInt(passwordLength)

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

var hasLowerCase = confirm("Would you like lower case?")

var hasUpperCase = confirm("Would you like upper case?")

var hasNumbers = confirm("Would you like numbers?")


if(!hasSpecialChar && !hasLowerCase && !hasUpperCase && !hasNumbers) {
    alert("Please pick at least one of the options")
}


// function hasSpecialChar() {
//     // return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
//     guaranteedCharacters.push(Math.floor(Math.random() * specialCharacters.length))
// }

// function hasLowerCase() {
//     // return lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]
//     guaranteedCharacters.push(Math.floor(Math.random() * lowerCharacters.length))
// }

// function hasUpperCase() {
//     // return upperCharacters[Math.floor(Math.random() * upperCharacters.length)]
//     guaranteedCharacters.push(Math.floor(Math.random() * upperCharacters.length))
// }

// function hasNumbers() {
//     // return numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
//     guaranteedCharacters.push(Math.floor(Math.random() * numberCharacters.length))
// }

if (hasSpecialChar) {
    possibleChars = possibleChars.concat(specialCharacters)
    var randIndex = Math.floor(Math.random() * specialCharacters.length)
    var randElement = specialCharacters[randIndex]
} 

if (hasLowerCase) {
    possibleChars = possibleChars.concat(lowerCharacters)
    var randIndex = Math.floor(Math.random() * lowerCharacters.length)
    var randElement = lowerCharacters[randIndex]
}

if (hasUpperCase) {
    possibleChars = possibleChars.concat(upperCharacters)
    var randIndex = Math.floor(Math.random() * upperCharacters.length)
    var randElement = upperCharacters[randIndex]
}

if (hasNumbers) {
    possibleChars = possibleChars.concat(numberCharacters)
    var randIndex = Math.floor(Math.random() * numberCharacters.length)
    var randElement = numberCharacters[randIndex]
}

guaranteedChars.push(randElement)



for(i = guaranteedChars.length; i < passwordLengthInt; i++) {

    password += randIndex[Math.floor(Math.random() * passwordLengthInt.length)]
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)