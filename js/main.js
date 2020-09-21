$(document).ready(function() {
  $('#pagepiling').pagepiling({
    scrollingSpeed: 1200,
    anchors: ['sezioneUno', 'sezioneDue', 'sezioneTre', 'sezioneAbout', 'sezioneContatti'],
    navigation: {
            'bulletsColor': '#fff',
            'position': 'left',
        },
    afterLoad: function(anchorLink, index) {
      //using index
      if (index == 1) {
        tls1.play();
      }

      if (index == 2) {
        tls2.play();
      }

      if (index == 3) {
        tls3.play();
      }

      if (index == 4) {
        tls4.play();
      }

      if (index == 5) {
        tlsAbout.play();
      }

      if (index == 6) {
        tlsContact.play();
      }

    },

    onLeave: function(index, nextIndex, direction) {
      //after leaving section 2
      if (index == 1 && direction == 'down') {
        tls1.reverse();
      } else if (index == 2 && direction == 'up') {
        tls2.reverse();
      }

      if (index == 2 && direction == 'down') {
        tls2.reverse();
      } else if (index == 3 && direction == 'up') {
        tls3.reverse();
      }

      if (index == 3 && direction == 'down') {
        tls3.reverse();
      } else if (index == 4 && direction == 'up') {
        tls4.reverse();
      }

      if (index == 4 && direction == 'down') {
        tls4.reverse();
      } else if (index == 5 && direction == 'up') {
        tlsAbout.reverse();
      }

      if (index == 5 && direction == 'down') {
        tlsAbout.reverse();
      } else if (index == 6 && direction == 'up') {
        tlsContact.reverse();
      }

    }

  });

  /*	-----------------------------------------------------------------------------------------------
  	Timeline Sezione #1
  --------------------------------------------------------------------------------------------------- */

  var tls1 = gsap.timeline({
    defaults: {
      duration: 1
    }
  })

  tls1.from('.intro h1, .intro h2, .testo-port-venezia', {
      opacity: 0,
      duration: 1.4,
      ease: 'Power2.easeInOut'
    })
    .from('#sezioneUno .ve-letter span', {
      width: 0,
      duration: 1.2,
      ease: 'Power3.easeInOut'
    }, '-=1.2')
    .from('.onda-alta-venezia', {
      opacity: 0,
      duration: 2,
      bottom: '-400px',
      ease: 'Power3.easeInOut'
    }, '-=1.5')
    .from('.onda-media-venezia', {
      opacity: 0,
      duration: 2,
      bottom: '-200px',
      ease: 'Power3.easeInOut'
    }, '-=2')
    .from('.onda-bassa-venezia', {
      opacity: 0,
      duration: 2,
      bottom: '-200px',
      ease: 'Power3.easeInOut'
    }, '-=2')
    .from('.gondola', {
      duration: 3,
      right: '-1050px',
      ease: 'Back.easeInOut'
    }, '-=2.6')
    .from('.scroll', {
      duration: 0.5,
      opacity: 0,
      y: 80,
      ease: 'Power3.easeInOut'
    }, '-=0.6')


  /*	-----------------------------------------------------------------------------------------------
  	Timeline Sezione #2
  --------------------------------------------------------------------------------------------------- */
  var tls2 = gsap.timeline({
    paused: true
  });

  tls2.from('#sezioneDue .intro h3, #sezioneDue .intro p, #sezioneDue .intro_dx a', {
      opacity: 0,
      duration: 0.9,
      ease: 'Power3.easeInOut'
    })
    .from('#sezioneDue .intro_dx', {
        x: 150,
        scale: 0.9,
        duration: 1,
        ease: 'Power3.easeInOut'
      }, '-=0.5')
    .from('#sezioneDue .a_website', {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'Power4.easeInOut'
      }, '-=0.8')
    .from('#sezioneDue .intro_dx span', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'Power3.easeInOut'
      }, '-=0.9')
    .from('#sezioneDue .ve-letter span', {
      width: 0,
      duration: 0.9,
      ease: 'Power3.easeInOut'
    }, '-=1.2')

    /*	-----------------------------------------------------------------------------------------------
    	Timeline Sezione #3
    --------------------------------------------------------------------------------------------------- */
    var tls3 = gsap.timeline({
      paused: true
    });

    tls3.from('#sezioneTre .intro h3, #sezioneTre .intro p, #sezioneTre .intro_dx a', {
        opacity: 0,
        duration: 0.9,
        ease: 'Power3.easeInOut'
      })
      .from('#sezioneTre .intro_dx', {
          x: 150,
          scale: 0.9,
          duration: 1,
          ease: 'Power3.easeInOut'
        }, '-=0.5')
      .from('#sezioneTre .a_website', {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'Power4.easeInOut'
        }, '-=0.8')
      .from('#sezioneTre .intro_dx span', {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: 'Power3.easeInOut'
        }, '-=0.9')
      .from('#sezioneTre .ve-letter span', {
        width: 0,
        duration: 0.9,
        ease: 'Power3.easeInOut'
      }, '-=1.2')

      /*	-----------------------------------------------------------------------------------------------
      	Timeline Sezione #4
      --------------------------------------------------------------------------------------------------- */
      var tls4 = gsap.timeline({
        paused: true
      });

      tls4.from('#sezioneQuattro .intro h3, #sezioneQuattro .intro p, #sezioneQuattro .intro_dx a', {
          opacity: 0,
          duration: 0.9,
          ease: 'Power3.easeInOut'
        })
        .from('#sezioneQuattro .intro_dx', {
            x: 150,
            scale: 0.9,
            duration: 1,
            ease: 'Power3.easeInOut'
          }, '-=0.5')
        .from('#sezioneQuattro .a_website', {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: 'Power4.easeInOut'
          }, '-=0.8')
        .from('#sezioneQuattro .intro_dx span', {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'Power3.easeInOut'
          }, '-=0.9')
        .from('#sezioneQuattro .ve-letter span', {
          width: 0,
          duration: 0.9,
          ease: 'Power3.easeInOut'
        }, '-=1.2')

      /*	-----------------------------------------------------------------------------------------------
        Timeline Sezione #3
      --------------------------------------------------------------------------------------------------- */
      var tlsAbout = gsap.timeline({
        paused: true
      });

      tlsAbout.from('#sezioneAbout .intro h3, #sezioneAbout .intro p, #sezioneAbout .intro_dx a', {
          opacity: 0,
          duration: 0.9,
          ease: 'Power3.easeInOut'
        })
        .from('#sezioneAbout .intro_dx', {
            x: 150,
            scale: 0.9,
            duration: 1,
            ease: 'Power3.easeInOut'
          }, '-=0.5')
        .from('#sezioneAbout .a_website', {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: 'Power4.easeInOut'
          }, '-=0.8')
        .from('#sezioneAbout .ve-letter span', {
          width: 0,
          duration: 0.9,
          ease: 'Power3.easeInOut'
        }, '-=1.2')

        /*	-----------------------------------------------------------------------------------------------
          Timeline Sezione #5
        --------------------------------------------------------------------------------------------------- */
        var tlsContact = gsap.timeline({
          paused: true
        });

        tlsContact.from('#sezioneContatti .intro h3, #sezioneContatti .intro p, #sezioneContatti .intro_dx a', {
            opacity: 0,
            duration: 0.9,
            ease: 'Power3.easeInOut'
          })
          .from('#sezioneContatti .intro_dx', {
              x: 150,
              scale: 0.9,
              duration: 1,
              ease: 'Power3.easeInOut'
            }, '-=0.5')
          .from('#sezioneContatti .intro_social, #sezioneContatti .intro_mail', {
                opacity: 0,
                x: 50,
                duration: 0.4,
                ease: 'Power3.easeInOut'
            }, '-=0.6')
          .from('#sezioneContatti .ve-letter span', {
            width: 0,
            duration: 0.9,
            ease: 'Power3.easeInOut'
          }, '-=1.2')

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
