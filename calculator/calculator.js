window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.querySelector('#loan-amount');
  let years = document.querySelector('#loan-years');
  let rate = document.querySelector('#loan-rate');
  amount.value = 15000;
  years.value = 5;
  rate.value = 7.9;
  // numAmount = Number(amount.value);
  // numYears = Number(years.value);
  // numRate = Number(rate.value);
  let decimalRate = rate.value / 100;
  value = {amount: amount.value, years: years.value, rate: decimalRate}
  updateMonthly(calculateMonthlyPayment(value));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let value = getCurrentUIValues();
  value.rate = value.rate / 100;
  updateMonthly(calculateMonthlyPayment(value));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(value) {
// monthly payment=(P×i)/(1−(1+i)^n)
// P = Amount of principle
// i = periodic interest rate (in our case yearly rate ÷ 12)
// n = total number of payments (years × 12)
  let periodicInterest = value.rate / 12;
  let numPayments = value.years * 12;
  let monthlyPayment = ((value.amount * periodicInterest)/(1-(1+periodicInterest)**(numPayments * -1))).toFixed(2);
  console.log(monthlyPayment);
  return monthlyPayment;
  // return ((amount * periodicInterest)/(1-Math.pow((1+periodicInterest), numOfPayments)));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = monthly;
}
