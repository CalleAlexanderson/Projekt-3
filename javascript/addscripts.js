"using strict";

const MEDIA_ITEMS_KEY = "app.mediaItem";


//hittar alla radio på sidan
let choices = document.querySelectorAll("input[type='radio']");
let button = document.querySelector("#button1");
let currentlySelectedChapters = document.querySelector("#chapters");
let currentlySelectedScore = document.querySelector("#scores");
let currentlySelectedComplete = document.querySelector("#complete-box");
let currentlySelectedMediaName = document.querySelector("#media-title");
let mediaList = [];

document.querySelector("#button1").addEventListener("click", dropdownFunction1);
//visar min dropdown meny när jag klickar på knappen
function dropdownFunction1() {
  document.querySelector("#type-menu").classList.toggle("show");
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

document.querySelector(".add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let newMediaItem = createMediaItem(currentlySelectedMediaName.value, currentlySelectedScore.value, currentlySelectedMedia, currentlySelectedChapters.value, currentlySelectedComplete.checked)
  mediaList.push(newMediaItem);
  console.log(newMediaItem);
  console.log(mediaList);
  generateMediaItemHTML(mediaList, newMediaItem);
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

function generateMediaItemHTML(list, items) {
  list.forEach((items) => {
    console.log(items);
    let item = [];
    item = document.createElement("div");
    item.classList.add("list-item");
    let itemName = items.name;
    itemName = document.createElement("h2");
    document.querySelector(".full-list").innerHTML = "";
    document.querySelector(".full-list").append(item);
  });
}

/*function updateList() {
  document.querySelector(".full-list").innerHTML = "";
  mediaList.forEach((item) => {
      generateMediaItemHTML(mediaList);
  });
} */

