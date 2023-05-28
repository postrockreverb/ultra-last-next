import { ErrorBoundary, lazy, LocationProvider, Router } from 'preact-iso';
import { Flex, Container } from '@mantine/core';
import { MantineProvider } from '@/providers';
import { Navbar } from '../components/Navbar/Navbar';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Friends = lazy(() => import('./Friends'));

export default function App() {
  return (
    <MantineProvider>
      <LocationProvider>
        <Flex>
          <Navbar />
          <Container>
            <ErrorBoundary>
              <Router>
                <Home path="/" />
                <Profile path="/profile" />
                <Friends path="/friends" />
              </Router>
            </ErrorBoundary>
          </Container>
        </Flex>
      </LocationProvider>
    </MantineProvider>
  );
}
