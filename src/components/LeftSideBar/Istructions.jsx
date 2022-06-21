import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Instructions = () => {
	const current = useSelector((state) => state.froggy.currentLevel)
	const levels = useSelector((state) =>
		state.froggy.currentLevels.filter((item) => item.level === current),
	)
	console.log(levels)
	return (
		<Div>
			{/* {levels.map((item) => (
				<React.Fragment key={item}>
					{item.questionDescription}
				</React.Fragment>
			))} */}
			{levels[current - 1].questionDescription}
		</Div>
	)
}

const Div = styled.div`
	padding-top: 1rem;
	p,
	ul {
		margin: 0;
		padding-bottom: 1em;
	}
	li {
		line-height: 1.5;
	}

	.help {
		margin-left: 4px;
		cursor: pointer;
		border-bottom: 1px solid rgba(255, 255, 255, 0.7);
	}

	code {
		padding: 0 2px;
		background-color: rgba(255, 255, 255, 0.2);
		font-family: 'Source Code Pro', monospace;
		font-weight: 900;
		color: rgba(255, 255, 255, 0.8);
		white-space: nowrap;
	}

	/* dropdown */

	& p code span {
		display: none;
	}

	& p code:hover span {
		display: block;
	}

	code span {
		position: relative;
		font-size: 14px;
	}

	.dropdown {
		font-weight: 500;
		width: 350px;
		height: 90px;
		position: absolute;
		margin: 12px 0 0 62px;
		max-width: 350px;
		padding: 1em 1em;
		background-color: #2c3e50;
		border-radius: 4px;
		font-size: 12px;
		line-height: 1.5;
		z-index: 60;
	}

	.dropdown::after {
		content: '';
		position: absolute;
		top: -12px;
		left: 12px;
		width: 0;
		height: 0;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
		border-bottom: 12px solid #2c3e50;
	}
`
export default Instructions
