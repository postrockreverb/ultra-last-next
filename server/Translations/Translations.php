<?php

namespace Translations;

class Translations {

  public const LOCALE_RU = 'ru';
  public const LOCALE_EN = 'en';

  public const LOCALES = [
    self::LOCALE_EN,
    self::LOCALE_RU,
  ];

  private const COOKIE_KEY_LOCALE = 'locale';

  private const TRANSLATIONS_SOURCE_FILENAME_PATH = "Translations/translations.json";

  private const TRANSLATIONS_DIST_FOLDER_PATH = "Translations/dist/";

  private static function getLangPackFilenamePath(string $lang): string {
    return self::TRANSLATIONS_DIST_FOLDER_PATH . $lang . '.json';
  }

  public static function get(string $locale): string {
    $path = self::getLangPackFilenamePath($locale);
    return file_get_contents($path);
  }

  public static function getAuthUserLocale(): string {
    $locale = $_COOKIE['locale'];
    if ($locale && in_array($locale, self::LOCALES)) {
      return $locale;
    }

    $locale = self::LOCALE_EN;
    self::setAuthUserLocale($locale);
    return $locale;
  }

  public static function setAuthUserLocale(string $locale): string {
    if (!$locale || !in_array($locale, self::LOCALES)) {
      $locale = self::LOCALE_EN;
    }
    setcookie(self::COOKIE_KEY_LOCALE, $locale);
    return $locale;
  }

  public static function build(): void {
    echo "🌏  Langs build\n";

    if (!file_exists(self::TRANSLATIONS_DIST_FOLDER_PATH)) {
      mkdir(self::TRANSLATIONS_DIST_FOLDER_PATH, 0777, true);
    }

    $langs_source_file = file_get_contents(self::TRANSLATIONS_SOURCE_FILENAME_PATH);
    $hash              = md5($langs_source_file);
    foreach (self::LOCALES as $lang) {
      $langs_source = json_decode($langs_source_file, true);

      self::extractLangKeys($langs_source, $lang);
      $langs_source = [
        "lang" => $lang,
        "hash" => $hash,
        ...$langs_source,
      ];

      $built_lang = json_encode($langs_source, JSON_FORCE_OBJECT | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

      $path = self::getLangPackFilenamePath($lang);
      file_put_contents($path, $built_lang);
      echo "    ▶ " . $lang . "\n";
    }

    echo "✨  Langs done\n";
  }

  private static function extractLangKeys(array &$level, string $locale): void {
    foreach ($level as &$value) {
      if (!is_array($value)) {
        continue;
      }

      $translation = $value["_" . $locale];
      if ($translation) {
        $value = $translation;
        continue;
      }

      self::extractLangKeys($value, $locale);
    }
  }

}
