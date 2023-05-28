<?php

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>ultra last next</title>
    <link rel="stylesheet" href="globals.css">
    <script defer type="module" src="static/dist/Landing.js"></script>
    <script defer type="module" src="static/dist/Banner.js"></script>
  </head>
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