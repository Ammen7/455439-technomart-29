const mapOpen = document.querySelector('.map-popup-open');
const mapPopup = document.querySelector('.map-popup');
const mapButtonClose = document.querySelector('.map-popup-button-close');


mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('show');
});

mapButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('show');
});

const feedbackPopup = document.querySelector('.feedback-form');
const feedbackButtonClose = document.querySelector('.feedback-form-button-close');
const feedbackButtonOpen = document.querySelector('.feedback-form-open');
const feedbackFieldName = document.querySelector('[name = name]');
const feedbackFieldEmail = document.querySelector('[name = email]');
const feedbackFieldMessage = document.querySelector('[name = message]');
const feedbackForm = document.querySelector('.feedback-form form');

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

feedbackButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('show');

  if (storageName) {
    feedbackFieldName.value = storageName;
  }

  if (storageEmail) {
    feedbackFieldEmail.value = storageEmail;
  }

  feedbackFieldMessage.focus();
});

feedbackButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('show');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackFieldName.value || !feedbackFieldEmail.value || !feedbackFieldMessage.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', feedbackFieldName.value);
      localStorage.setItem('email', feedbackFieldEmail.value);
    }
  }
});

