import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { ReactNode } from 'react';
import { Colors } from '@/utils';

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
        color: Colors.text[theme.colorScheme],
        borderColor: Colors.border[theme.colorScheme],
        ':hover': {
          backgroundColor: Colors.hover[theme.colorScheme],
        },
      })}
    >
      {children}
    </MantineActionIcon>
  );
};
