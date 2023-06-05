import { Anchor, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface NavbarLinkProps {
  icon: FC<any>;
  label: string;
  active?: boolean;
  href?: string;
}

export const NavbarLink = ({ icon: Icon, label, href, active }: NavbarLinkProps) => {
  const iconColor = active ? undefined : 'gray';

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Anchor component="span">
        <Link to={href ?? ''}>
          <Icon size="1.2rem" stroke={1.5} color={iconColor} />
        </Link>
      </Anchor>
    </Tooltip>
  );
};
