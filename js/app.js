var formExchangeBtn = document.querySelector('.form__btn');


formExchange.addEventListener('click', function (evt) {
  evt.preventDefault();

  var currencyChoice = document.querySelector('.form-select');
  currencyChoice = parseFloat(currencyChoice.value.trim(), 10);

  var inputExchange = document.querySelector('.user-money');
  inputExchange = parseFloat(inputExchange.value.trim(), 10);

  var resultExchange = formExchange.querySelector('.result-money');

  if (inputExchange > 0) {
    resultExchange.textContent = currencyChoice * inputExchange;
  } else {
    alert('Something went wrong');
  }

});