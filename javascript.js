import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, details } = dates[index];

  const box = document.createElement ("span");
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
  
  