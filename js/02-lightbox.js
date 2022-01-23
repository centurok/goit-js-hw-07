import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onPictureClick);

function createGalleryMarkup(pictures) {
  const markup = pictures
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
  return markup;
}

function onPictureClick(e) {
  e.preventDefault();
}
let lightBox = new SimpleLightbox(".gallery a", { captionsData: "alt" }, { captionDelay: 250 });
