uuid = '';
id_token = '';
order_id = '';
kidData = {};
console.log(window.location.pathname)
if (window.location.pathname.includes("/general/pricing")) {
    getUuid();
    console.log(uuid)
    if (uuid == '') {
        alert("You are notautharised to open this page")
        window.location.pathname = '';
    }
    getKidData();
    selectedOption = 0;
    var paymentOptions;
    document.getElementById("option1").addEventListener('click', function () {
        onSelectOption('1', '2')
    });
    document.getElementById("option2").addEventListener('click', function () {
        onSelectOption('2', '1')
    });

}

function onSelectOption(selectKey, deSelectKey) {
    selectedOption = (Number)(selectKey) - 1;
    checkOfferValidity(selectedOption);
    selectedPlan = selectKey;
    //option
    select = document.getElementById("option" + selectKey);
    desSelect = document.getElementById("option" + deSelectKey);

    // option container
    selectContainer = document.getElementById("option" + selectKey + "-container");
    desSelectContaner = document.getElementById("option" + deSelectKey + "-container");

    //change border colour of selected option
    select.classList.add("selected-option");
    desSelect.classList.remove("selected-option");

    // make size of selected option bigger
    selectContainer.classList.add("col-7");
    selectContainer.classList.remove("col-5");
    desSelectContaner.classList.remove("col-7");
    desSelectContaner.classList.add("col-5");
    selectContainer.classList.add("col-md-5");
    selectContainer.classList.remove("col-md-4");
    desSelectContaner.classList.remove("col-md-5");
    desSelectContaner.classList.add("col-md-4");
    // selectContainer.classList.remove("p-top-10");
    // desSelectContaner.classList.add("p-top-10");

    selectMonthText = document.getElementById("month-text" + selectKey);
    deSelectMonthText = document.getElementById("month-text" + deSelectKey);


    // make month text bold
    selectMonthText.classList.add("selected-month");
    deSelectMonthText.classList.remove("selected-month");

    document.getElementById("pay-button").innerHTML = "Pay Rs" + paymentOptions[(Number)(selectKey) - 1].fields.amount
}

function getPaymentOptions() {
    console.log("getting options");
    var request = new XMLHttpRequest();
    request.open('GET', "/payment/get-payment-options/?&uuid=" + uuid, true);
    request.onload = function () {
        paymentOptions = JSON.parse(request.response)
        console.log(paymentOptions)
        if (paymentOptions[0].fields.duration_months < paymentOptions[1].fields.duration_months) {
            var temp = paymentOptions[0];
            paymentOptions[0] = paymentOptions[1];
            paymentOptions[1] = temp;
        }
        setOptionDetails();
    }
    request.send();
}


function getKidData() {
    var request = new XMLHttpRequest();
    request.open('GET', "/parent/initialize-game?&uuid=" + uuid, true);
    request.onload = function () {
        console.log(request.response)
        kidData = JSON.parse(request.response);
        console.log(kidData)
        getPaymentOptions();
    }
    request.send();
}

function getPaymentStatus() {
    var request = new XMLHttpRequest();
    request.open('GET', "/payment/get-payment-status?order_id=" + order_id, true);
    request.onload = function () {
        res = JSON.parse(request.response);
        console.log(res.success)
        if (res.success) {
            document.getElementById("payment-successful").classList.remove("make-invisible");
            document.getElementById("payment-successful").classList.add("make-visible");

            document.getElementById("payment-failed").classList.remove("make-visible");
            document.getElementById("payment-failed").classList.add("make-invvisible");
        } else {
            getPaymentStatus;
            document.getElementById("payment-successful").classList.add("make-invisible");
            document.getElementById("payment-successful").classList.remove("make-visible");

            document.getElementById("payment-failed").classList.add("make-visible");
            document.getElementById("payment-failed").classList.remove("make-invvisible");
        }
    }
    request.send();
}

function getOrderId() {
    var request = new XMLHttpRequest();
    request.open('POST', "/payment/create-order?", true);
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
            var res = JSON.parse(request.response);
            order_id = res.order_id;
            proceedToPay();
        }
    }
    request.setRequestHeader("Content-Type", "application/json");
    data = {
        "payment_option_id": paymentOptions[selectedOption].pk
    };
    request.send(JSON.stringify(data));
}

function checkOfferValidity(index) {
    time = new Date(paymentOptions[index].fields.offer_validity);
    if (time > Date.now()) {
        document.getElementById("offer_validity").innerHTML = "* Offer valid till " + getDateString(time);
        return true;
    }
    document.getElementById("offer_validity").innerHTML = "";
    return false;
}

function setOptionDetails() {
    if (checkOfferValidity(0)) {
        paymentOptions[0].fields.amount = paymentOptions[0].fields.amount - paymentOptions[0].fields.discount;
    }
    time = new Date(paymentOptions[1].fields.offer_validity);
    if (time > Date.now()) {
        paymentOptions[1].fields.amount = paymentOptions[1].fields.amount - paymentOptions[1].fields.discount;
    }
    monthText1 = document.getElementById("month-text1");
    mrpText1 = document.getElementById("mrp-text1");
    amountText1 = document.getElementById("amount-text1");

    monthText2 = document.getElementById("month-text2");
    mrpText2 = document.getElementById("mrp-text2");
    amountText2 = document.getElementById("amount-text2");

    monthText1.innerHTML = "+" + paymentOptions[0].fields.duration_months + " Months";
    monthText2.innerHTML = "+" + paymentOptions[1].fields.duration_months + " Months";
    mrpText1.innerHTML = "Rs" + paymentOptions[0].fields.mrp;
    mrpText2.innerHTML = "Rs" + paymentOptions[1].fields.mrp;
    amountText1.innerHTML = "Rs" + Math.round(paymentOptions[0].fields.amount / paymentOptions[0].fields.duration_months) + "/Month";
    amountText2.innerHTML = "Rs" + Math.round(paymentOptions[1].fields.amount / paymentOptions[1].fields.duration_months) + "/Month";

    payButton = document.getElementById("pay-button");
    payButton.innerHTML = "Pay Rs." + paymentOptions[0].fields.amount
    payButton.addEventListener('click', opendialog)

}

function proceedToPay() {
    console.log(or)
    var options = {
        // "key": "rzp_test_cmQuNo8mO5KBpM", 
        "key": "rzp_live_3xmbCVnp74upzD",
        // Enter the Key ID generated from the Dashboard
        "amount": paymentOptions[selectedOption].fields.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "description": "Alemeno Subscription",
        "image": "/static/assets/images/logo1.png",
        "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
        },
        "prefill": {
            "name": kidData.kid_name,
            "email": kidData.parent_email,
            // "contact": kidData.parent
        },
        // "notes": {
        //     "address": "Razorpay Corporate Office"
        // },
        "theme": {
            "color": "#5F2EEA"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
        console.log("payment failed");
        alert("payment failed! try again later");
    });
    rzp1.open();
}

function getDateString(date) {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const dateString = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`

    return dateString;
}

function opendialog() {
    document.getElementById("opaque").classList.remove("make-invisible");
    document.getElementById("opaque").classList.add("make-visible");

    document.getElementById("dialog").classList.remove("make-invisible");
    document.getElementById("dialog").classList.add("make-visible");


    document.getElementById("total-amount").innerHTML = paymentOptions[selectedOption].fields.amount;
    document.getElementById("saving-amount").innerHTML = paymentOptions[selectedOption].fields.mrp - paymentOptions[selectedOption].fields.amount;

    planName = "Basic"
    if (selectedOption == 0) {
        planName = "Plus"
    }
    document.getElementById("plan-name").innerHTML = planName;

    document.getElementById("close-dialog").addEventListener('click', removeDialog)

    document.getElementById("actual-price").innerHTML = paymentOptions[selectedOption].fields.mrp;

    document.getElementById("dialog-month").innerHTML = paymentOptions[selectedOption].fields.duration_months;

    const date = new Date(Date.now())
    document.getElementById("dialog-date").innerHTML = getDateString(date);

    document.getElementById("open-rpay").addEventListener('click', getOrderId)
}

function removeDialog() {
    document.getElementById("opaque").classList.add("make-invisible");
    document.getElementById("opaque").classList.remove("make-visible");

    document.getElementById("dialog").classList.add("make-invisible");
    document.getElementById("dialog").classList.remove("make-visible");

}

function getUuid() {
    const uri = window.location;
    const parameters = uri.search.replace('?', '').split('&');
    for (let parameter of parameters) {
        const key = (parameter.split('='))[0];
        const value = (parameter.split('='))[1];
        switch (key) {
            case "uuid":
                uuid = value;
                break;
            case "id_token":
                id_token = value;
                break;
        }
    }
}