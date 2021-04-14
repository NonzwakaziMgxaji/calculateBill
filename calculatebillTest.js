describe('The calculate bill factory function', function(){
    it('should be able to add the string and return the total for smses and calls', function(){
        let bill = calculateBill();
        bill.setBill("call, sms");
        assert.equal("R3.50", bill.getBill());

        let bill2 = calculateBill();
        bill2.setBill("sms, call, sms, call, sms");
        assert.equal("R7.75", bill2.getBill());
    });

    it('should return "warning" if total exceeds 20 and return "danger" if total exceeds', function(){
        let bill = calculateBill();
        bill.setBill("call, sms, call, call, call, call, call, call, call");
        assert.equal("warning", bill.colours());
        assert.equal("R22.75", bill.getBill())

        let bill2 = calculateBill();
        bill2.setBill("call, sms, call, call, call, call, call, call, call, call, sms, call, call, call, call, call, call, call")
        assert.equal("danger", bill2.colours())
        assert.equal("R45.50", bill2.getBill());
    });
});