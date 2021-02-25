"using strict";



let currentlySelectedMedia;
//hittar alla radio på sidan
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");
let currentlySelectedChapters = document.getElementById("chpaters");
let currentlySelectedScore = document.getElementById("scores");
let currentlySelectedComplete = document.getElementById("complete-box");
let currentlySelectedMediaName = document.getElementById("media-title");
let mediaList = [];

//visar min dropdown meny när jag klickar på knappen
function dropdownFunction1() {
  document.getElementById("type-menu").classList.toggle("show");
}

//gör ett event när man klickar i en radio
choices.forEach((choice) => {
  choice.addEventListener("click", selectDifferentMedia);
});

//Ändrar knappens text beroende på radio 
function selectDifferentMedia(e){
  currentlySelectedMedia = e.target.value;
  button.innerHTML = currentlySelectedMedia;
}

function createMediaItem(currentlySelectedMediaName, currentlySelectedScore, currentlySelectedMedia, currentlySelectedChapters, currentlySelectedComplete) {
  return {
      id: new Date().now().toString(),
      currentlySelectedMediaName: currentlySelectedMediaName,
      currentlySelectedScore: currentlySelectedScore,
      currentlySelectedMedia: currentlySelectedMedia,
      currentlySelectedChapters: currentlySelectedChapters,
      currentlySelectedComplete: currentlySelectedComplete
  };
}

function generateMediaItemHTML(currenlySelectedComplete, currentlySelectedMediaName, currentlySelectedScore, currentlySelectedMedia, currentlySelectedChapters) {
  let mediaList = document.createElement("div");

  mediaList.classList.add("list.item");
  if (currenlySelectedComplete === true) {
      mediaList.classList.add("completed");
  } else {
      mediaList.classList.add("incomplete");
  }

  let currentlySelectedMediaName = createElement("h2");
  currentlySelectedMediaName.innerHTML = currentlySelectedMediaName;
  mediaList.append(currentlySelectedMediaName);

  let currentlySelectedScore = createElement("p");
  currentlySelectedScore.innerHTML = currentlySelectedScore;
  mediaList.append(currentlySelectedScore);

  let currentlySelectedMedia = createElement("p");
  currentlySelectedMedia.innerHTML = currentlySelectedMedia;
  mediaList.append(currentlySelectedMedia);

  let currentlySelectedChapters = createElement("p");
  currentlySelectedChapters.innerHTML = currentlySelectedChapters;
  mediaList.append(currentlySelectedChapters);

  document.querySelector(".list").append(mediaList);
}

function updateList() {
  document.querySelector(".list").innerHTML = "";
  mediaList.forEach((item) => {
      createLink(item.href, item.linkText, item.isSpecial);
  });
}

