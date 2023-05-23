let bot = new RiveScript();

const brains = ["brain/subs.rive", "brain/brain.rive"];

bot.loadFile(brains).then(botReady).catch(botNotReady);

const message_container = document.querySelector(".messages");

const form = document.querySelector("form");

const input_box = document.querySelector("input");

const video = document.getElementById('my-video');
video.volume = 0.8;
const videoContainer = document.getElementById('video-container');
const websiteContainer = document.getElementById('website-container');

video.addEventListener('ended', () => {
 videoContainer.remove();
 websiteContainer.classList.add('visible');
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = "";
  input_box.focus();
});

function botReply(message) {
  message_container.innerHTML += `<div class="bot">${message}</div>`;
}

function selfReply(message) {
  message_container.innerHTML += `<div class="self">${message}</div>`;

  bot
    .reply("local-user", message)
    .then(function (reply) {
      botReply(reply);
    })
    .then(function () {
      message_container.lastElementChild.scrollIntoView();
    });
}

function botReady() {
  bot.sortReplies();
}

function botNotReady(err) {
  console.log("A glitch has occurred. reboot me!", err);
}





function on_load_error(error) {
  console.log("Error loading bot files: " + error);
}

var button = document.getElementById("backgroundButton");
var body = document.body;
var currentBackground = "initial";

var konamiBackgroundImage = new Image();
konamiBackgroundImage.src = "https://cdn.discordapp.com/attachments/1024618908512174130/1109557964169281536/FINAL_GREEN.gif";
var initialBackgroundImage = new Image();
initialBackgroundImage.src = "https://cdn.discordapp.com/attachments/1024618908512174130/1109305900184899675/COMBO-PURPLE-BG.gif";
var otherBackgroundImage = new Image();
otherBackgroundImage.src = "https://cdn.discordapp.com/attachments/1024618908512174130/1109557946632904754/FINAL_BLUE.gif";

button.addEventListener("click", function() {
  if (currentBackground === "initial") {
    body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1024618908512174130/1109557946632904754/FINAL_BLUE.gif')";
    currentBackground = "other";
  } else {
    body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1024618908512174130/1109305900184899675/COMBO-PURPLE-BG.gif')";
    currentBackground = "initial";
  }
});

function preloadObject(url) {
  return new Promise((resolve, reject) => {
    const object = new Image();
    object.onload = () => resolve();
    object.onerror = () => reject();
    object.src = url;
  });
}

preloadObject('https://cdn.discordapp.com/attachments/1024618908512174130/1109557964169281536/FINAL_GREEN.gif')
  .then(() => {
    console.log('Object preloaded successfully.');
  })
  .catch(() => {
    console.error('Failed to preload the object.');
  });


  document.getElementById("aButton").addEventListener("click", function() {
    var audio = new Audio("ABUTTON.mp3");  
    audio.play();
  });

  document.getElementById("bButton").addEventListener("click", function() {
    var audio = new Audio("BBUTTON.mp3");  
    audio.play();
  });

  document.getElementById("dPad").addEventListener("click", function() {
    var audio = new Audio("DPAD.mp3");  
    audio.play();
  });







console.log('By Ellouise & Rahmone =)')