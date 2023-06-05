import { createRoot } from 'react-dom/client';
import { ColorSchemeButton, Hintable } from '@/components';
import { MantineProvider } from '@/providers';
import { Flex } from '@mantine/core';
import { Fade } from '@/animations';

const container = document.getElementById('root-color-scheme-button');
if (container) {
  const root = createRoot(container);
  root.render(
    <MantineProvider>
      <Fade>
        <Flex justify="end" p="xs" pr="md">
          <Hintable content="This button is independent application" needOpen={true} position="left">
            <ColorSchemeButton />
          </Hintable>
        </Flex>
      </Fade>
    </MantineProvider>,
  );
}
