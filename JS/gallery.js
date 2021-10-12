let slideIndex = 1;

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'flex';
  document.getElementById('menu-toggle').style.display = 'none';
};

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'flex';
};

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'flex';
};

  overlayShown = false,
  overlayScrollListener = null,
  overlaySavedScrollTop = 0,
  overlaySavedScrollLeft = 0;

function showOverlay() {
  overlayShown = true;

  // Show overlay
  overlay.addClass("overlay-shown");

  // Save scroll position
  overlaySavedScrollTop = body.scrollTop();
  overlaySavedScrollLeft = body.scrollLeft();

  // Listen for scroll event
  overlayScrollListener = body.scroll(function() {
    // Scroll back to saved position
    body.scrollTop(overlaySavedScrollTop);
    body.scrollLeft(overlaySavedScrollLeft);
  });
}

var boxid = "Lightbox";
 window.onkeyup = function (event) {
  if (event.keyCode == 27) {
    document.getElementById(boxid).style.display="none";
  }
 }

function changeSlide(n) {
  if (event.keyCode == 37) showSlide(slideIndex += n);
};

