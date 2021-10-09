// MENU____ CLICK -> SHOW________________________________________________________________
const menu = document.getElementById('menu-toggle');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');
const activePage = document.getElementByClassName('activePage');

menu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navUL.classList.toggle('show');
      address.classList.toggle('show');
      activePage.classList.toggle('activePage2');
}); 

menu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
}); 
menu.onclick = function () {
  if (menu.style.display !== "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
};


//function disableScrolling(){
//    var x=window.scrollX;
//    var y=window.scrollY;
//    window.onscroll=function(){window.scrollTo(x, y);};
//}
//
//function enableScrolling(){
//    window.onscroll=function(){};
//}

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
