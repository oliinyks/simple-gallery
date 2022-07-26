import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')

const markup = galleryItems
    .map(
        ({ original, preview, description }) =>
  `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join('')