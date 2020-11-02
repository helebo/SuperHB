// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

//Loads the sound effect player upon page load, so that the sound will play also for the first click.
Object.onload=document.getElementById("btnSearch").addEventListener("click", function () {
  document.getElementById("linkAudio").play();});

const burgers = [
  "Mr Classic Burger",
  "BBQ Burger",
  "Bacon Cheese Burger",
  "Secret Burger",
  "BBQ Pulled Pork",
  "Truffle Burger",
  "Spicy Pulled Pork",
  "The Blues",
  "Grilled Chicken 🔥",
  "Crispy Falaffel Burger",
  "Vendetta 🔥",
  "Kebab Burger"

];

const burgersImg = [
  "image/burgers/mrclassic.jpeg",
  "image/burgers/bbqburger.jpeg",
  "image/burgers/bccheese.jpeg",
  "image/burgers/secretburg.jpeg",
  "image/burgers/pulledpork.jpeg",
  "image/burgers/truffleburg.jpeg",
  "image/burgers/spicypulled.jpeg",
  "image/burgers/theblues.jpeg",
  "image/burgers/grilledchicken.jpeg",
  "image/burgers/falafelbur.jpeg",
  "image/burgers/vendetta.jpeg",
  "image/burgers/kebab.jpeg"
]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function GetBurger()
{ //Takes the random integer and finds the element with that index in both the arrays
  var random = randomIntFromInterval(1,11)
  document.getElementById("messageBurgerImg").src = burgersImg[random]; //They are both inserted
  document.getElementById("messageBurger").innerHTML = burgers[random];
  
}
