// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = "!@#$%^&*()"

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz"

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberCharacters = "0123456789"

debugger

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = prompt("How many characters (between 12-128) would you like in your password?")

  var lowerCase = confirm("lowercase letters?")

  var upperCase = confirm("UPPERCASE LETTERS?")

  var numbers = confirm("Numb3r5?")

  var specials = confirm("Special characters?")

  // why?
  var minimumCount = 0


// why?
  var minimumNumbers = ""
  var minimumLowerCases = ""
  var minimumUpperCases = ""
  var minimumSpecialCharacters = ""


// does this even work? I see an example with numbers that seem arbitrary
  var functionArray = {
    lowerCharacters: function() {
      return String.fromCharCode(Math.floor(Math.random))
    },

    upperCharacters: function() {
      return String.fromCharCode(Math.floor(Math.random))
    },

    numberCharacters: function() {
      return String.fromCharCode(Math.floor(Math.random))
    },

    specialCharacters: function() {
      return String.fromCharCode(Math.floor(Math.random))
    }
  }

if (lowerCase === true) {
  minimumNumbers = functionArray.lowerCharacters()
  minimumCount++
}

if (upperCase === true) {
  minimumNumbers = functionArray.upperCharacters()
  minimumCount++
}

if (numbers === true) {
  minimumNumbers = functionArray.numberCharacters()
  minimumCount++
}

if (specials === true) {
  minimumNumbers = functionArray.specialCharacters()
  minimumCount++
}

var randomPasswordGenerated = ""

for (var i =0; i <= (parseInt(passwordLength) - minimumCount); i++ ) {
  var randomNumberPicked = Math.floor(Math.random())

  randomPasswordGenerated += randomNumberPicked
}

// what even is this?
randomPasswordGenerated += minimumLowerCases
randomPasswordGenerated += minimumUpperCases
randomPasswordGenerated += minimumNumbers
randomPasswordGenerated += minimumSpecialCharacters

return randomPasswordGenerated

}