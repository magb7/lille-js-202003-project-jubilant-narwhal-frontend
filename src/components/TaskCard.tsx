import React from 'react'
import styled from 'rn-css'
import { Colors } from '../theme/Colors'
import PenBtn from './Button/PenBtn'
import CheckBtn from './Button/CheckBtn'

const TaskCardWrapper = styled.View<{color: string}>`
    padding: 20px;
    background: ${props => props.color};
    border-radius: 10px;
    justify-content: space-between;
    width: 459px;
    height: 119px;
`
const ViewCardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Placeholder = styled.View`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background: gray;
`
const TaskCardText = styled.Text`
  color: white;
  font-size: 2em;
`
const TaskCard = () => {
  return (
    <TaskCardWrapper color={Colors.cardBckg.svt}>
      <ViewCardRow>
        <ViewCardRow>
          <Placeholder />
          <TaskCardText>Matière</TaskCardText>
        </ViewCardRow>
        <PenBtn />
      </ViewCardRow>
      <ViewCardRow>
        <TaskCardText>Devoir à faire</TaskCardText>
        <CheckBtn />
      </ViewCardRow>
    </TaskCardWrapper>
  )
}

export default TaskCard
