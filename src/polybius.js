// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) { 
    const encoder = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42",
      k: "52", l: "13", m: "23", n: "33", o: "43",
      p: "53", q: "14", r: "24", s: "34", t: "44",
      u: "54", v: "15", w: "25", x: "35", y: "45",
      z: "55", " ": " ",
    };
    const decoder = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f",
      22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m",
      33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s",
      44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y",
      55: "z",
    };

    if (!encode) {
      //this will check if the input is an even or odd number
      let oddTest = input.split(" ").join("");
      if (oddTest.length % 2 === 1) {
        return false;
      }
    }
    input = input.toLowerCase();
    let output = "";
    //the for of loop will take the input letter and match it to the encoder key, it will put that value in the output string
    if (encode) {
      for (let letter of input) {
        output += encoder[letter];
      }
      //the decoder will push the spaces it finds into the output, then couple the numbers back into letters
    } else{
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += " ";
        } else {
          //this will set the temp to the 2 values at these indexes, coupling the numbers back together.
          let temp = `${input[i]}${input[i + 1]}`;
          //the coupled number will be matched to the decoder and put the value in output
          output += decoder[temp];
          //this will increment i by 1 so on the next iteration the next set of numbers will be called
          i++;
        }
      }
    }

    return output;
  }
  return {
    polybius,
  };
})();
  

module.exports = { polybius: polybiusModule.polybius };


