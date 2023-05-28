import { Anchor, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { PageProps } from '@/types';

export default function Home({}: PageProps) {
  return (
    <Fade>
      <Text>This is a Home page</Text>
      <Anchor href="/profile">profile</Anchor>
    </Fade>
  );
}
