import { Text } from '@mantine/core';
import { ContentLayout } from '@/layouts/ContentLayout';
import { Translations } from '@/utils';

export default function Profile() {
  return (
    <ContentLayout>
      <Text fz={32}>{Translations.getKey('profile_title')}</Text>
    </ContentLayout>
  );
}
