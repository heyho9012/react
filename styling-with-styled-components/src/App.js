import React, { useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import Button from './components/Button'
import Dialog from './components/Dialog'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.color};
  border-radius: 50%;
  ${props => props.huge && 
    css`
      width: 10rem;
      height: 10rem;
    `
  }
`

const AppBlock = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 512px;
  border: 1px solid #000;
`
const ButtonGroup = styled.div`
  & + & {
    margin: 1rem 0 0;
  }
  & + button {
    margin: 4rem 0 0;
  }
`

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
}

function App() {
  const [dialog, setDialog] = useState(false)
  const onClick = () => {
    setDialog(true)
  }

  const onConfirm = () => {
    console.log('confirm');
    setDialog(false)
  }
  const onCancel = () => {
    console.log('cancel');
    setDialog(false)
  }

  return (
    <>
      <Circle color="blue" huge />
      <ThemeProvider theme={{
        palette
      }}>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button color="gray">BUTTON</Button>
            <Button color="pink" size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button outline size="large">BUTTON</Button>
            <Button outline color="gray">BUTTON</Button>
            <Button outline color="pink" size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button fullWidth size="large">BUTTON</Button>
            <Button fullWidth color="gray" size="large">BUTTON</Button>
            <Button fullWidth color="pink" size="large">BUTTON</Button>
          </ButtonGroup>
          <Button color="pink" size="large" onClick={onClick}>삭제</Button>
          <Dialog visible={dialog} title="정말로 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" onConfirm={onConfirm} onCancel={onCancel}>
            데이터를 정말로 삭제하시겠습니까?
          </Dialog>
        </AppBlock>
      </ThemeProvider>
    </>
  )
}

export default App
