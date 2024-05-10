<?php

namespace App\Document\Body;

class Plain implements ElementInterface {

  private string $content;

  public function __construct(string $content) {
    $this->content = $content;
  }

  public static function create(string $content): self {
    return new self($content);
  }

  public function build(): string {
    return $this->content;
  }

}