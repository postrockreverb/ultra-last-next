import { useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '../ActionIcon';

export const ColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()}>
      {colorScheme === 'dark' ? <IconSun stroke="1.5" /> : <IconMoonStars stroke="1.5" />}
    </ActionIcon>
  );
};
