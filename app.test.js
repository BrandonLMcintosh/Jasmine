it('should calculate the high tax bracket', function(){
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
});
it('should calculate the low tax bracket', function(){
    expect(calculateTaxes(1000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
});