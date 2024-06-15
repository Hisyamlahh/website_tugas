const exchangeRates = {
  USD: 1,
  MYR: 4.72,
  JPY: 157.41,
  EUR: 0.93,
  SAR: 3.75,
  IDR: 16486.5,
};

document
  .getElementById("amount1")
  .addEventListener("input", convertCurrencyFromAmount1);
document
  .getElementById("amount2")
  .addEventListener("input", convertCurrencyFromAmount2);
document
  .getElementById("fromCurrency")
  .addEventListener("change", convertCurrencyFromAmount1);
document
  .getElementById("toCurrency")
  .addEventListener("change", convertCurrencyFromAmount1);
document.getElementById("swapBtn").addEventListener("click", swapCurrencies);

function convertCurrencyFromAmount1() {
  const amount1 = parseFloat(document.getElementById("amount1").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount1)) {
    document.getElementById("amount2").value = "Jumlah tidak valid!";
    return;
  }

  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  const convertedAmount = (amount1 / fromRate) * toRate;

  document.getElementById("amount2").value = convertedAmount.toFixed(2);

  displayResult(convertedAmount, toCurrency);
}

function convertCurrencyFromAmount2() {
  const amount2 = parseFloat(document.getElementById("amount2").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount2)) {
    document.getElementById("amount1").value = "Jumlah tidak valid!";
    return;
  }

  const fromRate = exchangeRates[toCurrency]; // note the swap here
  const toRate = exchangeRates[fromCurrency]; // note the swap here
  const convertedAmount = (amount2 / fromRate) * toRate;

  document.getElementById("amount1").value = convertedAmount.toFixed(2);

  displayResult(convertedAmount, fromCurrency);
}

function displayResult(amount, currency) {
  const resultElement = document.getElementById("result");
  resultElement.textContent =
    amount.toFixed(2) + " " + getCurrencyName(currency);
}

function getCurrencyName(currencyCode) {
  switch (currencyCode) {
    case "USD":
      return "USD";
    case "MYR":
      return "MYR";
    case "JPY":
      return "JPY";
    case "EUR":
      return "EUR";
    case "SAR":
      return "SAR";
    case "IDR":
      return "IDR";
    default:
      return currencyCode;
  }
}

function swapCurrencies() {
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");

  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;

  convertCurrencyFromAmount1();
}
