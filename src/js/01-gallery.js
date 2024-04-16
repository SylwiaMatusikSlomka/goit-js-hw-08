import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items'; 

console.log(galleryItems);
const listGallery = document.querySelector(".gallery");
initGalery(listGallery, galleryItems)

new SimpleLightbox('.gallery li a', { 
  captionDelay: 250,
  captionsData: 'alt',
});

function initGalery(gallery, galleryItems){
  galleryItems.forEach((image) => {
    const imageListItem = document.createElement("li");
    imageListItem.classList.add("gallery__item"); 
    imageListItem.innerHTML = `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a>`;
    gallery.appendChild(imageListItem);
  });
}