let progess = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controlIcon")

song.onloadedmetadata = function(){
    progess.max = song.duration;
    progess.value = song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove('fa-pause')
        controlIcon.classList.add("fa-play")
    }else{
        song.play()
        controlIcon.classList.add('fa-pause')
        controlIcon.classList.remove("fa-play")
    }
}

if(song.play()){
    setInterval(()=>{
       progess.value = song.currentTime;
    },500)
}

progess.onchange = function(){
    song.play();
    song.currentTime = progess.value;
    controlIcon.classList.add('fa-pause')
    controlIcon.classList.remove("fa-play")
}