<?php

namespace App\Document;

class Builder {

  private string $lang;
  private Head\Builder $head;
  private Body\Builder $body;

  public function __construct(string $lang, Head\Builder $head, Body\Builder $body) {
    $this->lang = $lang;
    $this->head = $head;
    $this->body = $body;
  }

  public static function create(string $lang, Head\Builder $head, Body\Builder $body): self {
    return new self($lang, $head, $body);
  }

  public function build(): string {
    return <<<HTML
    <!DOCTYPE html>
    <html lang="{$this->lang}">
    {$this->head->build()}
    {$this->body->build()}
    </html>
    HTML;
  }

}