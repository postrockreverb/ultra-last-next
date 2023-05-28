import { Anchor, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { Like } from '@/components';
import { PageProps } from '@/types';

export default function Home({}: PageProps) {
  return (
    <Fade>
      <Text>This is a Home page</Text>
      <Like count={1} />
      <Anchor href="/profile">profile</Anchor>
    </Fade>
  );
}
