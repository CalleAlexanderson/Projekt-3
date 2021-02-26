"using strict";

const MEDIA_ITEMS_KEY = "app.mediaItem";


//hittar alla radio på sidan
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");
let currentlySelectedChapters = document.querySelector("#chapters");
let currentlySelectedScore = document.querySelector("#scores");
let currentlySelectedComplete = document.querySelector("#complete-box");
let currentlySelectedMediaName = document.querySelector("#media-title");
let currentlySelectedMedia = button;
let mediaList = [];

document.querySelector("#button1").addEventListener("click", dropdownFunction1);
//visar min dropdown meny när jag klickar på knappen
function dropdownFunction1() {
  document.querySelector("#type-menu").classList.toggle("show");
}

console.log(currentlySelectedChapters);
console.log(currentlySelectedMedia);
console.log(currentlySelectedMediaName);
console.log(currentlySelectedScore);
console.log(currentlySelectedComplete);
//gör ett event när man klickar i en radio
choices.forEach((choice) => {
  choice.addEventListener("click", selectDifferentMedia);
});

//Ändrar knappens text beroende på radio 
function selectDifferentMedia(e){
  currentlySelectedMedia = e.target.value;
  button.innerHTML = currentlySelectedMedia;
}

document.querySelector(".add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let newMediaItem = createMediaItem(currentlySelectedMediaName.value, currentlySelectedMedia.value, currentlySelectedScore.value, currentlySelectedChapters.value, currentlySelectedComplete.checked)
  console.log(newMediaItem);
});

function createMediaItem(name, score, media, chapters, complete) {
  return {
      id: Date.now().toString(),
      name,
      score,
      media,
      chapters,
      complete
  };
}

function generateMediaItemHTML(currentlySelectedComplete, currentlySelectedMediaName, currentlySelectedScore, currentlySelectedMedia, currentlySelectedChapters) {
  let mediaList = document.createElement("div");

  mediaList.classList.add("list.item");
  if (currentlySelectedComplete === true) {
      mediaList.classList.add("completed");
  } else {
      mediaList.classList.add("incomplete");
  }

  currentlySelectedMediaName = createElement("h2");
  currentlySelectedMediaName.innerHTML = currentlySelectedMediaName;
  mediaList.append(currentlySelectedMediaName);

  currentlySelectedScore = createElement("p");
  currentlySelectedScore.innerHTML = currentlySelectedScore;
  mediaList.append(currentlySelectedScore);

  currentlySelectedMedia = createElement("p");
  currentlySelectedMedia.innerHTML = currentlySelectedMedia;
  mediaList.append(currentlySelectedMedia);

  currentlySelectedChapters = createElement("p");
  currentlySelectedChapters.innerHTML = currentlySelectedChapters;
  mediaList.append(currentlySelectedChapters);

  document.querySelector(".full-list").append(mediaList);

  if(currentlySelectedMedia === "Manwha"){
    document.querySelector(".manwha-list").append(mediaList);
  } else if(currentlySelectedMedia === "Manga") {
    document.querySelector(".manga-list").append(mediaList);
  } else if(currentlySelectedMedia === "Lightnovel"){
    document.querySelector(".ln-list").append(mediaList);
  }
}

function updateList() {
  document.querySelector(".list").innerHTML = "";
  mediaList.forEach((item) => {
      createMediaItem(item.currentlySelectedMediaName, item.currentlySelectedScore, item.currentlySelectedChapters, currentlySelectedComplete);
  });
}

