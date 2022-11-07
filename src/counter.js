function coin(value) {
  return function(money){
    return Math.floor(money / value);
  }
}

function remains(value) {
  return function (money) {
    return money % value;
  }
}

const usaCoins = [
  [20, '20 dollar bill'],
  [10, '10 dollar bill'],
  [5, '5 dollar bill'],
  [1, '1 dollar bill'],
  [.25,'quarter'],
  [.1,'dime'],
  [.05,'nickel'],
  [.01,'penny']
];

function MoneyFunction(counter) {
  return function (currency) {
    return function (money) {
      if (isNaN(money)) {
        return "Sir, thats not real money";
      }
      if (money <= 0) {
        return "Thanks for using Bank of America ATM";
      } else {
        console.log(currency[counter][1] + 's: ' + coin(currency[counter][0])(money));
        return MoneyFunction(counter + 1)(currency)(remains(currency[counter][0])(money))
      }
    }
  }
}

const countMoney = MoneyFunction(0);
const usaChange = countMoney(usaCoins);