export class Player {
  constructor(audio, player) {
    this.audio = audio;
    this.player = player;
  }
  togglePlay() {
    if (!this.audio.paused) {
      this.audio.pause();
      this.controlButton.style.backgroundImage = `url(./src/img/play.svg)`;
      
    } else {
      this.audio.play();
      this.controlButton.style.backgroundImage = `url(./src/img/pause.svg)`;
      
    }
  }

  playerClickHandler = (e) => {
    this.playerTimeline = this.player.querySelector(".player__playtime");
    this.playerTimelinePlayed = this.player.querySelector(
      ".player__playtime_played"
    );
    if (this.player.querySelector(".volume__bar")) this.volumeBar = this.player.querySelector(".volume__bar");
    if (this.volumeBar)this.changeMusicVolume();
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
    if (this.volumeBar) this.changeVolumeHandler();
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

  setAudioDuration() {
    const durationTime = this.player.querySelector(".info__duration");
    this.audio.onloadedmetadata = () => {
      durationTime.textContent = `${String(
        Math.floor(this.audio.duration / 60)
      ).padStart(2, "0")}:${String(
        Math.floor(this.audio.duration % 60)
      ).padStart(2, "0")}`;
    };
    this.setCurrentTime();
  }

  setCurrentTime() {
    const currentTime = this.player.querySelector(".info__current");

    currentTime.textContent = `${String(
      Math.floor(this.audio.currentTime / 60)
    ).padStart(2, "0")}:${String(
      Math.floor(this.audio.currentTime % 60)
    ).padStart(2, "0")}`;
  }

  updateTimeBar = () => {
    if (this.audio) {
      setTimeout(this.updateTimeBar, 1000);
      this.setNewAudioTime();
    }
  };

  changeMusicVolume = () => {
    this.audio.volume = this.volumeBar.value / 100;
  };

  changeVolumeHandler = () => {
    this.volumeBar.addEventListener("click", this.changeMusicVolume);
    this.volumeBar.addEventListener("touchend", this.changeMusicVolume);
    this.volumeBar.onmousedown = () => {
      this.changeMusicVolume();
      this.volumeBar.addEventListener("mousemove", this.changeMusicVolume);
      this.volumeBar.onmouseup = () => {
        this.volumeBar.removeEventListener("mousemove", this.changeMusicVolume);
      };
    };

    this.volumeBar.ontouchstart = () => {
      this.changeMusicVolume();
      this.volumeBar.addEventListener("touchmove", this.changeMusicVolume);
      this.volumeBar.ontouchend = () => {
        this.volumeBar.removeEventListener("touchmove", this.changeMusicVolume);
      };
    };
  };
}
