import React from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import Instructions from './Istructions'
import LevelSwitcher from './levelsSwitcher/LevelSwitcher'

const LeftSideBar = () => {
	return (
		<Section>
			<Header>
				<Div>
					<Title>Flex Box Froggy </Title>
				</Div>
				<LevelSwitcher />
			</Header>
			<Instructions />
			<Editor />
		</Section>
	)
}

const Section = styled.section`
	width: 50%;
	min-width: 300px;
	position: relative;
	padding: 2rem;
	background-color: #43a047;
	font-size: 15px;
`
const Header = styled.header`
	display: flex;
	flex-wrap: wrap;
	margin-top: -0.5rem;
	justify-content: space-between;
`
const Div = styled.div``
const Title = styled.h1`
	margin: 0.5rem 0 0;
	transform: scale(1);
	text-transform: uppercase;
	font-family: 'Fredoka One', cursive;
	font-size: 28px;
`

export default LeftSideBar
