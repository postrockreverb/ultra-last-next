<?php

namespace App\Controllers;

use Donner\Controller\AbstractController;
use App\Document;
use App\Document\Head;
use App\Document\Body;

class StaticController extends AbstractController {
  public const URI            = '/?.+';
  public const ALLOWED_METHOD = self::METHOD_ALL;

  public function resolve(mixed $params): \Donner\Result\ControllerResponse {
    $head = Head\Builder::create()->append(
      Head\Title::create("ultra last next demo"),
      Head\Script::fromEntry("App/index.tsx"),
      Head\Link::fromEntry("global.css", Head\Link::REL_STYLESHEET),
    );

    $body = Body\Builder::create()->addend(
      Body\Plain::create("<div id='root'></div>"),
    );

    $html = Document\Builder::create("en", $head, $body)->build();
    return new \Donner\Result\ControllerResponse($html);
  }

}