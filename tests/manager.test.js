const { it } = require("node:test");
const { describe } = require("yargs");


//THIS IS AN EXAMPLE***

function assertikon() {
    expect (2 + 2).Equal(4);
}

function individualTest() {
    it('should return accurate sums', assertikon);
}


function myTests() {
    describe('This is my chapter', individualTest)
}

describe('This is my testing library', myTests);