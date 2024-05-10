<?php

namespace App\Document\Head;

class Title implements ElementInterface {

  private string $contents;

  public function __construct(string $contents) {
    $this->contents = $contents;
  }

  public static function create(string $contents): self {
    return new self($contents);
  }

  public function build(): string {
    $contents = $this->contents;
    return "<title>{$contents}</title>";
  }

}