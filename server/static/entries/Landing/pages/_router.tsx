import { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Friends = lazy(() => import('./Friends'));

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="friends" element={<Friends />} />
      </Routes>
    </AnimatePresence>
  );
}
