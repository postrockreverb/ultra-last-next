import { createRoot } from 'react-dom/client';
import { ColorSchemeButton, Hintable, TranslationsButton } from '@/components';
import { MantineProvider } from '@/providers';
import { Flex } from '@mantine/core';
import { Fade } from '@/animations';
import { Translations } from '@/utils';

const container = document.getElementById('root-topbar');
if (container) {
  const root = createRoot(container);
  root.render(
    <MantineProvider>
      <Fade>
        <Flex justify="end" p="xs" pr="md">
          <Hintable content={Translations.getKey('hints_topbar_buttons')} needOpen={true} position="left">
            <Flex>
              <TranslationsButton />
              <ColorSchemeButton />
            </Flex>
          </Hintable>
        </Flex>
      </Fade>
    </MantineProvider>,
  );
}
