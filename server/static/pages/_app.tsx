import { Fade } from '@/animations';
import { Button, Container, Text } from '@mantine/core';
import { MantineProvider } from '@/providers';

export default function App() {
  return (
    <MantineProvider>
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
}
