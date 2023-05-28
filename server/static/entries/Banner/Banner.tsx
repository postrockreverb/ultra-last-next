import { createRoot } from 'react-dom/client';
import { Content } from './Content';

const container = document.getElementById('root-banner');
if (container) {
  const root = createRoot(container);
  root.render(<Content />);
}
