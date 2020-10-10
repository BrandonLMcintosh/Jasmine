
it('should calculate the monthly rate correctly', function () {
  let value1 = {
    amount: 10000, 
    years: 10, 
    rate: 5.0}
  expect(calculateMonthlyPayment(value1)).toEqual(106.07);
});

it('should display 0 for $0 amounts', function(){
  let value1 = {
    amount: 0,
    years: 10,
    rate: 5.0
  };
  expect(calculateMonthlyPayment(value1)).toEqual(0);
});

it('should display simple (amount/years)/12 for rates = 0', function(){
  let value1 = {
    amount: 10000,
    years: 10,
    rate: 0
  };
  expect(calculateMonthlyPayment(value1)).toEqual(83.33);
});

it('should display (f)ull amount + full interest)/12 for years = 0', function(){
  let value1 = {
    amount: 10000,
    years: 0,
    rate: 10
  }
  expect(calculateMonthlyPayment(value1)).toEqual(10100);
});

it('should display amount/12 for years = 0 and rate = 0', function(){
  let value1 = {
    amount: 10000, 
    years: 0, 
    rate: 0
  };
  expect(calculateMonthlyPayment(value1)).toEqual(10000);
})
it("should return a result with 2 decimal places", function() {
  let value1 = {
    amount: 15000, 
    years: 4, 
    rate: 7.8
  }
  expect(calculateMonthlyPayment(value1)).toEqual(364.79);
});

it('should handle multi-digit integer rates', function(){
  let value1 = {
    amount: 10000,
    years: 10,
    rate: 100
  }
  expect(calculateMonthlyPayment(value1)).toEqual(833.39);
});
