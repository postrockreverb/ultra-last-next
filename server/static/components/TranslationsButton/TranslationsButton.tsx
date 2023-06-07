import { useState } from 'react';
import { createStyles, Group, Menu, rem, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Colors, Translations } from '@/utils';

const data = [
  { label: 'En', value: 'en' },
  { label: 'Ру', value: 'ru' },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => {
  const getBackgroundColor = () => {
    if (!opened) {
      return 'transparent';
    }
    return Colors.hover[theme.colorScheme];
  };

  return {
    control: {
      width: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
      border: `${rem(1)} solid ${Colors.border[theme.colorScheme]}`,
      transition: 'background-color 150ms ease',
      backgroundColor: getBackgroundColor(),

      '&:hover': {
        backgroundColor: Colors.hover[theme.colorScheme],
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
      <Menu.Dropdown sx={(theme) => ({ background: Colors.overlay_background[theme.colorScheme] })}>{items}</Menu.Dropdown>
    </Menu>
  );
};
