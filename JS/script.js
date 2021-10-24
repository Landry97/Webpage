
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('menu-toggle').style.display = 'flex';
  } else {
    document.getElementById('menu-toggle').style.display = 'none';
  }
}

var x = window.matchMedia("(max-width: 950px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 

// MENU____ CLICK -> SHOW________________________________________________________________
const menu = document.getElementById('menu-toggle');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');
const body = document.getElementById('bodyid');

menu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navUL.classList.toggle('show');
      address.classList.toggle('show');
      body.classList.toggle('show');
      menu.classList.toggle('show');
}); 

// MENU____ CLICK -> SHOW_2_______________________________________________________________
const rowid = document.getElementById('rowid');
const body = document.getElementById('bodyid');

rowid.addEventListener('click', () => {
      body.classList.toggle('show');
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
