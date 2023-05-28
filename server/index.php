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
    <script defer type="module" src="static/dist/index.js"></script>
    <script defer type="module" src="static/dist/index2.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <div id="root2"></div>
  </body>
</html>
HTML;