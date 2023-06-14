import './App.css'
import { worker } from '__mock__/handler'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/routing'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
