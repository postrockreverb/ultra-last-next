import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { ReactNode } from 'react';

const BORDER_LIGHT = '#E2E8F0';
const BORDER_DARK = 'rgba(255, 255, 255, 0.16)';

const HOVER_LIGHT = 'rgb(237, 242, 247)';
const HOVER_DARK = 'rgba(173, 181, 189, 0.05)';

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
