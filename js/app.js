var formExchange = document.querySelector('.form-exchange');
var resultExchange = document.querySelector('.result-money');


formExchange.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var currencyChoice = document.querySelector('.form-select');
  currencyChoice = parseFloat(currencyChoice.value.trim(), 10);

  var inputExchange = document.querySelector('.user-money');
  inputExchange = parseFloat(inputExchange.value.trim(), 10);



  if (inputExchange > 0) {

    resultExchange.textContent = currencyChoice * inputExchange;
  } else {
    alert('Something went wrong');
  }

});