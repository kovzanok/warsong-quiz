export class Player {
  constructor(audio) {
    this.audio = audio;
  }
  togglePlay() {
    if (!this.audio.paused) {
      this.audio.pause();
      this.controlButton.classList.add("player__control_play");
      this.controlButton.classList.remove("player__control_pause");
      
    } else {
      this.audio.play();
      this.controlButton.classList.remove("player__control_play");
      this.controlButton.classList.add("player__control_pause");
      
    }
  }

  playerClickHandler=(e) =>{
    if (e.target.classList.contains("player__control")) {
      this.controlButton = e.target;
      console.log();
      this.togglePlay();
    } else if (e.target.classList.contains("player__playtime")) {
      this.playerTimeline = e.target.parentNode.classList.contains(
        "player__playtime"
      )
        ? e.target.parentNode
        : e.target;

      this.playerTimelinePlayed = this.playerTimeline.firstElementChild;

      this.rewindSong(e);
    }
  }

  rewindSong(e) {
    const partOfDuration =
      (e.clientX - e.target.getBoundingClientRect().left) /
      this.playerTimeline.clientWidth;
    this.audio.currentTime = partOfDuration * this.audio.duration;
    this.setNewAudioTime();
  }

  setNewAudioTime=()=>{
    
    this.playerTimelinePlayed.style.width = `${Math.round(
      (this.audio.currentTime * 100) / this.audio.duration
    )}%`;
  }
  updateTimeBar=()=>{
    this.playerTimelinePlayed = document.querySelector(".player__playtime_played"); 
    setTimeout(this.updateTimeBar, 100);
    
    this.setNewAudioTime();
  }
}
