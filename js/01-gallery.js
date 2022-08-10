import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(createGallery(galleryItems));

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
  // console.dir(evt);
  // console.dir(evt.currentTarget);

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
    )
    .show();

  document.addEventListener("keydown", (event) => {
    // console.log(event);
    // console.dir(evt.target);
    if (event.keyCode === 27) {
    }
  });
}
