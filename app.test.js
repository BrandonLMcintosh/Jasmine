it('should calculate the high tax bracket', function(){
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
});

it('should calculate the low tax bracket', function(){
    expect(calculateTaxes(10000)).toEqual(1500);
});

it('should remove duplicates from array', function(){
    expect(removeDupes([1,1,1,2,3,4])).toEqual([1,2,3,4]);
    expect(removeDupes([1,2,3])).toEqual([1,2,3]);
})