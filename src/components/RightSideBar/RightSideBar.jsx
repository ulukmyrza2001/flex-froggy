import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'
import FroggyItem from './FroggyItem'
import Lilypad from './Lilypad'
import { useSelector,useDispatch } from 'react-redux'
import {check} from '../../utils/helpers/check'
const RightSideBar = () => {
	const dispatch = useDispatch()
	const {currentLevel : current,value} = useSelector(state=>state.froggy)
	const level = useSelector(state=>state.froggy.currentLevels.find(item=>item.level === current))
	const froggyRef = useRef()

	useEffect(()=>{
        check(level,value,dispatch)
		froggyRef.current.style = value
	},[value])
	
   const froggys = ()=>{
	   return level.colors.map(color=>{
		   return <FroggyItem key={color} color={color} />
	   })
   }


   const lilypads = () =>{
	return level.colors.map(color=>{
		return <Lilypad key={color} color={color} />
	})
   }


	return (
		<RightSideBarr>
			<Board>
				<Pond ref={froggyRef}>
					{froggys()}
				</Pond>
				<WrapperForLilypad style={level.lilypad}>
					{lilypads()}
				</WrapperForLilypad>
			</Board>
		</RightSideBarr>
	)
}

const RightSideBarr = styled.div``
const Board = styled.div`
	position: sticky;
	top: 0;
	width: 50vw;
	height: 50vw;
	min-width: 300px;
	min-height: 300px;
	max-width: 100vh;
	max-height: 100vh;
	overflow: hidden;
`
const Pond = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1em 0;
	z-index: 20;
`
const WrapperForLilypad = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1em 0;
	z-index: 10;
	border-radius: 0 0 0 10px;
	background-color: #1f5768;
`

export default RightSideBar
