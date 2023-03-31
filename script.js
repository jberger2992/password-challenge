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
let numError = "Please enter a number from 8 to 128.";

function writePass1(){
  
  let passFirst = prompt("How many characters would you like your password to contain?");
    if (passFirst < 8){
      alert(numError)
    }
    else if (passFirst > 128){
      alert(numError)
    }
    else{
      numOfChar = passFirst;
      writePass2();
    }
}

function writePass2(){
  if (confirm("Click OK to confirm including special characters.")){
    specialChar = true;
  }
  if (confirm("Click OK to confirm including numbers.")){
    numChar = true;
  }
  if (confirm("Click OK to confirm using lowercase letters.")){
    lowerChar = true;
  }
  if (confirm("Click OK to confirm using uppercase letters.")){
    upperChar = true;
  }
  if (specialChar || numChar || lowerChar || upperChar === true){
    writePass3();
  } else{
    alert("Must confirm at least one option")
    writePass2();
  }
}

drawRandom = ""

function writePass3(){
  let passChars = [];
  var passwordText = document.querySelector("#password");


  if(specialChar === true){
    passChars.push("!","#","$","%","&","(","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~");
  }
  if(numChar === true){
    passChars.push("1","2","3","4","5","6","7","8","9","0");
  }
  if(lowerChar === true){
    passChars.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if(upperChar === true){
    passChars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  for (let i = 0; i < numOfChar; i++) {
    drawRandom += passChars[Math.floor(Math.random() * passChars.length)];
  }
  passwordText.value = drawRandom;
}

