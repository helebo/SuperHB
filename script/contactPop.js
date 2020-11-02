const submitButton = document.getElementById("submit");
const popup = document.getElementById("conpopup");
const close = document.getElementsByClassName("close")[0];
const form = document.getElementById("conform");

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