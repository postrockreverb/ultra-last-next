<?php

namespace App\Document\Entries;

class Files {

  private const STATIC_PATH   = 'static/';
  private const MANIFEST_PATH = 'static/dist/manifest.json';

  public static function getPath(string $filename): string {
    static $manifest = null;
    if (!$manifest) {
      $manifest = json_decode(file_get_contents(self::MANIFEST_PATH), true);
    }
    $path = "entries/" . $filename;
    return self::STATIC_PATH . $manifest[$path] ?? '';
  }

}