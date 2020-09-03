$(document).ready(function() {

  /*	-----------------------------------------------------------------------------------------------
  	Menu
  --------------------------------------------------------------------------------------------------- */

  /* Icona Menu */
  $( ".menuIcon" ).on('click', function() {
    $(".menuIcon").toggleClass("js-menuOpen");
  });

  var tl_nav = gsap.timeline({
    paused: true
  });

  tl_nav.to('nav', {
      height: '100vh',
      duration: 0.8,
      ease: 'Power3.easeInOut'
    })
  tl_nav.reversed(true);

  $( ".menuIcon" ).on('click', function() {

    tl_nav.reversed(!tl_nav.reversed());
    if (tl_nav.reversed())
        tl_nav.reverse();
    else
        tl_nav.play();
  });


});
