import { lazy, useLocation } from 'preact-iso';
import { Container, Flex } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar/Navbar';
import { Suspense } from 'preact/compat';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Friends = lazy(() => import('./Friends'));

export default function App() {
  const { path } = useLocation();

  return (
    <Flex>
      <Navbar />
      <Container>
        {/* @ts-ignore*/}
        <Suspense fallback={<></>}>
          <AnimatePresence mode="wait" initial={true}>
            {path === '/' && <Home key={path} />}
            {path === '/profile' && <Profile key={path} />}
            {path === '/friends' && <Friends key={path} />}
          </AnimatePresence>
        </Suspense>
      </Container>
    </Flex>
  );
}
