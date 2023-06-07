import { Text } from '@mantine/core';
import { ContentLayout } from '@/layouts/ContentLayout';
import { Translations } from '@/utils';

export default function Friends() {
  return (
    <ContentLayout>
      <Text fz={32}>{Translations.getKey('friends_title')}</Text>
    </ContentLayout>
  );
}
