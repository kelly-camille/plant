import {changeState, feed, hydrate, giveLight} from '../src/plant.js';

describe('hydrate', () => {
  test('water should increase by one each time the function runs', () => {
    expect(hydrate(1)().toEqual(1));
  })
})