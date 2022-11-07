function coin(value) {
  return function(money){
    return Math.floor(money / value);
  }
}

function remains(value) {
  return function (money) {
    //console.log(((money % value)*100) / 100);
    return Math.floor((money % value)*100) / 100;
  }
}

function used(value){
  return function(money){
   //console.log(coin(value)(money) * value);
   return coin(value)(money) * value;
  }
}

const usaCoins = [
  [.25,'quarter'],
  [.1,'dime'],
  [.05,'nickel'],
  [.01,'penny']
];

function moneyFunction(counter) {
  return function (currency) {
    return function (money) {
      if (isNaN(money)) {
        return "Sir, thats not real money";
      }
      if (money <= 0) {
        return "Thanks for using Bank of America ATM";
      }
      if (counter > currency.length){
        return "Thanks for using Bank of America ATM"
      } else {
        console.log(currency[counter][1] + 's: ' + coin(currency[counter][0])(money));
        return moneyFunction(counter + 1)(currency)(remains(currency[counter][0])(money))
      }
    }
  }
}


/*console.log("counter " + (counter + 1));
console.log("value " + currency[counter][0]);
console.log("money " + money);
console.log("remains " + remains(currency[counter][0])(money));*/
//Math.round((money % (currency[counter][0]))*100) / 100

const countMoney = moneyFunction(0);
const usaChange = countMoney(usaCoins);

module.exports = {coin, remains, usaCoins, moneyFunction, countMoney, usaChange};