$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  var i = 0;

  $(".menu-btn-items").click( function() {
    $(this).toggleClass("close");
    i++;
    if (i==1) {
      $("body").css({overflow: "hidden"});
    } else {
      $("body").css({overflow: "scroll"});
      i = 0;
    }
  });

  $(".menu-btn-items").click( function() {
    $(".main-menu").toggleClass("open");
  });

  $(".link").click( function() {
    $(".main-menu").toggleClass("open");
    $(".menu-btn-items").toggleClass("close");
    $("body").css({overflow: "scroll"});
    i = 0;
  });

  const up_arrow = document.querySelector("#up-arrow");

  up_arrow.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      });
  });

  element.scroll({ top: 0, left: 0, behavior: 'smooth' });

