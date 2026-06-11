import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
