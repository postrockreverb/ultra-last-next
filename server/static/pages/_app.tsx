import { Container } from '@mantine/core';
import { MantineProvider } from '@/providers';
import { ErrorBoundary, lazy, LocationProvider, Router } from 'preact-iso';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));

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
