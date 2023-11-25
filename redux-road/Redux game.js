const initialWagonState = {
    supplies: 100, 
    distance: 0, 
    days: 0, 
    cash: 200
}

const gameReducer = (state=initialWagonState, action) => {
    switch(action.type){
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                days: state.days + 1
            }; 
        }
        case 'travel': {
          if(state.supplies-20*action.payload < 0){
            return state} else {
              return {
                ...state, 
                supplies: state.supplies - 20 * action.payload, 
                distance: state.distance + 10 * action.payload, 
                days: state.days + action.payload
            }
            }
        }
        case 'tippedWagon': {
            return {
                ...state,
                supplies: state.supplies - 30, 
                days: state.days + 1
            }
        }
        case 'sell': {
          return {
            ...state, 
            supplies: state.supplies - 20,
            cash: state.cash + 5
          }
        }
        case 'buy': {
          return {
            ...state, 
            supplies: state.supplies + 25, 
            cash: state.cash - 15
          }
        }
        case 'theft': {
          return {
            ...state, 
            cash: state.cash * 0.5
          }
        }
        default: 
        return state; 
    }
}
//add loop to play 
const actions = ['travel', 'gather', 'tippedWagon', 'sell', 'buy', 'theft']
let wagon = gameReducer(undefined, {});
let action = {type: 'start'};
while (wagon.cash > 0 || wagon.supplies > 0){
    console.log(wagon, action);
    action = {type: actions[Math.floor(Math.random() * actions.length)] }
    if (action.type === "travel"){
        action = {
            ...action,
            payload: Math.floor(Math.random() * 5)
        }
    }
    wagon = gameReducer(wagon, action)
}
console.log("Last action ")
console.log(action)
console.log("After " + wagon.days + " days, all cash or supplies ran out")

// start the game according to tasks

/*
let wagon = gameReducer(undefined, {});
console.log(wagon)

wagon = gameReducer(wagon, {type: 'travel', payload: 1})
console.log(wagon)

wagon = gameReducer(wagon, {type: 'gather'})
console.log(wagon)

wagon = gameReducer(wagon, {type: 'tippedWagon'})
console.log(wagon)

wagon = gameReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon)

wagon = gameReducer(wagon, {type: 'travel', payload: 4})
console.log(wagon)*/

