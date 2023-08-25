const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', ()=>{
  describe('.aanounceDawn', ()=>{
    it('returns a rooster call', ()=>{
      //setup
      const expected = 'moo!'
      //excersie 
      const result = Rooster.announceDawn()
      //verify
      assert.equal(expected, result)
    });
  });
  describe('.timeAtDawn', ()=>{
    it('returns its argument as a string', ()=>{
      //setup
      const hour = 22;
      const string = 'string';

      //exercise
      const resultString = typeof Rooster.timeAtDawn(hour)
      //verify
      assert.strictEqual(string, resultString)
    });
    it('throws an error if passed a number less than 0',()=>{
      const inputNum = -10; 
  
      assert.throws(
        ()=>{
        Rooster.timeAtDawn(inputNum)
        }, 
        RangeError)
      });
    it('throws an error if passed a number greater than 23',()=>{
      const inputNum = 28; 
  
      assert.throws(
        ()=>{
        Rooster.timeAtDawn(inputNum)
        }, 
        RangeError)
      });
    });
  });
