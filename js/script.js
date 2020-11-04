const mapOpen = document.querySelector('.map-popup-open');
const mapPopup = document.querySelector('.map-popup');
const mapButtonClose = document.querySelector('.map-popup-button-close');

if (mapOpen) {

  mapOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('show');
  });

  mapButtonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('show')) {
        evt.preventDefault();
        mapPopup.classList.remove('show');
      }
    }
  });
}

const feedbackPopup = document.querySelector('.feedback-form');
const feedbackButtonClose = document.querySelector('.feedback-form-button-close');
const feedbackButtonOpen = document.querySelector('.feedback-form-open');
const feedbackFieldName = document.querySelector('[name = name]');
const feedbackFieldEmail = document.querySelector('[name = email]');
const feedbackFieldMessage = document.querySelector('[name = message]');
const feedbackForm = document.querySelector('.feedback-form form');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (feedbackPopup) {
  feedbackButtonOpen.addEventListener('click', function (evt) {
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

  feedbackButtonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('show');
    feedbackPopup.classList.remove('modal-error');
  });

  feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackFieldName.value || !feedbackFieldEmail.value || !feedbackFieldMessage.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove('show');
      feedbackPopup.classList.remove('modal-error');
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', feedbackFieldName.value);
        localStorage.setItem('email', feedbackFieldEmail.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains('show')) {
        evt.preventDefault();
        feedbackPopup.classList.remove('show');
        feedbackPopup.classList.remove('modal-error');
      }
    }
  });
}

const cartPopup = document.querySelector('.cart-popup');
const cartButtonClose = document.querySelector('.cart-popup-button-close');
const cartButtonContinue = document.querySelector('.cart-popup-continue');
const cartButtonOpenList = document.querySelectorAll('.popup-button-buy');

for (i = 0; i < cartButtonOpenList.length; i++) {
  cartButtonOpenList[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('show');
  });
}

cartButtonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('show');
});

cartButtonContinue.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains('show')) {
      evt.preventDefault();
      cartPopup.classList.remove('show');
    }
  }
});
