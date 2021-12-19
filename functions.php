<?php

/* Aggiungo dei fogli di stile */
function load_stylesheets() {

    /* Bootstrap / CSS */
    wp_register_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap');

    /* Animate On Scroll / CSS */
    wp_register_style('aos_css', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
    wp_enqueue_style('aos_css');

    /* Glide Carousel / Theme */
    wp_register_style('glide_theme', get_template_directory_uri() . '/css/glide.theme.min.css' , '', 1, 'all');
    wp_enqueue_style('glide_theme');

    /* Glide Carousel / Core */
    wp_register_style('glide_core', get_template_directory_uri() . '/css/glide.core.min.css' , '', 1, 'all');
    wp_enqueue_style('glide_core');

    /* Style CSS */
    wp_register_style('stylesheet', get_template_directory_uri() . '/style.css' , '', 1, 'all');
    wp_enqueue_style('stylesheet');

}
add_action('wp_enqueue_scripts', 'load_stylesheets');


/* Aggiungo i file javascript */
function load_javascript() {
    
    /* jQuery */
    wp_register_script( 'jQuery', 'https://code.jquery.com/jquery-3.5.1.min.js', null, null, true );
    wp_enqueue_script('jQuery');

    /* GSAP */
    wp_register_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js', null, null, true );
    wp_enqueue_script('gsap');

    /* Simple Parallax JS */
    wp_register_script( 'simpleParallax', 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js', null, null, true );
    wp_enqueue_script('simpleParallax');

    /* Animate On Scroll JS */
    wp_register_script( 'aosjs', 'https://unpkg.com/aos@2.3.1/dist/aos.js', null, null, true );
    wp_enqueue_script('aosjs');

    /* Glide Carousel / JS */
    wp_register_script('glide', get_template_directory_uri() . '/js/glide.min.js' , '', 1, true);
    wp_enqueue_script('glide');

    /* App JS */
    wp_register_script('appjs', get_template_directory_uri() . '/js/app.js' , '', 1, true);
    wp_enqueue_script('appjs');

    /* Glide Setting JS */
    wp_register_script('glideSettings', get_template_directory_uri() . '/js/glide_settings.js' , '', 1, true);
    wp_enqueue_script('glideSettings');

    /* Popper JS */
    wp_register_script('popper', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js' , null, null, true);
    wp_enqueue_script('popper');

    /* Bootstrap JS */
    wp_register_script('bootstrapjs', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' , null, null, true);
    wp_enqueue_script('bootstrapjs');

    /* Script JS / GSAP */
    wp_register_script('custom', get_template_directory_uri() . '/js/script.js' , 'jquery', 1, true);
    wp_enqueue_script('custom');

}
add_action('wp_enqueue_scripts', 'load_javascript');



//Add support
add_theme_support('menus');
add_theme_support('post-thumbnails');

//Register some menus 
register_nav_menus(
    array(

        'top-menu' => 'Top Menu',
    )
);

register_nav_menus(
    array(

        'footer-menu' => 'Footer Menu',
    )
);


//Add image sizes
add_image_size('post_image', 1100, 550, true);


//Add a widget
register_sidebar(


    array(

            'name' => 'Page Sidebar',
            'id' => 'page-sidebar',
            'class' => '',
            'before_title' => '<h4>',
            'after_title' => '</h4>'
            

    )


);

//Add a widget
register_sidebar(


    array(

            'name' => 'Blog Sidebar',
            'id' => 'blog-sidebar',
            'class' => '',
            'before_title' => '<h4>',
            'after_title' => '</h4>'
    )
);


/* Woocommerce */
if(class_exists('WooCommerce')) {
    /* WooCommerce */
    function woocommerceshop_add_woocommerce_support() {
        add_theme_support( 'woocommerce' );
    }
    add_action('after_setup_theme', 'woocommerceshop_add_woocommerce_support');




    // Remove WooCommerce Styles
    // add_filter( 'woocommerce_enqueue_styles', '__return_false' );

    // Remove Shop Title
    // add_filter( 'woocommerce_show_page_title', '__return_false' );

    // Add support
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );


}
