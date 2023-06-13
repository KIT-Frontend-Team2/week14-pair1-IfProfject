import './App.css'
import { worker } from '__mock__/handler'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	return <div>:)</div>
}

export default App
