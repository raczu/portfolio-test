$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  $(".menu-btn-items").click( function() {
    $(this).toggleClass("close");
  });

  $(".menu-btn-items").click( function() {
    $(".main-menu").toggleClass("open");
  });

  $(".link").click( function() {
    $(".main-menu").toggleClass("open");
    $(".menu-btn-items").toggleClass("close");
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

