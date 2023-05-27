// Scroll down to bottom
$('#pricingLink').click(function () {
    $.scrollTo($('#pricingHeader'), 1000);
});


$('#modalSubscriptionForm').submit(function (e) {
    e.preventDefault()
    var fd = new FormData();
    var mobileNumber = document.getElementById('wanum');
    var emailId = document.getElementById('email');
    var consultation = document.getElementById('consultation');


    if (emailId.checkValidity() == false) {
        alert(emailId.validationMessage);
        return false
    }

    if (mobileNumber.checkValidity() == false) {
        alert(mobileNumber.validationMessage);
        return false
    }

    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            fd.append(keyval[0], keyval[1]);
        }
    }
    fd.append('mobile_number', mobileNumber.value);
    fd.append('email_id', emailId.value);
    fd.append('consultation', consultation.checked);
    // for (var p of fd) {
    //     let name = p[0];
    //     let value = p[1];
    //     console.log(name, value)
    // }
    $.ajax({
        type: 'POST',
        url: 'updateSubscriber',
        data: fd,
        processData: false,
        contentType: false
    }).done(function (data) {
    });
    var mobileNumber = document.getElementById('wanum');
    var emailId = document.getElementById('email');
    if (consultation.checked == true) {
        window.location.replace("/general/survey?mobile-number=" + mobileNumber.value);
    }
    if (consultation.checked == false) {
        $('#subscriptionModal').modal('toggle');
        $('#shareDialog').modal('toggle');
    }


});


//
// $('.startTrialForm').submit(function (e) {
//
//     e.preventDefault();
//     var fd = new FormData();
//     var mobileNumber = "";
//     var mobileNumber1 = document.getElementById('wa_num1');
//     var mobileNumber2 = document.getElementById('wa_num2');
//     var mobileNumber3 = document.getElementById('wa_num3');
//
//     // var agree1 = document.getElementById('agree1');
//     // var agree2 = document.getElementById('agree2');
//     // var agree3 = document.getElementById('agree3');
//
//     var sms1 = document.getElementById('sms1');
//     var sms2 = document.getElementById('sms2');
//     var sms3 = document.getElementById('sms3');
//
//     // if (agree1.checked && agree2.checked && agree3.checked) {
//     // } else {
//     //     alert("Please accept the terms and conditions");
//     //     return false
//     // }
//
//
//     if (sms1.checked && sms2.checked && sms3.checked) {
//     } else {
//         alert("Please provide permissions to receive promotional SMS");
//         return false
//     }
//
//
//     if (mobileNumber1.value) {
//         mobileNumber = mobileNumber1;
//     }
//
//     if (mobileNumber2.value) {
//         mobileNumber = mobileNumber2;
//     }
//
//     if (mobileNumber3.value) {
//         mobileNumber = mobileNumber3;
//     }
//
//     // Add UTM Source
//     var self = window.location.toString();
//     var querystring = self.split("?");
//     if (querystring.length > 1) {
//         var pairs = querystring[1].split("&");
//         for (i in pairs) {
//             var keyval = pairs[i].split("=");
//             fd.append(keyval[0], keyval[1]);
//         }
//     }
//
//     fd.append('mobile_number', "+91" + mobileNumber.value);
//
//     // for (var p of fd) {
//     //     let name = p[0];
//     //     let value = p[1];
//     //     console.log(name, value)
//     // }
//
//     $.ajax({
//         type: 'POST',
//         url: 'updateSubscriber',
//         data: fd,
//         processData: false,
//         contentType: false
//     }).done(function (data) {
//         playStoreDialog();
//
//
//
//     });
//
//
// });

function playStoreDialog() {
    $('#confirm')
        .modal({backdrop: 'static', keyboard: false})
        .one('click', '#ok', function (e) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.alemeno.alemeno22");
        });
}


function passUTMOnClick() {
    var utm = window.location.href.split('?')[1];

    if (!utm) {
        utm = '';
    }
    // window.location.replace('/register/?'+utm);
    window.location.href = "https://play.google.com/store/apps/details?id=com.alemeno.alemeno22";


}

function copy() {
    var copyText = document.getElementById("wa-copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    return true;
}


if (window.location.search == '?share-popup=true') {
    $('#shareDialog').modal('toggle')
}

if (window.location.search == '?share-landing-popup=true') {
    playStoreDialog();
}


if (document.getElementById("wa-button")) {
    document.getElementById("wa-button").href = "whatsapp://send?text=" +
        "Kids' fussy eating habits are difficult to deal with. Alemeno provides a fun solution that will make your kids run after you for food." +
        " To know more about this visit "
        + document.location.origin + "/general/landing?utm_source=whatsapp"
}

if (document.getElementById("wa-copy")) {
    document.getElementById("wa-copy").value = document.location.origin + "/general/landing?utm_source=popup_2link"

}

