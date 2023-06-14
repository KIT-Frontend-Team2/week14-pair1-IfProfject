import Layout from 'components/Layout'
import DetailPage from 'pages/detail'
import ErrorPage from 'pages/error'
import ListPage from 'pages/list'
import MainPage from 'pages/main'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/issues',
				element: <ListPage />,
			},
			{
				path: '/issues/:issueId',
				element: <DetailPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default router
