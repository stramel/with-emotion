import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { keyframes, css, Global } from '@emotion/core'

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Basic = styled.div`
  ${basicStyles};
`
const Code = styled.code`
  bkacground-color: linen;
`
const Combined = styled(Basic)`
  ${hoverStyles};
  & ${Code} {
    background-color: linen;
  }
`
const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & ${Code} {
    border: 5px solid red;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`

export default () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: papayawhip;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Head>
        <title>With Emotion</title>
      </Head>
      <div>
        <Basic>Cool Styles</Basic>
        <Combined>
          With <Code>:hover</Code>.
        </Combined>
        <Animated animation={bounce}>Let's bounce. <Code>Test</Code></Animated>
      </div>
    </React.Fragment>
  )
}
