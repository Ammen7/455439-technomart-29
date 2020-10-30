let cartPopup = document.querySelector('.cart-popup');
let cartButtonClose = document.querySelector('.cart-popup-button-close');
let cartButtonContinue = document.querySelector('.cart-popup-continue');
let cartButtonOpen = document.querySelector('.popup-button-buy');

cartButtonOpen.onclick = function (evt) {
  evt.preventDefault();
  cartPopup.classList.add('show');
};

cartButtonClose.onclick = function () {
  cartPopup.classList.remove('show');
};

cartButtonContinue.onclick = function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('show');
};
