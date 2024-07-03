import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Package from '../../Pages/Package/Package/Package';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Service from '../../Pages/Service/Service';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Checkout from '../../Pages/Checkout/Checkout';
import Orders from '../../Pages/Orders/Orders';
import Blog from '../../Pages/Blog/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(`https://elon-photography-server.vercel.app/services/`),
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () =>
          fetch(`https://elon-photography-server.vercel.app/services/`),
      },
      {
        path: '/services',
        element: <Package></Package>,
        loader: () =>
          fetch(`https://elon-photography-server.vercel.app/services/`),
      },
      {
        path: '/service/:id',
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://elon-photography-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/blog',
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://elon-photography-server.vercel.app/orders`),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://elon-photography-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
    ],
  },
]);
