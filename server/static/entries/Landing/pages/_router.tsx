import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { lazy, useLocation } from 'preact-iso';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Friends = lazy(() => import('./Friends'));

export default function Router() {
  const { path } = useLocation();

  return (
    <>
      {/* @ts-ignore*/}
      <Suspense fallback={<></>}>
        <AnimatePresence mode="wait" initial={true}>
          {path === '/' && <Home key={path} />}
          {path === '/profile' && <Profile key={path} />}
          {path === '/friends' && <Friends key={path} />}
        </AnimatePresence>
      </Suspense>
    </>
  );
}
