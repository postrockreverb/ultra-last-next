import { Container } from '@mantine/core';
import { MantineProvider } from '@/providers';
import { ErrorBoundary, LocationProvider, Router } from 'preact-iso';

import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

export default function App() {
  return (
    <MantineProvider>
      <Container>
        <main>
          <LocationProvider>
            <ErrorBoundary>
              <Router>
                <Home path="/" />
                <Profile path="/profile" />
              </Router>
            </ErrorBoundary>
          </LocationProvider>
        </main>
      </Container>
    </MantineProvider>
  );
}
