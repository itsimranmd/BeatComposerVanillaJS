class DrumKit{
    constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector('.play');
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.currentKick = document.querySelector("./sounds/kick-classic.wav");
    this.snareKick = document.querySelector("./sounds/snare-classic.wav");
    this.hihatKick = document.querySelector("./sounds/hihat-classic.wav");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying= null;
  }
  activePad(){
    this.classList.toggle('active');
    console.log(this);
  }

  repeat(){
    let step = this.index % 8;
    //.b classes from the pads to loop over them w/ index
    const activeBars = document.querySelectorAll(`.b${step}`);
    activeBars.forEach(bar=>{
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if(bar.classList.contains("active")){
        if(bar.classList.contains("kick-pad")){
          this.kickAudio.currentTime=0;
          this.kickAudio.play();
        }
        if(bar.classList.contains("snare-pad")){
          this.snareAudio.currentTime=0;
          this.snareAudio.play();
        }
        if(bar.classList.contains("hihat-pad")){
          this.hihatAudio.currentTime=0;
          this.hihatAudio.play();
        }
      }
    })
    this.index++;
  }

  start(){
    console.log(this);
    const interval=(60/this.bpm)*1000;
    //Check if it's playing
    if(!this.isPlaying){
    //Adding the arrow function here as that would pull up the data from repeat.
    this.isPlaying=setInterval(()=>{
      this.repeat();
    }, interval);
    }else{
      //Clear the interval
      clearInterval(this.isPlaying);
      this.isPlaying=null;
    }
  
  }
  updateBtn(){
    if(!this.isPlaying){
      this.playBtn.innerText="Stop";
      this.playBtn.classList.add("active");
    }
    else{
      this.playBtn.innerText="Play";
      this.playBtn.classList.remove("active");
    }
  }
}

const drumKit= new DrumKit();

drumKit.pads.forEach(pad =>{
  pad.addEventListener('click', drumKit.activePad);
  pad.addEventListener('animationend', function(){
    this.style.animation="";
  })
})

drumKit.playBtn.addEventListener('click', ()=>{
  drumKit.updateBtn();
  drumKit.start();
});





