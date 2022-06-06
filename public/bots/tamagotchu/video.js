const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')


//leftbutton
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    // e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    // e.target.textContent = '►'
  }

  if (video.style.display === "none") {
    video.style.display = "block";
    videoNohighlight.style.display = "none";
  } 
  else {
    video.style.display = "none !important"; 
  }  
})

function setupVideo () {
  // get video
    var video = document.getElementById('video')
    // Play the video, this is optional
    video.play();
    // Add a listener to this video, so that when the video ends, the video is "hidden".
    video.addEventListener('ended', function() {
    // hide video
      video.style.display = "none";
    })
  }

 
 //intro
  function videoended () {
    var video = document.getElementById('introvideo')
    
    video.style.display = "none";
  }