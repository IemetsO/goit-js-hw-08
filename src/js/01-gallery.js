// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const itemsInGallery = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemsInGallery);
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>
  </div>`
    )
    .join(" ");
}
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.addEventListener("click", clickOnGalleryItem);
function clickOnGalleryItem(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  SimpleLightbox}