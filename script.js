'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const tileOpenModal = document.querySelectorAll('.show-modal');
const modalImg = document.querySelector('.modal-image');
let modalImgCaption = document.querySelector('.modal-caption');

// Functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event listeners
for (let i = 0; i < tileOpenModal.length; i++) {
  tileOpenModal[i].addEventListener('click', function () {
    modalImg.src = this.src;
    modalImgCaption.textContent = this.alt;
    openModal();
  });
}

btnCloseModal.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (pressed) {
  if (pressed.key === 'Escape') {
    closeModal();
  }
});
