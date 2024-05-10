<?php

namespace App\Document\Body;

class Builder {

  /** @var ElementInterface[] */
  private array $elements = [];

  public static function create(): self {
    return new self();
  }

  public function addend(ElementInterface ...$elements): self {
    $this->elements += $elements;
    return $this;
  }

  public function build(): string {
    $body = [];
    foreach ($this->elements as $element) {
      $body[] = $element->build();
    }
    $html = implode("\n", $body);
    return <<<HTML
    <body>
    {$html}
    </body>
    HTML;
  }

}