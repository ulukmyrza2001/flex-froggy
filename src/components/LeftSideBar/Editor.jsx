import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FroggyAction } from '../../store/FroggyLevels'

const Editor = () => {
	const dispatch = useDispatch()
  const currentLevel = useSelector(state=>state.froggy.currentLevel)
  const valueStyle = useSelector(state=>state.froggy.value)
  const level = useSelector(state=>state.froggy.currentLevels.find(item=>item.level === currentLevel))
	const [game, setGame] = useState('')
	const changeStyle = (e) => {
		setGame(e.target.value)
		dispatch(FroggyAction.gameStyle(e.target.value))
	}
  console.log(valueStyle);
	return (
		<EditorStyled>
			<DivContent>
				<DivList>
					1 <br /> 2 <br /> 3<br /> 4<br /> 5<br /> 6<br /> 7<br /> 8
					<br /> 9 <br />
					10
				</DivList>
				<Pre>
					#pont {'{'} <br /> display: flex;{' '}
				</Pre>
				<TextArea
					height={level.pondHeight}
					value={game}
					onChange={changeStyle}
				></TextArea>
        <Pre> {'}'}</Pre>
			</DivContent>
			<Button>Next</Button>
		</EditorStyled>
	)
}






const EditorStyled = styled.div`
	position: relative;
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	line-height: 1.5;
	color: #777;
`
const DivContent = styled.div`
	height: 260px;
	position: relative;
	padding: 10px 10px 10px 40px;
	background-color: #e0e0e0;
	border-radius: 4px;
	overflow: hidden;
`
const DivList = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	padding: 10px 6px;
	text-align: right;
	background-color: #999;
	color: #d5d5d5;
`
const Pre = styled.pre`
	margin: 0;
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	line-height: 1.5;
	color: #777;
`
const TextArea = styled.textarea`
	display: block;
	width: calc(100% - 16px);
	height: ${props=>props.height * 24 + 'px'};
	margin-left: 16px;
	border: none;
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	outline: none;
	resize: none;
	overflow: auto;
`
const Button = styled.button`
	display: inline-block;
	padding: 0.4em 0.8em;
	background-color: #d11606;
	border: none;
	border-radius: 4px;
	font-family: 'PT Sans', sans-serif;
	font-size: 16px;
	line-height: 24px;
	color: #fff;
	position: absolute;
	right: 1em;
	bottom: 1em;
	padding-top: 0.3em;
	cursor: ${(props) => (props.isValid ? 'pointer' : 'no-drop')};
	opacity: ${(props) => (props.isValid ? '1' : '0.5')};
`

export default Editor
