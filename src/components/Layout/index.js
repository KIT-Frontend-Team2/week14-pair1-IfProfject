import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import Footer from './Footer/footer'

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
