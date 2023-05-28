import { Anchor, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { PageProps } from '@/types';

export default function Profile({}: PageProps) {
  return (
    <Fade>
      <Text>This is a Profile page</Text>
      <Anchor href="/">home</Anchor>
    </Fade>
  );
}
