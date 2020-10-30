let map = document.querySelector('.map-popup');
let mapButtonClose = document.querySelector('.map-popup-button-close');
let mapOpen = document.querySelector('.map-popup-open');

mapOpen.onclick = function (evt) {
  evt.preventDefault();
  map.classList.add('show');
};

mapButtonClose.onclick = function () {
  map.classList.remove('show');
};

let feedbackForm = document.querySelector('.feedback-form');
let feedbackButtonClose = document.querySelector('.feedback-form-button-close');
let feedbackButtonOpen = document.querySelector('.feedback-form-open');

feedbackButtonOpen.onclick = function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add('show');
};

feedbackButtonClose.onclick = function () {
  feedbackForm.classList.remove('show');
};


