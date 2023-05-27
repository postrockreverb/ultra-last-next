import { MantineProvider as _MantineProvider } from '@mantine/core';
import { ComponentChildren } from 'preact';

interface MantineThemeProps {
  children: ComponentChildren;
}

export const MantineProvider = ({ children }: MantineThemeProps) => {
  return (
    <_MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      {children}
    </_MantineProvider>
  );
};
