class DrumKit{
    constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }

  repeat(){
    let step = this.index % 8;
     
    this.index++;
  }

  start(){
    //Adding the arrow function here as that would pull up the data from repeat.
    setInterval(()=>{
      this.repeat();
    },1000);
  }
}

const drumKit= new DrumKit();

drumKit.start();





