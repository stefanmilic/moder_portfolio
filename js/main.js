$(function() {
  //select elements from the dom

  const menuBtn = $(".menu-btn");
  const menu = $(".menu");
  const branding = $(".menu-branding");
  const nav = $(".menu-nav");
  const navItems = $(".nav-item");
  const cross = $(".x");
  const inputName = $("#name");
  const textArea = $("#message");
  const inputEmail = $("#email");
  const movingText = $(".lg-heading");

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

  cross.click(function() {
    $(".aside").addClass("swing");
  });

  $("form").on("submit", function(e) {
    // inputName.val() = "";
    // textArea.val() = "";
    // inputEmail.val() = "";
    var todo = {
      Name: inputName.val(),
      Message: textArea.val(),
      Email: inputEmail.val()
    }; // prihvata vrednost iz forme

    $.ajax({
      type: "POST", //triger za post metodu u konteleru
      url:
        "https://script.google.com/macros/s/AKfycbzSRkrpenGGdKBfMYkw4Xdzu9pIP-ZZt1zSURwb/exec", // url gde ce to da se izdesava
      data: todo, //prihvata vresnost polja i smesta u data varijablu i salje da se apdejtuje u kontroler
      //data je obavezan ne moze da se napise nesto drugo umesto DATA
      success: function(ovde_moze_bilo_sta) {
        // obavezan je success i ovde vracamo podatke iz posta u kontrleru
        //   //do something with the data via front-end framework
        //reloduje stranicu
        $("#formMessage").css("display", "inline-block");
        inputName.val("");
        textArea.val("");
        inputEmail.val("");
      }
    });

    return false;
  });

  let wrap = $("#spinner");

  window.addEventListener("load", () => {
    setTimeout(() => {
      // document.body.removeChild(wrap);
      wrap.remove();
    }, 0);
  });

  let i = 0;
  let txt = "Stefan Milic";
  let speed = 200;
  let sum = "";
  function textmove() {
    if (i < txt.length) {
      sum += txt[i];
      i++;
      movingText.html(sum);
    }
    setTimeout(textmove, speed);
  }
  textmove();
});
