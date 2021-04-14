function calculateBill(){
    var billTotal = 0;
    function setBill(billType){
        var billItems = billType.split(",");
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
    }

    function getBill(){
        return "R"+billTotal.toFixed(2);
    }

    function colours(){
        if(billTotal >= 20 && billTotal < 30){
            return "warning";
        }

        else if (billTotal >= 30){
            return "danger"
        }
    }

    return {
        setBill,
        getBill,
        colours,
    }
}