const storeState = () => {
  let currentState = {};
  return (stateChangingFunction) => {
    const newState = stateChangingFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = feed(5);
const greenFood = feed(10);
const yuckyFood = feed(-5);
changeState("soil")(5)(plant);

feed(5)(plant);

blueFood(plant);
module.exports = {changeState, feed, hydrate, giveLight};

