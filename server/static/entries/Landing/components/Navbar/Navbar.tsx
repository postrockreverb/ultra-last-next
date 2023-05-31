import { Navbar as _Navbar, Stack } from '@mantine/core';
import { routes } from './routes';
import { NavbarLink } from './NavbarLink';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname: path } = useLocation();

  const links = routes.map((link) => <NavbarLink {...link} key={link.label} href={link.href} active={path === link.href} />);

  return (
    <_Navbar height={200} width={{ base: 80 }} p="md">
      <_Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </_Navbar.Section>
    </_Navbar>
  );
};
