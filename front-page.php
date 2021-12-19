<?php get_header(); ?>

<div id="main">
    <div class="container_main">
      <div id="hero">
        <div class="text_hero" data-aos="fade-up" data-aos-delay="600" class="tex">
          <h1><?php bloginfo('name') ?></h1>
          <h2><?php bloginfo('description') ?></h2>
          <a class="hero_cta" href="#">Acquista</a>
        </div>
        <img class="cornice_hero" src="<?php bloginfo('template_directory')?>/img/cornice_hero.png" alt="cornice di esempio">
        <div class="bg_cornice_hero"></div>
      </div>
      <div class="social_link">
        <a href=""><img src="<?php bloginfo('template_directory')?>/img/facebook.svg" alt="icona Facebook"></a>
        <a href=""><img src="<?php bloginfo('template_directory')?>/img/instagram.svg" alt="icona Instagram"></a>
        <a href=""><img src="<?php bloginfo('template_directory')?>/img/youtube.svg" alt="icona Youtube"></a>
      </div>
    </div>

  </div>
  <div id="caratteristiche">
    <div class="container_main">
      <h3 data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="300">caratteristiche</h3>
    </div>
    <div class="container_main container_caratt">
      <div class="caratteristica">
        <img class="elemento thumbnail_1" src="<?php bloginfo('template_directory')?>/img/miniatura_1.png" alt="frigo con cornice magnetica MagneticGif">
        <div class="testo_caratteristica" data-aos="fade-left" data-aos-duration="1500">
          <h4><?php the_field('titolo_caratt_1');?></h4>
          <p><?php the_field('descr_caratt_1');?></p>
        </div>
      </div>
      <div class="caratteristica">
        <div class="testo_caratteristica ordine_2 martello" data-aos="fade-right" data-aos-duration="1500">
          <h4><?php the_field('titolo_caratt_2');?></h4>
          <p><?php the_field('descr_caratt_2');?></p>
        </div>
        <img class="elemento ordine_1 thumbnail_2" src="<?php bloginfo('template_directory')?>/img/miniatura_2.png" alt="frigo con cornice magnetica MagneticGif">
      </div>
      <div class="caratteristica margine_sotto margine_sopra">
        <img class="elemento ultima thumbnail_3" src="<?php bloginfo('template_directory')?>/img/miniatura_3.png" alt="frigo con cornice magnetica MagneticGif">
        <div class="testo_caratteristica brillante" data-aos="fade-left" data-aos-duration="1500">
          <h4><?php the_field('titolo_caratt_3');?></h4>
          <p><?php the_field('descr_caratt_3');?></p>
        </div>
      </div>
    </div>
  </div>
  <div id="italia">
    <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in"><?php the_field('made_in_italy');?></h3>
  </div>
  <div id="galleria">
    <div class="container_main">
      <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in">galleria</h3>
    </div>
    <div class="slider">
      <div class="images glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img src='<?php bloginfo('template_directory')?>/img/colorazione_0.png' alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_1.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_2.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_3.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_4.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_5.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_6.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_7.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
            <li class="glide__slide">
              <img src="<?php bloginfo('template_directory')?>/img/colorazione_8.png" alt="immagine lato frontale cornice MagneticGif">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="specifiche" class="sfondo_specifiche">
    <div class="container_main ">
      <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in">specifiche tecniche</h3>
      <?php the_field('specifiche_tecniche');?>
    </div>
  </div>

<?php get_footer(); ?>