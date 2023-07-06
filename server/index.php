<?php

use Donner\BasicRouter;

require_once 'autoload.php';

set_time_limit(0);
@error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE ^ E_DEPRECATED);

BasicRouter::create()
  ->addController(new RequestRouter\StaticController())
  ->setNotFoundController(new RequestRouter\StaticController())
  ->run();
