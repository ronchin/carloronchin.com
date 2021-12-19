/*  -----------------------------------------------------------------------------------------------
  GSAP Immagine Carlo Main
--------------------------------------------------------------------------------------------------- */

var t1 = new TimelineMax();
t1.fromTo('.cornice_hero', {
  y: -1000
}, {
  y: 0,
  ease: "elastic.out",
  duration: 2.2,
  delay: 1
});

var t_bg = new TimelineMax();
t_bg.fromTo('.bg_cornice_hero', {
  height: 0,
}, {
  height: '38vh',
  ease: Power3.easeOut,
  duration: 1.4
});

var t1 = new TimelineMax();
t1.fromTo('header', {
  y: -200
}, {
  y: 0,
  ease: Power3.easeOut,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
  duration: 1.5
});

var t1 = new TimelineMax();
t1.fromTo('nav', {
  opacity: 0,
  y: -200
}, {
  opacity: 1,
  y: 0,
  ease: Power3.easeOut,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
  duration: 1.5
});
