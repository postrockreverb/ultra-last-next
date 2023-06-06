import { ReactNode, useEffect, useReducer } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider as _MantineProvider, MantineThemeOverride } from '@mantine/core';

export const BACKGROUND_LIGHT = 'rgb(255, 255, 255)';
export const BACKGROUND_DARK = 'rgb(26, 32, 44)';
export const BACKGROUND_OVERLAY_LIGHT = 'rgb(255, 255, 255)';
export const BACKGROUND_OVERLAY_DARK = 'rgb(45,55,72)';
export const TEXT_LIGHT = 'rgb(0, 0, 0)';
export const TEXT_DARK = 'rgba(255, 255, 255, 0.92)';
export const BORDER_LIGHT = '#E2E8F0';
export const BORDER_DARK = 'rgba(255, 255, 255, 0.16)';
export const HOVER_LIGHT = 'rgb(237, 242, 247)';
export const HOVER_DARK = 'rgba(173, 181, 189, 0.05)';

const getMantineTheme = (colorScheme: 'light' | 'dark'): MantineThemeOverride => {
  return {
    colorScheme,
    globalStyles: (theme) => ({
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? BACKGROUND_DARK : BACKGROUND_LIGHT,
        color: theme.colorScheme === 'dark' ? TEXT_DARK : TEXT_LIGHT,
      },
    }),
  };
};

interface MantineThemeProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineThemeProps) => {
  const [, update] = useReducer((x) => x + 1, 0);

  const toggleColorScheme = (value?: ColorScheme) => {
    window.colorScheme?.toggle(value);
  };

  useEffect(() => {
    window.colorScheme?.onMount();
    window.addEventListener('colorschemeupdate', update);
    return () => {
      window.removeEventListener('colorschemeupdate', update);
    };
  }, []);

  const colorScheme = window.colorScheme?.getScheme() ?? 'dark';
  const theme = getMantineTheme(colorScheme);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <_MantineProvider withGlobalStyles withNormalizeCSS withCSSVariables theme={theme}>
        {children}
      </_MantineProvider>
    </ColorSchemeProvider>
  );
};
