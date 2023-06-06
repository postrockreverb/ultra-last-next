import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { ReactNode } from 'react';
import { BORDER_DARK, BORDER_LIGHT, HOVER_DARK, HOVER_LIGHT } from '@/providers';

interface ActionIconProps {
  onClick: () => void;
  children: ReactNode;
}

export const ActionIcon = ({ onClick, children }: ActionIconProps) => {
  return (
    <MantineActionIcon
      ml="xs"
      onClick={onClick}
      variant="outline"
      size="40px"
      radius="0.375rem"
      sx={(theme) => ({
        transitionDuration: '300ms',
        color: theme.colorScheme === 'light' ? theme.black : theme.white,
        borderColor: theme.colorScheme === 'light' ? BORDER_LIGHT : BORDER_DARK,
        ':hover': {
          backgroundColor: theme.colorScheme === 'light' ? HOVER_LIGHT : HOVER_DARK,
        },
      })}
    >
      {children}
    </MantineActionIcon>
  );
};
