"using strict";

let currentlySelcetedMedia;
//hittar alla radio på sidan
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");let currentlySelcetedChapters;
let currentlySelcetedScore;
let currentlySelcetedComplete;
let mediaList = [];

//visar min dropdown meny när jag klickar på knappen
function dropdownFunction1() {
  document.getElementById("type-menu").classList.toggle("show");
}

//gör ett event när man klickar i en radio
choices.forEach((choice) => {
  choice.addEventListener("click", selectDifferentMedia);
});

//
function selectDifferentMedia(e){
  currentlySelcetedMedia = e.target.value;
  button.innerHTML = currentlySelcetedMedia;
}


let currentlySelcetedMediaName = {
  
}

function addToList(){
  mediaList.push(mediaName);
}