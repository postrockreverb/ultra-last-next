<?php

namespace Common;

class DocumentHead {

  private const INDEX_TITLE = 0;

  /**
   * @var string[]
   */
  private static array $head = [
    '<title>ultra last next</title>',
    '<meta charset="UTF-8">',
  ];

  public static function setTitle(string $title): void {
    self::$head[self::INDEX_TITLE] = "<title>{$title}</title>";
  }

  public static function addScript(string $src, string $type = 'module', $defer = true): void {
    $defer        = $defer ? 'defer' : '';
    self::$head[] = "<script {$defer} type=\"{$type}\" src=\"{$src}\"></script>";
  }

  public static function addScriptInline(string $script): void {
    self::$head[] = "<script>{$script}</script>";
  }

  public static function addStyles(string $src): void {
    self::$head[] = "<link rel=\"stylesheet\" href=\"{$src}\">";
  }

  public static function addStylesInline(string $styles): void {
    self::$head[] = "<style>{$styles}</style>";
  }

  public static function addColorsScheme(string $background_light, string $background_dark): void {
    $script = <<<JS
      var html = document.querySelector('html');
      var initialTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      var updateEvent = new Event('colorschemeupdate');

      html.classList.add(initialTheme);

      window.colors = {
        onMount: function() {
          html.classList.remove(initialTheme);
        },
        getScheme: function() {
          var theme = localStorage.getItem('theme');
          return theme === 'light' ? 'light' : 'dark';
        },
        toggle: function(colorScheme) {
          if (!colorScheme) {
            colorScheme = window.colors.getScheme() === 'dark' ? 'light' : 'dark'; 
          }
          localStorage.setItem('theme', colorScheme);
          dispatchEvent(updateEvent);
        }
      };
    JS;

    $css = <<<CSS
      html.light > body{
        background-color: {$background_light};
      }
      html.dark > body {
        background-color: {$background_dark};
      }
    CSS;

    self::addScriptInline($script);
    self::addStylesInline($css);
  }

  public static function build(): string {
    $contents = implode("\n", static::$head);
    return "<head>{$contents}</head>";
  }

}