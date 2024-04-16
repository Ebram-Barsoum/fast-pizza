import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Error from './ui/Error';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    path: '/fast-pizza',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: 'order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: '/fast-pizza/cart',
        element: <Cart />,
      },
      { path: '*', element: <Navigate to="/fast-pizza" /> },
    ],
  },
  { path: '*', element: <Navigate to="/fast-pizza" /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
