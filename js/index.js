import { dates } from "./data";

const timeline = document.querySelector(".timeline");

// inside the timeline once user opens  
// index qq

function getCard(index) {
  const { date, title, image, fullDescription} = dates[index]; // why is image and summary grey  ?

  // create element has the same variable as the creating ID's and append child 

  const timelineOpenBox = document.createElement("div"); // container
  const timelineOpenDate = document.createElement("span");
  const timelineOpenTitle = document.createElement("h2");
  const timelineOpenDescription = document.createElement("p");
  const timelineOpenImage = document.createElement("img");
  const closeOpenTimeline = document.createElement("span");

  /* Adding ID's to the elements created.*/
  timelineOpenDescription.setAttribute ("id", "modal-full-description");
  timelineOpenBox.setAttribute("id", "modal-container"); // container
  timelineOpenDate.setAttribute("id", "modal-date");
  timelineOpenTitle.setAttribute("id", "modal-title");
  timelineOpenTitle.setAttribute("alt", title);
  timelineOpenImage.setAttribute("id", "modal-image");
  timelineOpenImage.setAttribute("src", image);
  closeOpenTimeline.setAttribute("id", "modal-close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullInfo = document.createTextNode (fullDescription); // link to data js ()

// image is not re-defined because? ??? 
  timelineOpenDate.appendChild(dateText);
  timelineOpenTitle.appendChild(titleText);
  timelineOpenDescription.appendChild(fullInfo); 

  timelineOpenBox.appendChild(timelineOpenDate);
  timelineOpenBox.appendChild(timelineOpenImage);
  timelineOpenBox.appendChild(timelineOpenTitle);
  timelineOpenBox.appendChild(timelineOpenDescription); 

  // does not have any data from js, will be used later to make close button 
  timelineOpenBox.appendChild(closeOpenTimeline); 

}

closeOpenTimeline.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    timeline.removeChild(timelineOpenBox);
  },
  false
);

timelineOpenBox.style.display = "flex";
timeline.prepend(timelineOpenBox);

//outside the timeline 
dates.map(({ date, title, summary }, index) => {
  const margin = document.createElement ("div");
  const titleTimeline = document.createElement("h2");
  const detailsTimeline = document.createElement("p");
  const openButton = document.createElement ("button");
  const dateInfo = document.createElement("span");


  margin.setAttribute ("class", "timeline-item");
  titleTimeline.setAttribute ("class", "timeline-item-title");
  dateInfo.setAttribute("class", "timeline-item-date");
  detailsTimeline.setAttribute("class", "imeline-item-summary");
  openButton.setAttribute("class", "timeline-item-more-info");
  openButton.setAttribute("data-index", index);

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const overall = document.createTextNode(summary); 
  const moreInfo = document.createTextNode(openButton); 

  // these babies live under the Text node, so once the data that's been passed through them has been declared above. You need to repass them as 'child' 

  margin.appendChild(titleTimeline);
  margin.appendChild(dateInfo);
  margin.appendChild(detailsTimeline);
  margin.appendChild(openButton);

  titleTimeline.appendChild(titleText);
  dateInfo.appendChild(dateText);
  detailsTimeline.appendChild(overall);

  // DIFFERENT 
  detailsTimeline.appendChild(moreInfo); 


openButton.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    if (index) getCard(index);
  },
  false
);

timeline.appendChild(margin);
});

// // User clicks on read more/ read less on timeline 
//   const buttonRead = document.querySelector("Read More");
//   const buttonClose = document.querySelector("Read Less");

//   buttonRead.addEventListener("click", respondClick);
//   buttonClose.addEventListener("click", respondClick);


  // mouse over example 

  // const y = document.querySelector("hovering");

  // y.addEventListener("mouseover", respondMouseOver);
  // y.addEventListener("mouseover", respondMouseOut);

  // function respondMouseOver() {
  //   document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
  // }

  // function respondMouseOut() {
  //   document.querySelector("#effect") .innerHTML += "MouseOut Event" + "<br>";
  // }
