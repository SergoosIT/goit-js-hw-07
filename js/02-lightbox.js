import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    })
    .join('');
}
