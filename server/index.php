<?php

use Common\DocumentHead;

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

DocumentHead::setTitle("ultra last next demo");
DocumentHead::addScript('static/dist/Landing.js');
DocumentHead::addScript('static/dist/Banner.js');
DocumentHead::addStyles('globals.css');
DocumentHead::addColorsScheme('rgb(255, 255, 255)', 'rgb(26, 32, 44)');
$html_head = DocumentHead::build();

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
  {$html_head}
  <body>
    <div class="app-container">
      <div id="root-landing"></div>
    </div>
    <div class="app-container banner-container">
      <div id="root-banner"></div>
    </div>
  </body>
</html>
HTML;