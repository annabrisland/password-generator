// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declare password criteria variables
var passLength;
var lowerCase;
var upperCase;
var num;
var specChar;

// Function to prompt user for password options
function getPasswordOptions() {
// Write prompt to ask for length
passLength = prompt("What length should the password be? Please choose a number between 8 and 128.");

// Write Confirm to ask what to include
lowerCase = confirm("Should it include lowercase characters?");
upperCase = confirm("Should it include uppercase characters?");
num = confirm("Should it include numeric characters?");
specChar = confirm("Should it include special characters ($@%&*,)?");

// Validate and confirm length and at least one type is selected
if (passLength < 8 | passLength > 128) {
  alert("This length is not between 8 and 128. Randomly choosing an appropriate length.");
  passLength = Math.floor(Math.random() * 121 + 8);
};

 if (!lowerCase && !upperCase && !num && !specChar) {
  alert("At least one criteria must be chosen. Generating a password with the minimum requirement.");
  lowerCase = true;
 };
}

// Function for getting a random element from an array
function getRandom(arr) {
// for each get random element -> math.random

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);