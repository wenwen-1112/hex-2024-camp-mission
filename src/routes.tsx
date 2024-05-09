import { useRoutes, Navigate } from 'react-router-dom'

import Layout from '@/layouts'
import Home from '@/page/Home'
import Collection from '@/page/Collection'
import Service from '@/page/Service'
import Blog from '@/page/Blog'
import Post from '@/page/Post'

const AllRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'collection',
          element: <Collection />
        },
        {
          path: 'service',
          element: <Service />
        }
      ]
    },
    {
      path: '/blog',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Blog />
        },
        {
          path: 'post/:postId',
          element: <Post />
        },
      ]
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ])
return routes
}

export default AllRoutes