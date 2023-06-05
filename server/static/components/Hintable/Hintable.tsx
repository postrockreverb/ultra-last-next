import { Popover, PopoverBaseProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useEffect } from 'react';
import { BACKGROUND_OVERLAY_DARK, BACKGROUND_OVERLAY_LIGHT } from '@/providers';

interface HintProps extends PopoverBaseProps {
  children: ReactNode;
  content: ReactNode;
  needOpen: boolean | undefined;
  delay?: number;
  onClose?: () => void;
}

export const Hintable = ({ children, content, delay = 0.3, needOpen, onClose, ...popoverProps }: HintProps) => {
  const [opened, { close, open }] = useDisclosure(false);

  const handleClose = () => {
    close();
    onClose?.();
  };

  useEffect(() => {
    if (needOpen) {
      setTimeout(open, delay * 1000);
    }
  }, [needOpen, open, delay]);

  return (
    <Popover opened={opened} withArrow shadow="md" {...popoverProps}>
      <Popover.Target>
        <div onMouseEnter={handleClose}>{children}</div>
      </Popover.Target>
      <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? BACKGROUND_OVERLAY_DARK : BACKGROUND_OVERLAY_LIGHT })}>
        <div onMouseEnter={handleClose}>{content}</div>
      </Popover.Dropdown>
    </Popover>
  );
};
