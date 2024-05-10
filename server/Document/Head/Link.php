<?php

namespace App\Document\Head;

use App\Document\Entries\Files;

class Link implements ElementInterface {

  public const REL_STYLESHEET = "stylesheet";

  private string $rel;

  private string $href;

  public function __construct(string $rel, string $href) {
    $this->rel = $rel;
    $this->href = $href;
  }

  public static function fromEntry(string $filename, string $rel): self {
    $href = Files::getPath($filename);
    return new self($rel, $href);
  }

  public function build(): string {
    $rel = $this->rel ? " rel=\"{$this->rel}\"" : "";
    $href = $this->href ? " href=\"{$this->href}\"" : "";
    return "<link{$rel}{$href}>";
  }

}