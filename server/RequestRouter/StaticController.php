<?php

namespace RequestRouter;

use Common\Document;
use Donner\Controller\AbstractController;
use Translations\Translations;

class StaticController extends AbstractController {
  public const URI = '/?.+';
  public const ALLOWED_METHOD = self::METHOD_ALL;

  public function resolve($params): \Donner\Result\ControllerResponse {
    $user_locale = Translations::getAuthUserLocale();
    if ($_POST['set-translations']) {
      $user_locale = Translations::setAuthUserLocale($_POST['set-translations']);
    }

    Document::setTitle("ultra last next demo");
    Document::addScript('entries/Landing/index.tsx');
    Document::addScript('entries/Topbar.tsx');
    Document::addStylesInline(file_get_contents('./globals.css'));
    Document::addColorScheme('rgb(255, 255, 255)', 'rgb(26, 32, 44)');
    Document::addTranslations($user_locale);

    $html_head = Document::build();
    $html = <<<HTML
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

    return new \Donner\Result\ControllerResponse($html);
  }
}