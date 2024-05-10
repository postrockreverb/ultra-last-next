<?php

namespace App\Document\Head;

class Builder {

  /** @var ElementInterface[] */
  private array $elements = [];

  public static function create(): self {
    return new self();
  }

  public function append(ElementInterface ...$elements): self {
    $this->elements += $elements;
    return $this;
  }

  public function build(): string {
    $head   = [];
    $head[] = '<meta charset="UTF-8">';
    foreach ($this->elements as $element) {
      $head[] = $element->build();
    }
    $html = implode("\n", $head);
    return <<<HTML
    <head>
    {$html}
    </head>
    HTML;
  }

}