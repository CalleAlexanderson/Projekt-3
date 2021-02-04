"using strict";



let currentlySelcetedMedia;
//hittar alla radio på sidan
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");
let currentlySelcetedChapters = document.getElementById("media-title");
let currentlySelcetedScore = document.getElementById("scores");
let currentlySelcetedComplete = document.getElementById("complete-box");
let currentlySelcetedMediaName = document.getElementById("title");
let mediaList = [];

//visar min dropdown meny när jag klickar på knappen
function dropdownFunction1() {
  document.getElementById("type-menu").classList.toggle("show");
  console.log(currentlySelcetedScore);
}

//gör ett event när man klickar i en radio
choices.forEach((choice) => {
  choice.addEventListener("click", selectDifferentMedia);
});

//Ändrar knappens text beroende på radio 
function selectDifferentMedia(e){
  currentlySelcetedMedia = e.target.value;
  button.innerHTML = currentlySelcetedMedia;
}




function addToList(){
  mediaList.push(mediaName);
}