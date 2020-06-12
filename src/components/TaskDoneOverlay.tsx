import React from 'react'
import styled from 'rn-css'
import { Image } from 'react-native'

const Column = styled.View`
  justify-content: center;
  align-items: center;
  width: 20em;
  height: 40em;
  background-color: rgba(0, 0, 0, 0.5);
`

const TaskDoneOverlay = () => {
  return (
    <Column>
      <Image
        style={{ width: '150px', height: '150px' }}
        source={require('../../assets/Images/Check.png')}
      />
    </Column>
  )
}

export default TaskDoneOverlay
