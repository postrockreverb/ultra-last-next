import { createRoot } from 'react-dom/client';
import { Like } from '@/components';

const container = document.getElementById('root2');
if (container) {
  const root = createRoot(container);
  root.render(<Like count={1} />);
}
