//Iterative function to create customer options
function selectPersons() {
    var nrPersons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var personSelect = document.getElementById("persons");

    for (const val of nrPersons) {
        var persOption = document.createElement("option");
        persOption.value = val;
        var t = document.createTextNode(val);
        persOption.appendChild(t);
        personSelect.appendChild(persOption);
    }
}

//Iterative function to create time options
function selectTime() {

    //Vectors for minutes and hour
    var min = ['00', '15', '30', '45'];
    var hour = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

    var timeSelect = document.getElementById('time');

    //For loop to iterate time options
    for (const val1 of hour) {
        for (const val2 of min) {
            var timeOption = document.createElement("option");
            var time = val1 + ':' + val2;
            timeOption.value = time;
            var t1 = document.createTextNode(time);
            timeOption.appendChild(t1);
            timeSelect.appendChild(timeOption);
        }
    }
}

//Returns time for returning table
function selectTimeAlert() {
    var selTime = document.getElementById("time").value;
    var selHour = selTime.split(':');
    var newHour = parseInt(selHour[0]) + 2;
    document.getElementById("alertTime").innerHTML = "You hold your table until " + newHour + ':' + selHour[1];
}

//Checking if selected date is valid (today or any day after today).
//Returns message to chose new date if chosen date is in the past
function selectDateAlert() {
    //Chosen date for reservation
    var selDate = document.getElementById("date").value;

    //Todays date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var selDateSplit = selDate.split('-');
    var selY = parseInt(selDateSplit[0]);
    var selM = parseInt(selDateSplit[1]);
    var selD = parseInt(selDateSplit[2]);

    var alert = 'Ops! Experied date. Please select a new day.';
    var alertDate = document.getElementById("alertDate")

    if (selY < yyyy) {
        alertDate.innerHTML = alert;
    } else if (yyyy == selY && selM < mm) {
        alertDate.innerHTML = alert;
    } else if (yyyy == selY && selM == mm && selD < dd) {
        alertDate.innerHTML = alert;
    } else {
        alertDate.innerHTML = '';
    }

    var fullDate = 'Day: ' + dd + 'Month: ' + mm + 'Year: ' + yyyy;

}

//Alert for confirmed booking
const submitButton = document.getElementById("submitBooking");
const popup = document.getElementById("conpopup");
const close = document.getElementsByClassName("close")[0];
var form = document.getElementById("bookingform");

function popUp() {
    popup.style.display = "block";
}

close.onclick = function() {
    window.location.reload();
}

window.onclick = function(event) {
    if (event.target == popup) {
        window.location.reload();
    }
}

submitButton.addEventListener("click", function(event) {
    if (form.checkValidity()) {
        popUp();
        event.preventDefault();
    }
});


///////////////////
selectPersons();
selectTime();
selectTimeAlert();