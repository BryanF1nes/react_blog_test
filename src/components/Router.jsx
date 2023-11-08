import Home from './Home.jsx'
import Create from './Create.jsx'
import ErrorPage from './ErrorPage.jsx'
import BlogDetails from './BlogDetails.jsx'
import App from '../App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            { path: '/', element: <Home /> },
            { path: '/create', element: <Create />},
            { path: '/blogs/:id', element: <BlogDetails />}
          ]
        }
      ])

    return <RouterProvider router={router} />
}

export default Router;