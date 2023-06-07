import { Box, Button, Text } from '@mantine/core';
import { Fade } from '@/animations';
import { ContentLayout } from '@/layouts/ContentLayout';
import { Translations } from '@/utils';

export default function Home() {
  return (
    <ContentLayout>
      <Fade>
        <Text inline fz={32}>
          {Translations.getKey('home_title')}
        </Text>
        <Box mt="xl">
          {Translations.replaceReact(Translations.getKey('home_not_independent_button_text'), {
            button: <Button key="button">{Translations.getKey('home_not_independent_button_button')}</Button>,
          })}
        </Box>
      </Fade>
    </ContentLayout>
  );
}
