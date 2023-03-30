// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePass1() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePass1);

// ahhhhhhhhhhhhhh

let numOfChar = "";
let specialChar = false;
let numChar = false;
let lowerChar = false;
let upperChar = false;
let passChars = [""];

function writePass1(){
  let passFirst = prompt("How many characters would you like your password to contain?");

    if (passFirst < 8){
      alert("The password must contain at least 8 characters.")
    }
    else if (passFirst > 128){
      alert("The password can contain at most 128 characters.")
    }
    else{
      numChar = passFirst;
      alert(passFirst)
      writePass2();
    }
}

function writePass2(){
  if (confirm("Click OK to confirm including special characters.")){
    specialChar = true;
  } else{specialChar = false}
  if (confirm("Click OK to confirm including numbers.")){
    numChar = true;
  } else{numChar = false}
  if (confirm("Click OK to confirm using lowercase letters.")){
    lowerChar = true;
  } else{lowerChar = false}
  if (confirm("Click OK to confirm using uppercase letters.")){
    upperChar = true;
  } else{numChar = false}
  if (specialChar || numChar || lowerChar || upperChar === true){
    writePass33();
  } else{
    alert("Must confirm at least one option")
    writePass2();
  }
}

function writePass3(){

}