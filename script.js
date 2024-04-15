const unmuteBtn = document.querySelector('.fa-volume-high'),
      muteBtn = document.querySelector('.fa-volume-xmark'),
      b5Btn = document.querySelector('.fa-backward'),
      pauseBtn = document.querySelector('.fa-pause'),
      playBtn = document.querySelector('.fa-play'),
      f5Btn = document.querySelector('.fa-forward'),
      volumeBtn = document.querySelector('.fa-volume-low'),
      qualitySel = document.getElementById('swap'),
      dwldBtn = document.querySelector('.download'),
      fullScrn = document.querySelector('.fa-expand'),
      video = document.getElementById('main-video');

      //to play a video
      function play1(){
        console.log("play the video",video)
        video.play();
      }

      playBtn.addEventListener("click",play1);

      //to pause a video
      function toPause(){
        video.pause();
      }

      pauseBtn.addEventListener("click",toPause);

      //to forward a video by 5secs
      function f5(){
        //get the current time
        let cTime = video.currentTime;
        //add 5 secs
        cTime += 5;
        //play from new time
        video.currentTime = cTime;
      }

      f5Btn.addEventListener ("click",f5);

      //to back a video by 5secs
      function b5(){
        //get the current time
        let cTime = video.currentTime;
        //5 secs less
        cTime -= 5;
        //play from new time
        video.currentTime = cTime;
      }

      b5Btn.addEventListener("click",b5);

      //to mute a video
      function mute(){
        video.muted = true;
      }

      muteBtn.addEventListener("click",mute);

      //to unmute a video
      function unmute(){
        video.muted = false;
      }

      unmuteBtn.addEventListener("click",unmute);

      //to download a video
      function download(){
        //get the filepath
        let filePath = video.getAttribute('src');
        //update href value in A tag
        dwldBtn.setAttribute("href",filePath);
        //set that filepath into download attribute
        dwldBtn.setAttribute("download",filePath);
        //trigger the click event
        console.log(filePath);
      }

      dwldBtn.addEventListener("click",download);

      //to swap a video quality
      function swap(){
        //get selected video
        let targetPath = this.value;
        console.log(targetPath);

        cTime = video.currentTime;
        //change filepath of video
        video.setAttribute("src",targetPath);
        //change current time
        video.currentTime = cTime;
        play1();
      }

      qualitySel.addEventListener("click",swap);

      //to view a video in fullscreen
      function fullscreen(){
        video.requestFullscreen();
      }

      fullScrn.addEventListener("click",fullscreen);