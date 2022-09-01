  var generateBtn = document.querySelector("#generate");

  var password = document.getElementById("#password");


//possible character options for the password
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["/", "[", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",  "=", ];
  var passwordLength = 128;
  var possibleCharacters =[];

//randomly generates a password
  function generatePassword(_arrayOfArraysOfCharacters) {
  var password ="";
//has the user verify the length of password they want
var passwordLength= window.prompt("How many characters would you like your password to contain?");
  if (passwordLength > 128) {
  //prompts the user about the passowrd length paramaters 
  alert("Password must be less than 129 characters");
  //allows the user to re-enter password length paramater
  var passwordLength= window.prompt("How many characters would you like your password to contain?");
}
//allows the user to include special characters in their password
var includeSpecialCharacters = window.confirm("Click to confirm to include special characters.");
//allows the user to include numbers in their password
var includeNumericCharacters = window.confirm("Click to confirm to include numberic characters.");
// allows the use to include lowercase characters in their password
var includeLowercaseCharacters = window.confirm("click to confirm to include lowercase characters.");
//allows the user to include uppercase characters in their password
var includeUppercaseCharacters = window.confirm("click to confirm to include uppercase characters.");


  if  (includeSpecialCharacters) {
    possibleCharacters.push(specialCharacters);
}
  if (includeNumericCharacters){
    possibleCharacters.push(numbers);
}
  if (includeLowercaseCharacters){
    possibleCharacters.push(lowerCase);
}
  if (includeUppercaseCharacters){
    possibleCharacters.push(upperCase);
}


for ( var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random()* possibleCharacters.length);
  var individualCharacterIndex = Math.floor(Math.random()* possibleCharacters[index].length);
  password += possibleCharacters[index][individualCharacterIndex];
  console.log(password);

  
	}
  return password;
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




