import { Outlet } from 'react-router-dom'
import Header from './Header/header'

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
