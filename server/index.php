<?php

use Common\DocumentHead;
use Translations\Translations;

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

$user_locale = Translations::getAuthUserLocale();
if ($_POST['set-translations']) {
  $user_locale = Translations::setAuthUserLocale($_POST['set-translations']);
}

DocumentHead::setTitle("ultra last next demo");
DocumentHead::addScript('entries/Landing/index.tsx');
DocumentHead::addScript('entries/Topbar.tsx');
DocumentHead::addStylesInline(file_get_contents('./globals.css'));
DocumentHead::addColorScheme('rgb(255, 255, 255)', 'rgb(26, 32, 44)');
DocumentHead::addTranslations($user_locale);
$html_head = DocumentHead::build();

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
  {$html_head}
  <body>
    <div id="root-topbar"></div>
    <div class="app-container">
      <div id="root-landing"></div>
    </div>
  </body>
</html>
HTML;