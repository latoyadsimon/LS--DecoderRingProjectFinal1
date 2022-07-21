// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift = 0, encode = true) {
    let string = [];
    // array to check for special characters
    // blank variable to assign the coded string later
    let encryptDecrypt;
    //guard case if shift is out of limits
    if (shift === 0 || shift < -25 || shift > 25) return false;
    //sets decode mode by making shift a negative number
    if(!encode){
      shift *= -1
    }
    for (let i = 0; i < input.length; i++) {
      //setting all letters to lower case
      let lowerCaseLetter = input.toLowerCase();
      //making all letters char Codes
      let char = lowerCaseLetter.charCodeAt(i);
      //shifted letter
      const shifted = char + shift
      //if letter is not a special character
      //this is lowercase a - z
      if(char >= 97 && char <=122) {
        //shifting letters 
        if(shifted > 122){
          //122 is code for lowercase z so you go back 26 spaces in the alaphabet, this helps it loop back to a
          string.push(shifted - 26)
        } else if(shifted < 97){
          //97 is code for lowercase a so you add 26 spaces back into the alphabet, this helps it loop back to z
          string.push(shifted + 26)
        } else{
          // this will help every other letter go to the string
          string.push(shifted)
        }
        //pushing special characters and spaces into the string
      } else {
        string.push(char);
      }
    }
    //turning char code back to letters and spreading out array
    encryptDecrypt = String.fromCharCode(...string);
    // returning encrypted or decrypted letters
    return encryptDecrypt;
  }

  return {
    caesar,
  };
})();

    

module.exports = { caesar: caesarModule.caesar };
