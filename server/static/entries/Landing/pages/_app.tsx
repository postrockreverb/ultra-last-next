import { BrowserRouter } from 'react-router-dom';
import { Container, Flex } from '@mantine/core';
import { MantineProvider } from '@/providers';
import { Navbar, Topbar } from '../components';
import Router from './_router';

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Topbar />
        <Flex>
          <Navbar />
          <Container>
            <Router />
          </Container>
        </Flex>
      </BrowserRouter>
    </MantineProvider>
  );
}
