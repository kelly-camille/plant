import {coin, remains, usaCoins, countMoney, usaChange, moneyFunction} from '../src/counter.js';

describe('coin', () => {
  test('find amount of coins within value and remove decimals', () => {
    expect(coin(.25)(10.32)).toEqual(41);
  })
})

describe('remains', () => {
  test('return the remaining amount of money after the previous change amount was calculated', () => {
    expect(remains(.25)(10.23)).toEqual(.23);
  })
})

describe('moneyFunction', () => {

  test('should return an error message if the input is not a number', () => {
    expect(moneyFunction(0)(.25)('a')).toEqual("Sir, thats not real money");
  })

  test('should return thanks you message once amount is below or equal to 0', () => {
    let output = moneyFunction(0)(usaCoins)(10.23);
    expect(output).toEqual("Thanks for using Bank of America ATM");
  })
  
})

describe('countMoney', () => {
  test('should set moneyFunction counter variable to 0', () => {
    expect(moneyFunction(0)(usaCoins)(1)).toEqual(countMoney(usaCoins)(1));
  })
})

describe('usaChange', () => {
  test('should set countMoney currency variable to usaCoins', () => {
    expect(countMoney(usaCoins)(1)).toEqual(usaChange(1));
  })
})