import Fab from '@mui/material/Fab'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
const BackButton = () => {
	const navigate = useNavigate()
	const backMove = () => {
		navigate(-1)
	}

	return (
		<BackBtn onClick={backMove}>
			<Fab color="primary">
				<LogoutOutlinedIcon />
			</Fab>
		</BackBtn>
	)
}
export default BackButton

const BackBtn = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 900;
`
