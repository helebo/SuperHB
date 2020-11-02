const submitButton = document.getElementById("submit");
const popup = document.getElementById("conpopup");
const close = document.getElementsByClassName("close")[0];

function popUp(){
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




submitButton.addEventListener('click', (event) =>{
    var isValid = true;
    var conform = document.forms['conform'];
    var formName = conform.elements['name'].value;
    var formPhone = conform.elements['phone'].value;
    var formMessage = conform.elements['message'].value;
    
    if(formName == ''){
        alert('Name field is mandatory');
        isValid = false;
    }
    else if(formPhone == ''){
        isValid = false;
        alert('Phone number is mandatory');
    }
    else if(formPhone > 99999999){
        isValid = false;
        alert('Enter a valid number');
        event.preventDefault();
    }
    else if(formPhone < 9999999){
        isValid = false;
        alert('Enter a valid number');
        event.preventDefault();
    }
    else if(isNaN(formPhone)){
        isValid = false;
        alert('Enter a number');
    }
    else if(formMessage == ''){
        alert('Message field is mandatory');
        isValid = false;
    }
    else{
        popUp();
        event.preventDefault();
    }
});