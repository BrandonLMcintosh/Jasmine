
it('should calculate the monthly rate correctly', function () {
  let value1 = {
    amount: 10000, 
    years: 10, 
    rate: 5.0}
  let value2 = {
    amount: 0, 
    years: 10, 
    rate: 1.5}
  expect(calculateMonthlyPayment(value1)).toEqual(106.07);
  expect(calculateMonthlyPayment(value2)).toEqual(0.00);
});


it("should return a result with 2 decimal places", function() {
  let value1 = {
    amount: 15000, 
    years: 4, 
    rate: 7.8
  }
  let value2 = {
    amount: 0, 
    years: 5, 
    rate: 8.0
  }
  expect(calculateMonthlyPayment(value1)).toEqual(364.79);
  expect(calculateMonthlyPayment(value2)).toEqual(0.00);
});

it('should handle multi-digit integer rates', function(){
  let value1 = {
    amount: 10000,
    years: 10,
    rate: 100
  }
  let value2 = {
    amount: 1000,
    years: 10, 
    rate: 500
  }
  expect(calculateMonthlyPayment(value1)).toEqual(833.39);
  expect(calculateMonthlyPayment(value2)).toEqual(4166.67);
});

/// etc
