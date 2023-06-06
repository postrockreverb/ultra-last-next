import { Box, Button, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { ContentLayout } from '@/layouts/ContentLayout';
import { Translations } from '@/utils';

export default function Home() {
  return (
    <ContentLayout>
      <Fade>
        <Text inline fz={32}>
          Home
        </Text>
        <Box mt="xl">
          {Translations.replaceReact(Translations.getKey('not_independent_button'), {
            button: <Button key="button">{Translations.getKey('button')}</Button>,
          })}
        </Box>
      </Fade>
    </ContentLayout>
  );
}
