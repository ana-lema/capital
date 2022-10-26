document.addEventListener('DOMContentLoaded', function(event) {
  modeToggle.addEventListener('click', {
    handleEvent(event) {
      document.body.classList.toggle('popup-active');
    }
  });

  overlay.addEventListener('click', {
    handleEvent(event) {
      document.body.classList.remove('popup-active');
    }
  });

  let popupElement = document.querySelector('.popup');
  popupElement.addEventListener('click', {
    handleEvent(event) {
      event.stopPropagation();

      let popupButton = document.querySelector('.popup__close-button');
      if (event.target == popupButton) {
        document.body.classList.remove('popup-active');
      }
    }
  });

  popup.addEventListener('click', {
    handleEvent(event) {
      document.body.classList.remove('popup-active');
    }
  });
});
