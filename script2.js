// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

debugger

function generatePassword() {

var specialCharacters = "!@#$%^&*()"

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz"

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberCharacters = "0123456789"

var newPassword = ''

var passwordLength = parseInt(prompt("How many characters between 8-128 would you like?"), 8) 

confirm("Special character?")

if (Number.isNaN(passwordLength)) {
    alert("Pick a number please!");
    return null
}

if (passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number between 8-128, please")
}



var hasSymbol= confirm(
    'do you want to include symbols'
)


// if( !symbol && !upper && !lower && !number) {
//     alert("you suck")
// }


function includeSymble (){
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}



if(hasSymbol){
    var randomesymbol = includeSymble()
    newPassword += specialCharacters

}


for(i = newPassword.length; i < passwordLength; i++) {

    newPassword += newPassword[Math.floor(Math.random() * newPassword.length)]
}

passwordText.value = newPassword;

}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
  

  

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);