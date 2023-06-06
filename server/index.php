<?php

use Common\DocumentHead;

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

DocumentHead::setTitle("ultra last next demo");
DocumentHead::addScript('entries/Landing/index.tsx');
DocumentHead::addScript('entries/ColorSchemeButton.tsx');
DocumentHead::addStylesInline(file_get_contents('./globals.css'));
DocumentHead::addColorScheme('rgb(255, 255, 255)', 'rgb(26, 32, 44)');
DocumentHead::addTranslations("ru");
$html_head = DocumentHead::build();

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
  {$html_head}
  <body>
    <div id="root-color-scheme-button"></div>
    <div class="app-container">
      <div id="root-landing"></div>
    </div>
  </body>
</html>
HTML;