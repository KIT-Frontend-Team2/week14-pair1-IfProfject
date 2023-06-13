import './App.css'
import { worker } from '__mock__/handler'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/routing'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	return (
		<RouterProvider router={router}>
			<div>:)</div>
		</RouterProvider>
	)
}

export default App
