const gameReducer = require('./Redux-game');

const wagon = {
  supplies: 100, 
  distance: 0, 
  days: 0, 
  cash: 200
}

describe('Redux game', ()=>{
  test('it will initialize game', () => {
    expect(gameReducer(undefined, {})).toEqual(wagon);
  });

  test('it will gather supplies by 15 and increment a day', ()=>{
    expect(gameReducer(wagon, {type: 'gather'})).toEqual({
    supplies: 115, 
    distance: 0, 
    days: 1, 
    cash: 200
  })
}); 
  test('travel will decrease supplies by 20 times of per payload, and increase distance by 10 times per payload, and days increase by the payload', ()=>{
    expect(gameReducer(wagon, {type: 'travel', payload: 1})).toEqual({
          supplies: 80, 
          distance: 10, 
          days: 1, 
          cash: 200
        })
  }); 
  test('When tippedWagon happens, supplies decrease by 30, days goes up by 1', ()=>{
    expect(gameReducer(wagon, {type: 'tippedWagon'})).toEqual({
      supplies: 70, 
      distance: 0, 
      days: 1, 
      cash: 200
    })
  }); 
  test('When action is sell, supplies decrease by 20, cash goes up by 5', ()=>{
    expect(gameReducer(wagon, {type: 'sell'})).toEqual({
      supplies: 80, 
      distance: 0,
      days: 0, 
      cash: 205
    })
  }); 
  test('When action is buy, supplies increases by 25, cash decreases by 15', ()=>{
    expect(gameReducer(wagon, {type: 'buy'})).toEqual({
      supplies: 125, 
      distance: 0, 
      days: 0, 
      cash: 185
    })
  })
  test('When it is theft, lose half of the cash', ()=>{
    expect(gameReducer(wagon, {type: 'theft'})).toEqual({
      supplies: 100, 
      distance: 0, 
      days: 0, 
      cash: 100
    })
  })
  test('When an unknown action is given, the same state should be returned', ()=>{
    expect(gameReducer(wagon, {type: 'fake'})).toEqual(wagon)
  })

})

