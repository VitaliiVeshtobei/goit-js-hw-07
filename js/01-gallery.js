import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const cardMarkup = createGallery(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardMarkup);

galleryContainerRef.addEventListener("click", onClickPhoto);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`;
    })
    .join("");
}

function onClickPhoto(evt) {
  evt.preventDefault();

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
    )
    .show();

  document.addEventListener("keydown", (event) => {
    const modalRef = document.querySelector(".basicLightbox");

    if (event.keyCode === 27 && modalRef !== null) {
      modalRef.remove();
    }
  });
}
