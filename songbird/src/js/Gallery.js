import unitsData from "./data.js";
import { Player } from "./Player.js";
import Main from "./Main.js";

export default class Gallery {
  constructor(language) {
    this.language = language;
    this.count = 0;
  }

  showGallery = () => {
    document.querySelector("main").innerHTML = `<section class="gallery">
        <div class="wrapper gallery__wrapper">
          <div class="layout-max-columns">       
            
          </div>
        </div>
      </section>`;
    this.galleryLayout = document.querySelector(".layout-max-columns");
    this.createGallery();

    this.galleryLayout.addEventListener("click", this.galleryClickHandler);
  };

  createGalleryBlock(fractionNumber, unitNumber) {
    const galleryBlock = document.createElement("DIV");
    const galleryItem = document.createElement("DIV");
    galleryBlock.classList.add("gallery__block");
    galleryItem.classList.add("block__item");
    galleryItem.style.backgroundImage = `url(${
      unitsData[this.language][fractionNumber][unitNumber].image
    })`;
    galleryItem.setAttribute("data-fraction", fractionNumber);
    galleryItem.setAttribute("data-unit", unitNumber);
    galleryBlock.append(galleryItem);

    return galleryBlock;
  }

  createGallery() {
    const fractions = unitsData[this.language];

    for (let i = 0; i < fractions.length; i++) {
      for (let j = 0; j < fractions[i].length - 1; j++) {
        this.galleryLayout.append(this.createGalleryBlock(i, j));
      }
    }
  }

  galleryClickHandler = (e) => {
    const logo = document.querySelector(".logo-image");
    const pseudoMain = new Main(localStorage.getItem("language"));
    logo.addEventListener("click", pseudoMain.changeLanguage);
    pseudoMain.navigationHandler();

    const modalClickHandler = (e) => {
      if (
        e.target.classList.contains("modal__close-button") ||
        e.target.classList.contains("modal__body")
      ) {
        if (this.unitAudio) this.unitAudio.pause();
        e.target.closest(".modal").classList.remove("modal_active");

        setTimeout(function () {
          e.target.closest(".modal").remove();
        }, 300);
        document.body.classList.remove("body_lock");
      }
    };

    if (e.target.classList.contains("block__item")) {
      if (this.galleryModal) this.galleryModal.removeEventListener("click", modalClickHandler);
      const unit =
        unitsData[this.language][e.target.dataset.fraction][
          e.target.dataset.unit
        ];
      this.createInfoModal(unit);
      this.galleryModal = document.querySelector(".gallery__modal");
      this.galleryModal.addEventListener("click", modalClickHandler);
    }
  };

  createInfoModal(unit) {
    const infoModal = document.createElement("DIV");
    infoModal.className = "modal gallery__modal";
    const infoBody = `
    <div class="modal__body">
      <div class="modal__content">
        <div class="modal__close-button">X</div>
        <div class="modal__header">
          <div class="info__head">
            <div class="info__image"></div>
            <div class="info__body">
              <div class="info__name">${unit.name}</div>
              <div class="info__name">${unit.nameEng}</div>
              <div class="info__player">
                <div class="player__bar">
                  <div class="player__control player__control_play"></div>
                  <div class="player__playtime">
                    <div
                      class="player__playtime player__playtime_played"
                    ></div>
                  </div>
                </div>

                <div class="player__info">
                  <div class="info__current">00:00</div>
                  <div class="info__divider">/</div>
                  <div class="info__duration">00:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__main">
          <div class="modal__text">
            <div class="info__description">
              ${unit.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    infoModal.innerHTML = infoBody;
    document.body.append(infoModal);
    document.querySelector(
      ".info__image"
    ).style.backgroundImage = `url(${unit.image})`;
    infoModal.classList.add("modal_active");

    this.generateInfoPlayer(unit);
    document.body.classList.add("body_lock");
  }

  generateInfoPlayer(unit) {
    const infoPlayer = document.querySelector(".info__player");

    if (this.unitAudio) {
      this.unitAudio.pause();
    }

    this.unitAudio = new Audio(unit.audio);
    const unitPlayer = new Player(this.unitAudio, infoPlayer);

    infoPlayer.addEventListener("click", unitPlayer.playerClickHandler);
    unitPlayer.setAudioDuration();

    this.unitAudio.onended = () => {
      infoPlayer
        .querySelector(".player__control")
        .classList.add("player__control_play");
      infoPlayer
        .querySelector(".player__control")
        .classList.remove("player__control_pause");
    };
  }
}
