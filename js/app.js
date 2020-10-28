var formExchange = document.querySelector('.form-exchange');
var currencyChoice = parseFloat(formExchange.querySelector('.currency_choice').value.trim(), 10);
var inputExchange = parseFloat(formExchange.querySelector('.user-money').value.trim(), 10);
var resultExchange = formExchange.querySelector('.result-money');

formExchange.addEventListener('submit', function (evt) {
  evt.preventDefault();


  if (inputExchange > 0) {
    resultExchange.textContent = currencyChoice * inputExchange;
  } else {
    alert('Something went wrong');
  }

});