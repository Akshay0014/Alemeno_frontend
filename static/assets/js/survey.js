survey_id = 1;
kidEaterType = '';
var interval;
setlectedAnswers = [];
email = "";
_email = "";
questions = [];
testResults = [];
currentQuestion = 0;
var score = 0;
age = 0;

eaterTypes = [
    {
        id: 4,
        type: 'Healthy eater'
    },
    {
        id: 3,
        type: 'Regular eater'
    },
    {
        id: 2,
        type: 'Average picky eater'
    },
    {
        id: 1,
        type: 'Severe picky eater'
    },
    {
        id: 0,
        type: 'Extreme picky eater'
    },
];

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        return true;

    } else {

        alert("Invalid email address!");

        return false;

    }

}

function printPdf(name) {
    elem = document.getElementById('cmd');
    downloadElem = document.getElementById('download-button');
    docBody = document.body;
    elem.style.display = 'none'
    if (downloadElem) {
        downloadElem.style.display = 'none'
    }

    html2canvas(docBody, {
        scale: "5"
    }).then(canvas => {
        var pdf = new jsPDF();
        this.imgFile = canvas.toDataURL("image/jpeg", 0.3);
        const imgProps = pdf.getImageProperties(canvas);
        pdf.internal.pageSize.setHeight(imgProps.height)
        pdf.internal.pageSize.setWidth(imgProps.width)
        pdf.addImage(this.imgFile, "JPEG", 5, 5, imgProps.width, imgProps.height);
        pdf.save(name);
        elem.style.display = ''
        if (downloadElem) {
            downloadElem.style.display = ''
        }

    });
}
