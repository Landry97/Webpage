// MENU____ CLICK -> SHOW________________________________________________________________
const menu = document.getElementById('menu-toggle');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');

menu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navUL.classList.toggle('show');
      address.classList.toggle('show');
}); 

menu.addEventListener('click', (twice) => {
   document.body.style.overflow = '';
}); 


menu.addEventListener('click', (once) => {
        document.body.style.overflow = 'hidden'; 
}); 


//TO TOP BUTTON (working buttom flex right corner start 15pixel)_________________________
//[Get the button:]
mybutton = document.getElementById("myBtn");
// [When the user scrolls down 20px from the top of the document, show the button]
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
     if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       mybutton.style.display = "flex";} 
       else {
       mybutton.style.display = "none";}
   };
// [When the user clicks on the button, scroll to the top of the document]
function topFunction() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
