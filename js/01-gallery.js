import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryDivRef = document.querySelector(".gallery");
const renderGallery = createGalleryMarkup(galleryItems);

function createGalleryMarkup(array) {
  return array
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}""
        />
      </a>
    </div>`;
    })
    .join("");
}
galleryDivRef.insertAdjacentHTML("afterbegin", renderGallery);

galleryDivRef.addEventListener("click", selectGalleryPicture);

const instance = basicLightbox.create(
  `<img src="" width="800" height="600"></img>`
);

function selectGalleryPicture(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modalImgRef = instance.element().querySelector("img");
  modalImgRef.src = event.target.dataset.source;
  instance.show();
  document.addEventListener("keydown", closeModalByEscape);

  function closeModalByEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    document.removeEventListener("keydown", closeModalByEscape);
  }
}
