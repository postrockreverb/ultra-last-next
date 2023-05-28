import { Anchor, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { Like } from '@/components';
import { PageProps } from '@/types';

export default function Profile({}: PageProps) {
  return (
    <Fade>
      <Text>This is a Profile page</Text>
      <Like count={1} />
      <Anchor href="/">home</Anchor>
    </Fade>
  );
}
