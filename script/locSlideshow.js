//locationImages = ["location_olav.jpg", "location""..\media\grill.jpg"]
let slideIndex = 0; //1!
showSlides(slideIndex);

// Function that changes slideshow image when button is clicked.
function plusSlides(n) {
    const slides = document.querySelectorAll(".locSlide");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if (slideIndex<1){slideIndex = slides.length}

    for (i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

// Function that automatically loops through images
function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".locSlide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}