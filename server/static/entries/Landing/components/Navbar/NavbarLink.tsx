import { Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  href?: string;
}

export const NavbarLink = ({ icon: Icon, label, href, active }: NavbarLinkProps) => {
  const iconColor = active ? undefined : 'gray';

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link to={href ?? ''}>
        <Icon size="1.2rem" stroke={1.5} color={iconColor} />
      </Link>
    </Tooltip>
  );
};
