import { useMantineColorScheme } from '@mantine/core';
import { ActionIcon } from '@/components';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export const ColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()}>
      {colorScheme === 'dark' ? <IconSun stroke="1.5" /> : <IconMoonStars stroke="1.5" />}
    </ActionIcon>
  );
};
