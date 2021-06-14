document.addEventListener('DOMContentLoaded', () =>{
  
  const slideModal = document.querySelector('.slide__modal');
  const closeBtn = document.querySelector('.slide__btn_close');
  const slideModalLeft = document.querySelector('.left');

  function openSlideModal() {
    if (!slideModal.classList.contains('slide__modal_open')) {
      slideModal.classList.toggle("slide__modal_open");
    }

  }

  function closeSlideModal() {
    closeBtn.onclick = function() {
      slideModal.classList.toggle("slide__modal_open");
    };
  }

  function openSlideModalOnClick() {
    slideModalLeft.onclick = function () {
      slideModal.classList.toggle("slide__modal_open");
    };
  }
  
  setTimeout(openSlideModal, 5000);
  closeSlideModal();
  openSlideModalOnClick();
}, false);