describe('Tests for helpers', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        allPayments = {}
        numPayments = 3;
        for(i = 0; i < numPayments; i++){
            allPayments['payment' + (i+1)] = createCurPayment();
        }
    });
    it('should find the sum of all payments put together (sumPaymentTotal)', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });

    it('should not include $0 payments', function(){
        allPayments['payment5'] = {
            billAmt: 0,
            tipAmt: 0,
            tipPercent: 0
        }
        expect(sumPaymentTotal('billAmt')).toEqual(300);
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
        expect(newTr.firstChild.innerText).toEqual('testing 12345');
        newTr = null;
    });
    afterEach(function(){
        allPayments = {};
        let payments = document.querySelectorAll('#paymentTable tbody');
        payments.innerHTML = '';
        for(let td in summaryTds){
            td.value = '';
        };
    });
});