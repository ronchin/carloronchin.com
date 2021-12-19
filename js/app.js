
// Menù mobile per smartphone e tablet
$('#hamburger').click(function(){
    $('header ul').toggleClass('menu_mobile');
});

//Top Bar on scroll Desktop
$(document).ready(function(event) {
    var nav = $('header');
    var hero = $('#hero');
    var position = nav.position();

    $(window).scroll(function () {
      if ($(this).scrollTop()>= position.top + 90) {
          nav.addClass("menu_scroll");
      } else {
        nav.removeClass("menu_scroll");
      }
    });
});


// Animazione a comparsa allo scroll
AOS.init();

// Effetto parallasse Homepage
var image = document.getElementsByClassName('thumbnail_1');
new simpleParallax(image, {
    scale: 1.5,
    orientation: 'right',
    overflow: true
});

var image = document.getElementsByClassName('thumbnail_2');
new simpleParallax(image, {
    scale: 1.5,
    orientation: 'left',
    overflow: true
});

var image = document.getElementsByClassName('thumbnail_3');
new simpleParallax(image, {
    scale: 1.5,
    orientation: 'right',
    overflow: true
});
