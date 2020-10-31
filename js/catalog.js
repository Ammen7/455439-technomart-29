const cartPopup = document.querySelector('.cart-popup');
const cartButtonClose = document.querySelector('.cart-popup-button-close');
const cartButtonContinue = document.querySelector('.cart-popup-continue');
const cartButtonOpenList = document.querySelector('.popup-button-buy');

cartButtonOpenList.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add('show');
});

cartButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('show');
});

cartButtonContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('show');
});
