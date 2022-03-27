import React from 'react'
import styled from 'styled-components'

const Lilypad = ({ color }) => {
	return (
		<DivLilypad>
			<DivBg color={color} />
		</DivLilypad>
	)
}
const DivLilypad = styled.div`
	position: relative;
	width: 20%;
	height: 20%;
	overflow: hidden;
`
const DivBg = styled.div`
	width: 100%;
	height: 100%;
	background-image: ${({ color }) =>
		color === 'green'
			? 'var(--lilypad-green)'
			: color === 'red'
			? 'var(--lilypad-red)'
			: 'var(--lilypad-yellow)'};
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
`
export default Lilypad
