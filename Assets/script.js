// Assignment Code
  var generateBtn = document.querySelector("#generate");

  var password = document.getElementById("#password");



  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",  "=", ];
  var passwordLength = 128;
  var possibleCharacters =[];

  function generatePassword(upperCase, lowerCase, numbers, specialCharacters) {

for ( var i = 0; i < passwordLength; i++) {
  var password = window.crypto.getRandomValues(writePassword);
  return password;
  
}

}
//has the user verify the length of password they want
var passwordLength= window.prompt("How many characters would you like your password to contain?");
if (passwordLength > 128) {
  alert("Password must be less than 129 characters");
  var passwordLength= window.prompt("How many characters would you like your password to contain?");
}



var includeSpecialCharacters = window.confirm("Click to confirm to include special characters.");
var includeNumericCharacters = window.confirm("Click to confirm to include numberic characters.");
var includeLowercaseCharacters = window.confirm("click to confirm to include lowercase characters.");
var includeUppercaseCharacters = window.confirm("click to confirm to include uppercase characters.");




if  (includeSpecialCharacters) {

}
if (includeNumericCharacters){

}
if (includeLowercaseCharacters){

}
if (includeUppercaseCharacters){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
console.log(password);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

