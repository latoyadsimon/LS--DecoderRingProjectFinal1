// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
      //if no aplha provided, return false 
      if (!alphabet) {
        return false;
      }
      //if alpha isn't 26 chars long return false
      if (alphabet.length !== 26) {
        return false;
      }
      //if any character repeats, return false
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet.lastIndexOf(alphabet[i]) !== i) {
          return false;
        }
      }
      const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
      //this will make the input lowercase
      input = input.toLowerCase();
      // this will push the spaces directly to output
      let output = "";
      if (encode) {
        for (let j of input) {
          if (j === " ") {
            output += " ";
          } else {
            //setting standardAlphabet keys to [j]
            //if the index matches the standardAlphabet, then put alphabet at that index in the output variable
            let indexValue = standardAlphabet.indexOf(j);
            output += alphabet[indexValue];
          }
        }
      } else {
        // this will push the spaces directly to output
        for (let k of input) {
          if (k === " ") {
            output += " ";
          } else {
            //this will decode the message
            //settin the index values of alphabet to k, if they match what is at the index of standard alphabet, put whats in the standard Alphabet index in output 
            let indexValue = alphabet.indexOf(k);
            output += standardAlphabet[indexValue];
          }
        }
      }
      return output;
    }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };



/*
function findPeopleByCity(people, cityToMatch)*/