<?php

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>legacy</title>
    <script defer type="text/javascript" src="static/dist/index.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
HTML;