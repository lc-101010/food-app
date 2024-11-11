import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Land from './pages/Land';

const routes = [{ path: '/', element: <Land /> }];

const options = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
  },
};

const router = createBrowserRouter(routes, options);

const App = () => <RouterProvider router={router} future={{ v7_startTransition: true }} />;

export default App;
