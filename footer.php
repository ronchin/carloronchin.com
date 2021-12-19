<div id="footer">
    <img src="<?php bloginfo('template_directory')?>/img/logo_footer.svg" alt="logo MagneticGif">
    <div class="container">
      <div class="cont_footer">
        <ul>
          <li>Menù</li>
          <?php 
                        wp_nav_menu(
                            array(
                                'theme_location' => 'footer-menu',
                                'menu_class' => 'footer-menu'
                            )
                        );
          ?>
        </ul>

      </div>

      <div class="social_link_footer">
        <a class="facebook" href="">Facebook</a>
        <a class="instagram" href="">Instagram</a>
        <a class="youtube" href="">Youtube</a>
      </div>

    </div>

    <p class="credits">Copyright 2020 All rights reserved | <a href="https://www.carloronchin.com/">Carlo Ronchin</a></p>
  </div>

  <?php wp_footer(); ?>
</body>
</html>