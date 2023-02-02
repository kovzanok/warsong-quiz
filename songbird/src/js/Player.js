export class Player {
  constructor(audio,player) {
    this.audio = audio;
    this.player=player;
    
    
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

  playerClickHandler = (e) => {
    this.playerTimeline =
      e.target.parentNode.querySelector(".player__playtime");
    this.playerTimelinePlayed = e.target.parentNode.querySelector(
      ".player__playtime_played"
    );

    if (e.target.classList.contains("player__control")) {
      this.controlButton = e.target;

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
    this.updateTimeBar();
  };

  rewindSong(e) {
    const partOfDuration =
      (e.clientX - e.target.getBoundingClientRect().left) /
      this.playerTimeline.clientWidth;
    this.audio.currentTime = partOfDuration * this.audio.duration;
    this.setNewAudioTime();
  }

  setNewAudioTime = () => {
    this.playerTimelinePlayed.style.width = `${Math.round(
      (this.audio.currentTime * 100) / this.audio.duration
    )}%`;
    this.setCurrentTime();
  };

  setAudioDuration(){
    const durationTime=this.player.querySelector('.info__duration');
    this.audio.onloadedmetadata=()=>{
      durationTime.textContent=`${Math.floor(this.audio.duration/60)}:${Math.floor(this.audio.duration%60)}`;
    }
    
  }

  setCurrentTime(){
    const currentTime=this.player.querySelector('.info__current');
    currentTime.textContent=`${String(Math.floor(this.audio.currentTime/60)).padStart(2,'0')}:${String(Math.floor(this.audio.currentTime%60)).padStart(2,'0')}`;

  }

  updateTimeBar = () => {
    setTimeout(this.updateTimeBar, 1000);

    this.setNewAudioTime();
  };
}
