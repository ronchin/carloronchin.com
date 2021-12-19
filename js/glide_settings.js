// Galleria delle immagini Homepage
var glide = new Glide('.images', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3
      },
      800: {
        perView: 2
      }
    }
  })
  glide.on(['mount.after', 'run'], () => {
      const currentIndex = glide.index;
      console.log(currentIndex);
      var colore = $('.slider').css('background-image', 'url(<?php bloginfo("template_directory")?>/img/bg_colorazione_' + currentIndex + '.png');
      console.log(colore)
    })
    .mount();