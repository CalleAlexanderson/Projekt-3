"using strict";

function dropdownFunction() {
  document.getElementById("type-menu").classList.toggle("show");
}
  
let currentlySelcetedMedia;
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");

choices.forEach((choice) => {
  choice.addEventListener("click", selectDifferentMedia);
});

function selectDifferentMedia(e){
  currentlySelcetedMedia = e.target.value;
  button.innerHTML = currentlySelcetedMedia;
}