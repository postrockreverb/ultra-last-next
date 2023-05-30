import { LocationProvider } from 'preact-iso';
import { Container, Flex } from '@mantine/core';
import { MantineProvider } from '@/providers';
import { Navbar } from '../components/Navbar/Navbar';
import Router from './_router';

export default function App() {
  return (
    <MantineProvider>
      <LocationProvider>
        <Flex>
          <Navbar />
          <Container>
            <Router />
          </Container>
        </Flex>
      </LocationProvider>
    </MantineProvider>
  );
}
