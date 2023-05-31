import { MantineProvider as _MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

interface MantineThemeProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineThemeProps) => {
  return (
    <_MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      {children}
    </_MantineProvider>
  );
};
