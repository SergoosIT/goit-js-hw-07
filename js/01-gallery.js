import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let instance;
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryMarkup(images) {
  return images
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
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onGalleryEscKeyDown);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onGalleryEscKeyDown);
      },
    }
  );

  instance.show();
}

function onGalleryEscKeyDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
