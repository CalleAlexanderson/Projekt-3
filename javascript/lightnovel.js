"using strict";




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