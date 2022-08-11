// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
const gallery = CreateGalleryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', gallery)

function CreateGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    ).join('')
}

let gallerySimple = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250})