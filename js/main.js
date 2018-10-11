//select elements from the dom

const menuBtn = $(".menu-btn");
const menu = $(".menu");
const branding = $(".menu-branding");
const nav = $(".menu-nav");
const navItems = $(".nav-item");

//set initial state of menu

let showMenu = false;

menuBtn.click(function() {
  console.log("radi");
  if (!showMenu) {
    menuBtn.addClass("close");
    menu.addClass("show");
    nav.addClass("show");
    branding.addClass("show");
    navItems.addClass("show");

    //set menu state
    showMenu = true;
  } else {
    menuBtn.removeClass("close");
    menu.removeClass("show");
    nav.removeClass("show");
    branding.removeClass("show");
    navItems.removeClass("show");
    //set menu state
    showMenu = false;
  }
});
