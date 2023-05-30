import { Text } from '@mantine/core';
import { ContentLayout } from '@/layouts/ContentLayout';

export default function Profile() {
  return (
    <ContentLayout>
      <Text>This is a</Text>
      <Text fz={32}>Profile</Text>
      <Text>page</Text>
    </ContentLayout>
  );
}
