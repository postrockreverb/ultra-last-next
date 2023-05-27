import { Fade } from '@/animations';
import { Button, Container, MantineProvider, Text } from '@mantine/core';

export const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Container>
        <main>
          <Fade>
            <Text height="xl">Hello, world</Text>
            <Button>tap me :]</Button>
          </Fade>
        </main>
      </Container>
    </MantineProvider>
  );
};
