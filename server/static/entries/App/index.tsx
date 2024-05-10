import { createRoot } from 'react-dom/client';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Terminal } from 'lucide-react';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <div className="w-screen h-screen container flex items-center justify-center">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    </div>,
  );
}
