// Write your tests here!

const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

/*const alphaCode = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
*/


describe("subscribe", () => {
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    
    describe("error handling", () => {
        
        it("The alphabet parameter Should return false if string is not exactly 26 characters", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdibev");
            expect(actual).to.be.false;

        });
        it("All the characters in the alphabet parameter Should be unique. Otherwise, it will return false.",() => {

            const actual = substitution("You are an excellent spy", "xoyqmcxukswaflnthdjpzibev");
            const expected = false;
            expect(actual).to.equal(expected);
        });

    });
    describe("encoding", () => {
        it("Capital letters can be ignored.",() => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);

        })
        it("Spaces should be maintained throughout.",() => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected='elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);

        })
        it("should return encoded input message",() => {

            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected ='elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);
        })
        

    })
    describe("decoding", () => {
        it("The output should include spaces and letters as well as special characters such as #, $, *, etc. if any are given",() => {

            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        })
        
        it("Spaces should be maintained throughout.",() => {
            const actual= substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected ="message";
            expect(actual).to.equal(expected);
    
        })
        it("should return decoded input message",() => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected ="message";
            expect(actual).to.equal(expected);
    
        })
    })
})
    


/**it("",() => {

            const actual= substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected="message";
            expect(actual).to.equal(expected);
        }); */



/**it("",() => {
            const actual:
            const expected:
            expect(actual).to.equal(expected);

        }) */




