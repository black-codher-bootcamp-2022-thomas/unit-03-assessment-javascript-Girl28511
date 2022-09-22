import { dates } from "./data.js";

const timeline = document.querySelector(".timeline"); // linking to HTML timeline 

function getInfo(index) {
    const { title, date, image, summary } = dates[index]; // does this index refer to the HTML file  
    const wrapper = document.createElement("div");
    const cardHead = document.createElement("div");
    const content = document.createElement("div");

    const _date = document.createElement("span");
    const _title = document.createElement("h2");
    const _summary = document.createElement("p");
    const _image = document.createElement("img");
    const closeButton = document.createElement("span"); 
    
    wrapper.setAttribute("id", "modal-container");
    content.setAttribute("id", "modal-full-description");
    cardHead.setAttribute("id", "modal-header");
    _image.setAttribute("src", "modal-image", image); // changed to add quotes as unsure how this works as syntax is different
    _image.setAttribute("alt", title);
    closeButton.setAttribute("id", "modal-close-button");

}

