import unitsData from "./data.js";

export default class Gallery {
  constructor(language) {
    this.language = language;
  }

  showGallery = () => {
    document.querySelector("main").innerHTML = `<section class="gallery">
        <div class="wrapper gallery__wrapper">
          <div class="layout-max-columns">
            
            
            
          </div>
        </div>
      </section>`;
      this.createGallery();
  };

  createGalleryBlock(fractionNumber, unitNumber) {
    const galleryBlock = document.createElement("DIV");
    const galleryItem = document.createElement("DIV");
    galleryBlock.classList.add("gallery__block");
    galleryItem.classList.add("block__item");
    galleryItem.style.backgroundImage = `url(${
      unitsData[this.language][fractionNumber][unitNumber].image
    })`;
    galleryBlock.append(galleryItem);

    return galleryBlock;
  }

  createGallery() {
    console.log(this.language);
    const fractions = unitsData[this.language];
    const galleryLayout = document.querySelector(".layout-max-columns");

    for (let i = 0; i < fractions.length; i++) {
      for (let j = 0; j < fractions[i].length-1; j++) {
        galleryLayout.append(this.createGalleryBlock(i, j));
      }
    }
  }
}
