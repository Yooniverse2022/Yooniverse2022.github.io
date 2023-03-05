const background = document.querySelector("#background");
const images = ["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg8.jpg"];

const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random()*images.length)];
bgImage.src = `img/${chosenImage}`;


background.appendChild(bgImage);