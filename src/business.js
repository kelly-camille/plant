// reference code


// Business Logic
class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
    this.hp = 10;
  }
}

// This function stores our state.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// This is a function factory. 
// We can easily create more specific functions that 
// alter a plant's soil, water, and light to varying degrees.
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value,
    });
  };
};

// We create four functions using our function factory. 
// We could easily create many more.
// give food +
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

//give water +
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

// give light +
const light = changeState("light")(1);
const sunLight = changeState("light")(5);

// give HP +
const potion = changeState("hp")(1);
const powerPotion = changeState("hp")(5);

// damage -
const dandelionSmash = changeState("hp")(-2);
const venusFlykick = changeState("hp")(-4);

// Damage over time
const removeSoil = changeState("soil")(-1);
// function removeSoil(){
//   console.log("removed soil");
//   changeState("soil")(-1);
// } 
const removeWater = changeState("water")(-1);
// function removeWater(){
//   console.log("removed water");
//   changeState("water")(-1);
// } 
const removeHP = changeState("hp")(-1);
// function removeHP(){
//   console.log("removed hp");
//   changeState("hp")(-1);
// }

const removeLight = changeState("light")(-1);


//init
const initSoil = changeState("soil")(0);
const initWater = changeState("water")(0);
const initLight = changeState("light")(0);
const initHP = changeState("hp")(10);

function setTimer(){
  setInterval(() => stateControl(removeSoil), 1000);
  setInterval(() => stateControl(removeWater), 1000);
  setInterval(() => stateControl(removeLight), 1000); 
  setInterval(() => stateControl(removeHP), 1000);
  setInterval(() => update(), 1000);
}

function init(){
  stateControl(initSoil);
  stateControl(initWater);
  stateControl(initLight);
  stateControl(initHP);
  const currentState = stateControl();
  document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  document.getElementById('light-value').innerText = `Light: ${currentState.light}`;
  document.getElementById('hp-value').innerText = `HP: ${currentState.hp}`;
}

// UI Logic
window.onload = function() {
  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function() {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };
  document.getElementById('water').onclick = function() {
    const newState = stateControl(superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };
  document.getElementById('giveLight').onclick = function() {
    const newState = stateControl(sunLight);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  };
  document.getElementById('damage').onclick = function() {
    const newState = stateControl(venusFlykick);
    document.getElementById('hp-value').innerText = `HP: ${newState.hp}`;
  };
  document.getElementById('init').onclick = function() {
    init();
    setTimer();
    document.getElementById('init').className = "hidden";
  };

  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    update();
  };
};

function update(){
  const currentState = stateControl();
  document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  document.getElementById('light-value').innerText = `Light: ${currentState.light}`;
  document.getElementById('hp-value').innerText = `HP: ${currentState.hp}`;
}


// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// }

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// }
//   this.soil ++

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// }