import { Text } from '@mantine/core';
import { Fade } from '@/animations';
import { ContentLayout } from '@/layouts/ContentLayout';

export default function Home() {
  return (
    <ContentLayout>
      <Fade>
        <Text>This is a</Text>
        <Text fz={32}>Home</Text>
        <Text>page</Text>
      </Fade>
    </ContentLayout>
  );
}
