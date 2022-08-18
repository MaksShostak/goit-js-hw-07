import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryListRef = document.querySelector(".gallery");
const renderGallery = createGalleryMarkup(galleryItems);

function createGalleryMarkup(array) {
  return array
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
galleryListRef.insertAdjacentHTML("afterbegin", renderGallery);
const imgArrayRef = galleryListRef.querySelectorAll("img");
console.log(imgArrayRef);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
