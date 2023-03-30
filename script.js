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

function writePass1(){
  let passFirst = prompt("How many characters would you like your password to contain?");

    if (passFirst < 8){
      alert("The password must contain at least 8 characters.")
    }
    else if (passFirst > 128){
      alert("The password can contain at most 128 characters.")
    }
    else{
      numOfChar = passFirst;
      writePass2();
    }
}

function writePass2(){
  alert(numOfChar)
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
    writePass3();
  } else{
    alert("Must confirm at least one option")
    writePass2();
  }
}

let ranPass = []

function writePass3(){
  let passChars = [];
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
    drawRandom = passChars[Math.floor(Math.random() * numOfChar)];
    ranPass.push(drawRandom);
  }
}