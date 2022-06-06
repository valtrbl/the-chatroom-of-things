const videoPlayer = document.querySelector('.videoplayerleft')
const video = videoPlayer.querySelector('.leftbutton')
const playButton = videoPlayer.querySelector('.play-button')


//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    // e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    // e.target.textContent = '►'
  }
})