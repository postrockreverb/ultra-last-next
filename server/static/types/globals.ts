import { ColorScheme } from '@mantine/core';

export type WindowColors = {
  onMount: () => void;
  getScheme: () => ColorScheme;
  toggle: (colorScheme?: ColorScheme) => void;
};

declare global {
  interface Window {
    colors?: WindowColors;
  }
}

export {};
