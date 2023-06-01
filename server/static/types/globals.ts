import { ColorScheme } from '@mantine/core';

export type WindowColorScheme = {
  onMount: () => void;
  getScheme: () => ColorScheme;
  toggle: (colorScheme?: ColorScheme) => void;
};

declare global {
  interface Window {
    colorScheme?: WindowColorScheme;
  }
}

export {};
