import { Provider } from 'react-redux'
import './App.css'
// import { worker } from '__mock__/handler'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/routing'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { store } from 'store/store'

function App() {
	if (process.env.NODE_ENV === 'development') {
		// worker.start()
	}

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	)
}

export default App
