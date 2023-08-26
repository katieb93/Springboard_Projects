
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 120000,
    years: 50,
    rate: 10,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1006.93');
});

it("should return a crazy long loan with a very small loan amount", function() {
  const values = {
    amount: 2,
    years: 5000,
    rate: 10,
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.02');
});