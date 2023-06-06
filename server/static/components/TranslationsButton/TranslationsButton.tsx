import { useState } from 'react';
import { createStyles, Group, Menu, rem, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { BACKGROUND_OVERLAY_DARK, BACKGROUND_OVERLAY_LIGHT, BORDER_DARK, BORDER_LIGHT, HOVER_DARK, HOVER_LIGHT } from '@/providers';
import { Translations } from '@/utils';

const data = [
  { label: 'En', value: 'en' },
  { label: 'Ру', value: 'ru' },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => {
  const getBackgroundColor = () => {
    if (!opened) {
      return 'transparent';
    }

    if (theme.colorScheme === 'dark') {
      return HOVER_DARK;
    }

    return HOVER_LIGHT;
  };

  return {
    control: {
      width: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
      border: `${rem(1)} solid ${theme.colorScheme === 'light' ? BORDER_LIGHT : BORDER_DARK}`,
      transition: 'background-color 150ms ease',
      backgroundColor: getBackgroundColor(),

      '&:hover': {
        backgroundColor: theme.colorScheme === 'light' ? HOVER_LIGHT : HOVER_DARK,
      },
    },

    label: {
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
    },

    icon: {
      transition: 'transform 150ms ease',
      transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
  };
});

export const TranslationsButton = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data.find((item) => item.value === Translations.getLocale()) ?? data[0]);

  const items = data.map((item) => (
    <form key={item.label} method="post">
      <Menu.Item onClick={() => setSelected(item)} name="set-translations" type="submit" value={item.value}>
        {item.label}
      </Menu.Item>
    </form>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
      trigger="hover"
      openDelay={100}
      closeDelay={400}
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? BACKGROUND_OVERLAY_DARK : BACKGROUND_OVERLAY_LIGHT })}>
        {items}
      </Menu.Dropdown>
    </Menu>
  );
};
