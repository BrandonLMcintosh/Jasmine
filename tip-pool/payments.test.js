describe('Tests for payments', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('should generate the current payment with user input (createCurPayment)', function(){
        //should return a valid payment object in object format
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '10', tipPercent: 10});
    });

    it('should not generate the current payment with no entry in either billAmt or tipAmt', function(){
        billAmtInput.value = '';
        tipAmtInput.value = 10;
        //expect that an empty billAmt will return undefined
        expect(createCurPayment()).toEqual(undefined);
        billAmtInput.value = 100;
        tipAmtInput.value = '';
        //expect that an empty tipAmt will return undefined
        expect(createCurPayment()).toEqual(undefined);
    });

    it('should only create one table row for each appended payment on the table (appendPaymentTable)', function(){
        appendPaymentTable(createCurPayment());
        let tableRows = document.querySelectorAll('#paymentTable tbody tr');
        expect(Object.keys(tableRows).length).toEqual(1);
    });

    it('should handle multiple payments to the table (appendPaymentTable)', function(){
        appendPaymentTable(createCurPayment());
        appendPaymentTable(createCurPayment());
        appendPaymentTable(createCurPayment());
        appendPaymentTable(createCurPayment());
        let tableRows = document.querySelectorAll('#paymentTable tbody tr');
        expect(Object.keys(tableRows).length).toEqual(4);
    });

    it('should only append 4 TDs for each TR on the table (appendPaymentTable)', function(){
        appendPaymentTable(createCurPayment());
        let tableDatas = document.querySelectorAll('#paymentTable tbody tr:first-child td');
        expect(Object.keys(tableDatas).length).toEqual(4);
    });

    it('should update the summary of payments once a new payment is submitted (updateSummary)', function(){
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        let values1 = {};
        values1.td1 = summaryTds[0].value;
        values1.td2 = summaryTds[1].value;
        values1.td3 = summaryTds[2].value;

        updateSummary();

        values2 = {};
        values2.td1 = summaryTds[0].value;
        values2.td2 = summaryTds[1].value;
        values2.td3 = summaryTds[2].value;
        expect(values1 == values2).toEqual(false);
    });

    it('should reset the input values after submitting payment (submitPaymentInfo)', function(){
        submitPaymentInfo();
        function anonymous(){
            return billAmtInput.value === '' && tipAmtInput.value === '';
        }
        expect(anonymous()).toEqual(true);
    });

    afterEach(function(){
        serverId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        allServers = {};
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        for(let td in summaryTds){
            td.innerText = '';
        };
    });
});