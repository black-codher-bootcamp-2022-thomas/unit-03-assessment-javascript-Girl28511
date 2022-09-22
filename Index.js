import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, details } = dates[index];
  const box = document.createElement ("span");
  const boxContent = document.createTextNode ("<text>"); 

  const detailsTimeline = document.createElement("p");
  const titleTimeline = document.createElement("h2");
  const openButton = document.createElement ("button");
  const content = document.createElement("p");
  const dateInfo = document.createElement ("span")
  const imageInfo = document.createElement ("img");
  const closeButton = document.createElement ("button");
  const header = document.createElement ("header");

/* Adding ID's to the elements created.*/
  box.setAttribute ("id", "modal-full-description");
  content.setAttribute("id", "modal-container");
  dateTimeline.setAttribute("id", "modal-date");
  header.setAttribute("id", "modal-title");
  image.setAttribute("id", "modal-image");
  closeButton.setAttribute("id", "modal-close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullInfo = document.createTextNode (fulldescription);
  const picture = document.createTextNode (image);
  const detailsText = document.createTextNode(summary);
  
  // Append each new variables to tags created previously

  modalDate.appendChild(dateText);}
  
// User clicks on read more/ read less on timeline 
  const buttonRead = document.querySelector("Read More");
  const buttonClose = document.querySelector("Read Less");

  buttonRead.addEventListener("click", respondClick);
  buttonClose.addEventListener("click", respondClick);


  // mouse over example 

  const y = document.querySelector("hovering");

  y.addEventListener("mouseover", respondMouseOver);
  y.addEventListener("mouseover", respondMouseOut);

  function respondMouseOver() {
    document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
  }

  function respondMouseOut() {
    document.querySelector("#effect") .innerHTML += "MouseOut Event" + "<br>";
  }



  // I'm an object
const birmingham = {
  name: "Birmingham",
  population: "1+ million",
};

function displayPopulation() {
  // Make a new <p></p> for population. This is not attached to the DOM yet.
  const paragraph = document.createElement("p");

  // Make some text content to put into your <p></p>
  const content = document.createTextNode(
    "Population: " + birmingham.name 
  );

  // Put the text content into the <p></p>.
  paragraph.appendChild(content);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(paragraph);
}



function displayPopulationScreen() {
  // Make a new button for population. This is not attached to the DOM yet.
  const button = document.createElement("button")
  button.onclick = displayPopulation;

  // Make some text content to put into your button 
  const buttonContent = document.createTextNode(
    "Show Population"
  );

  // Put the text content into the "button"
  button.appendChild(buttonContent);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(button);
}

displayPopulationScreen();




  


