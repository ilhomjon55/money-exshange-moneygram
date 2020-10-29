var formExchange = document.querySelector('.form-exchange');
var convertMoneyToUzs = function (evt) {

  evt.preventDefault();

  var currencyChoice = document.querySelector('.form-select');
  currencyChoice = parseFloat(currencyChoice.value.trim(), 10);

  var inputExchange = document.querySelector('.user-money');
  inputExchange = parseFloat(inputExchange.value.trim(), 10);

  if (isNaN(inputExchange)) {
    alert('Please, enter a number!');
    return;
  }

  if (inputExchange >= 0) {
    var resultExchange = document.querySelector('.result-money');
    resultExchange.textContent = parseFloat((currencyChoice * inputExchange).toFixed(2), 10);
  } else {
    alert('Please, enter a positive number!');
  }

};


formExchange.addEventListener('submit', convertMoneyToUzs);