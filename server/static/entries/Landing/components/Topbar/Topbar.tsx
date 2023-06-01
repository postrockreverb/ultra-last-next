import { Flex } from '@mantine/core';
import { Fade } from '@/animations';
import { ColorSchemeButton } from '@/components';

export const Topbar = () => {
  return (
    <Fade>
      <Flex justify="end" p="xs" pr="md">
        <ColorSchemeButton />
      </Flex>
    </Fade>
  );
};
