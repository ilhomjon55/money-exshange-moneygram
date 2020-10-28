// Currency info

var USD_TO_UZS = 10360.96;
var EURO_TO_UZS = 12156.40;
var RUB_TO_UZS = 131.663;
var CYN_TO_UZS = 1540.64;



var elFormExchange = document.querySelector('.form-exchange');
var elFormBtn = document.querySelector('.form__btn');
var inputMoney = parseFloat(elFormExchange.querySelector('.user-money').value.trim(), 10);
var currencyChoice = elFormExchange.querySelector('.form-select');

var resultUzs = document.querySelector('.result-money');


elFormExchange.addEventListener('submit', function (evt) {

  evt.preventDefault();

  if (currencyChoice.value = 'currency_usd') {
    resultUzs.textContent = inputMoney * USD_TO_UZS;
  } else if (currencyChoice.value = 'currency_euro') {
    resultUzs.textContent = inputMoney * EURO_TO_UZS_TO_UZS;
  } else if (currencyChoice.value = 'currency_rub') {
    resultUzs.textContent = inputMoney * RUB_TO_UZS_TO_UZS;
  } else if (currencyChoice.value = 'currency_cyn') {
    resultUzs.textContent = inputMoney * CYN_TO_UZS_TO_UZS;
  } else {
    resultUzs.textContent = 'Something went wrong';
  }

});