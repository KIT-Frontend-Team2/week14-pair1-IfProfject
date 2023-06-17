import { useNavigate } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import styled from 'styled-components'

const Header = () => {
	const navigation = useNavigate()

	const onClickLogo = number => {
		navigation('/')
	}

	return (
		<header>
			<S.Container onClick={onClickLogo}>
				<img width={150} src={logo} />
			</S.Container>
		</header>
	)
}

export default Header

const Container = styled.div`
	padding: 5px 20px;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
`

const S = {
	Container,
}
