import { Text } from '@mantine/core';
import { Fade } from '@/animations';
import { PageProps } from '@/types';

export default function Friends({}: PageProps) {
  return (
    <Fade>
      <Text>This is a</Text>
      <Text fz={32}>Friends</Text>
      <Text>page</Text>
    </Fade>
  );
}
