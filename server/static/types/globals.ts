import { ColorScheme } from '@mantine/core';

export type WindowColorScheme = {
  onMount: () => void;
  getScheme: () => ColorScheme;
  toggle: (colorScheme?: ColorScheme) => void;
};

export type WindowTranslations = Record<string, string>;

declare global {
  interface Window {
    colorScheme?: WindowColorScheme;
    translations?: WindowTranslations;
  }
}

export {};
