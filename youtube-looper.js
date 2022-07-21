const video= document.getElementsByClassName('video-stream html5-main-video')[0];
video.addEventListener("timeupdate", e => {
	if (video.currentTime >= 277.5) {
   	 video.currentTime = 261
   	 video.play()
	}
}, false)