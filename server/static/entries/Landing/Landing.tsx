import { createRoot } from 'react-dom/client';
import { LocationProvider } from 'preact-iso';
import { MantineProvider } from '@/providers';
import App from './pages/_app';

const container = document.getElementById('root-landing');
if (container) {
  const root = createRoot(container);
  root.render(
    <MantineProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </MantineProvider>,
  );
}
