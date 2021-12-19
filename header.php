<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no" />
  <title>MagneticGif | La cornice magnetica formato portatessera</title>
  <meta name="description" content="MagneticGif é la cornice perfetta per ogni foto, con la base magnetica puoi attaccare i tuoi ricordi in ogni superficie metallica.">
  <link rel="icon" href="<?php bloginfo('template_directory')?>/img/favicon.png" type="image/png"/>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <meta name="theme-color" content="#2D1E2F" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

    <header>
      <nav>
        <img class="logo" src="<?php bloginfo('template_directory')?>/img/logo_header.svg" alt="logo di MagneticGif">
        <img id="hamburger" src="<?php bloginfo('template_directory')?>/img/menu.png" alt="icona menu mobile MagneticGif">
        <ul>
        <?php 
                        wp_nav_menu(
                            array(
                                'theme_location' => 'top-menu',
                                'menu_class' => 'top-menu'
                            )
                        );
                    ?>
        </ul>
      </nav>
    </header>