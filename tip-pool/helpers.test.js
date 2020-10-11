describe('Tests for helpers', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        allPayments = {}
        numPayments = 4;
        for(i = 0; i < numPayments; i++){
            allPayments['payment' + (i+1)] = createCurPayment();
        }
    });
    it('should find the sum of all payments put together (sumPaymentTotal)', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });

    it('should still calculate sums if there are $0 values', function(){
        billAmtInput.value = 0;
        numPayments = 3;
        for(i = 0; i < numPayments; i++){
            allPayments['payment' + (i+1)] = createCurPayment();
        }
        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it('should calculate tip percentages', function(){
        expect(calculateTipPercent(billAmtInput.value, tipAmtInput.value)).toEqual(10);
    });

    it('should calculate tip percentages even when tip = $0', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        expect(calculateTipPercent(billAmtInput.value, tipAmtInput.value)).toEqual(0);
    });
    it('should append filled td into a TR upon request (appendTd)', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr, 'testing 12345');
        expect(newTr.firstChild.value).toEqual('testing 12345');
        newTr = null;
    });
    afterEach(function(){
        allPayments = {};
        let paymentRows = document.querySelectorAll('#paymentTable tbody tr');
        for(let row in paymentRows){
            row.remove();
        };
        for(let td in summaryTds){
            td.value = '';
        };
    });
});