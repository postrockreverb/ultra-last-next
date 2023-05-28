import { Text } from '@mantine/core';
import { Fade } from '@/animations';
import { PageProps } from '@/types';

export default function Home({}: PageProps) {
  return (
    <Fade>
      <Text>This is a</Text>
      <Text fz={32}>Home</Text>
      <Text>page</Text>
    </Fade>
  );
}
