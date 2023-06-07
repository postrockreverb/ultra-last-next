import { ReactNode, useEffect, useReducer } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider as _MantineProvider, MantineThemeOverride } from '@mantine/core';
import { Colors } from '@/utils';

const getMantineTheme = (colorScheme: 'light' | 'dark'): MantineThemeOverride => {
  return {
    colorScheme,
    globalStyles: (theme) => ({
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor: Colors.background[theme.colorScheme],
        color: Colors.text[theme.colorScheme],
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
