var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns output of 5! is 120', ()=>{
      const expResult = 120; 
      const input = 5
      const result = Calculate.factorial(input); 

      assert.strictEqual(result, expResult)
    });

  it('returns output of 3! is 6', ()=>{
      const expResult = 6; 
      const input = 3
      const result = Calculate.factorial(input); 

      assert.strictEqual(result, expResult)
    });

    it('returns 1 of edge case 0!', ()=>{
      const input = 0; 
      const expResult = 1;
      const result = Calculate.factorial(input);
      assert.strictEqual(result, expResult)
    });
  });
});
