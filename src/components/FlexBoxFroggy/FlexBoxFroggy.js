import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'

const FlexBoxFroggy = () => {
	return (
		<>
			<GlobalStyle />
			<WrapperDiv>
				<LeftSideBar />
				<RightSideBar />
			</WrapperDiv>
		</>
	)
}

const WrapperDiv = styled.div`
	display: flex;
	width: 100%;
`
const GlobalStyle = createGlobalStyle`
  body{
     background-color: #43a047;
      color: rgba(255,255,255,0.8);
  }
`

export default FlexBoxFroggy
