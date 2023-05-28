import { Text } from '@mantine/core';
import { Fade } from '@/animations';
import { PageProps } from '@/types';

export default function Profile({}: PageProps) {
  return (
    <Fade>
      <Text>This is a</Text>
      <Text fz={32}>Profile</Text>
      <Text>page</Text>
    </Fade>
  );
}
