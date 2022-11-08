//State - anything we are asking a computer to remember. Defines the current conditions of an application

// This function stores our state
const storeState = () => { // outer function
  let currentState = {}; // will be modified
  return (stateChangingFunction = state => state) => { // inner function that takes another function as an argument -- will specify the exact change that should be made to currentState
    const newState = stateChangingFunction(currentState); //call the function on currentState and save it to newState
    currentState = {...newState}; // makes a copy of newState and saves it as currentState
    return newState;
  }
}

const stateControl = storeState(); // invoking storeState() function and creating a closure over the currentStatevariable. ^^
// holds the inner function and retains the currentState variable from the outer function. 
// 


//This is a function factory
// used to create more specific functions taht alter a plant's soil water and light
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};

// create our functions using ^^ function factory

// give food
const feed = changeState("soil");
const blueFood = feed(5);
const greenFood = feed(10);
const yuckyFood = feed(-5);

const hydrate = changeState("water");
const giveLight = changeState("light");


// changeState("soil")(5)(plant);
// const fedPlant = stateControl(blueFood);
// const plantFedAgain = stateControl(greenFood);
// console.log(fedPlant);

// feed(5)(plant);

// blueFood(plant);
 module.exports = {changeState, feed, hydrate, giveLight, stateControl, blueFood, greenFood};

