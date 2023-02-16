import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markupGallery);

galleryEl.addEventListener("click", onImgClick);

function onImgClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onCloseModal),
      onClose: () => document.removeEventListener("keydown", onCloseModal),
    }
  );
  instance.show();

  function onCloseModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
