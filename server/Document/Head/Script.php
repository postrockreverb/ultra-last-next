<?php

namespace App\Document\Head;

use App\Document\Entries\Files;

class Script implements ElementInterface {

  public const TYPE_MODULE = "module";

  private bool $defer;
  private string $type;
  private string $src;
  private string $content;

  public function __construct(string $type, string $src, string $content, bool $defer) {
    $this->defer = $defer;
    $this->type = $type;
    $this->src = $src;
    $this->content = $content;
  }

  public static function fromEntry(string $index_tsx, bool $defer = true): self {
    $type = self::TYPE_MODULE;
    $src = Files::getPath($index_tsx);
    return new self($type, $src, "", $defer);
  }

  public function build(): string {
    $type = $this->type ? " type=\"{$this->type}\"" : "";
    $src = $this->src ? " src=\"{$this->src}\"" : "";
    $defer = $this->defer ? " defer" : "";
    $content = $this->content;
    return "<script{$defer}{$type}{$src}>{$content}</script>";
  }

}