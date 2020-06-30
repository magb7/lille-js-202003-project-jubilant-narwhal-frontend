import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'rn-css'
import moment from 'moment'
import DayColumn from '../components/DayColumn'
import RightArrow from '../components/Button/RightArrow'
import LeftArrow from '../components/Button/LeftArrow'

const SwitchTextStyled = styled.Text`
  width: 100px;
  height: 100px;
  display: inline-block;
`
const CalendarView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const TextCalendar = styled.Text`
  font-size: 3em;
  text-align: center;
`
const SwitchDayWeekButton = (navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CalendarDay')}>
      <SwitchTextStyled>Semaine </SwitchTextStyled>
    </TouchableOpacity>
  )
}

moment.locale('fr')

const CalendarDay = () => {
  const today = new Date()
  const oneDay = moment(today).format('dddd Do MMMM ')
  const [day, setDay] = useState(moment(today).format('dddd Do MMMM'))
  // const [numberToAdd, setNumberToAdd] = useState(0)
  // const [numberToRemove, setNumberToRemove] = useState(0)
  const [number, setNumber] = useState(1)

  const addOneDay = () => {
    setNumber(number + 1)
    console.log(number)
    setDay(
      moment()
        .add(number, 'days')
        .format('dddd Do MMMM')
    )
  }

  const removeOneDay = () => {
    setNumber(number - 1)
    console.log(number)
    setDay(
      moment()
        .add(number, 'days')
        .format('dddd Do MMMM')
    )
  }
  return (
    <>
      <View>
        <TextCalendar>{oneDay}</TextCalendar>
      </View>
      <TouchableOpacity onPress={removeOneDay}>
        <LeftArrow />
      </TouchableOpacity>
      <TouchableOpacity onPress={addOneDay}>
        <RightArrow />
      </TouchableOpacity>
      <CalendarView>
        <DayColumn day={day} />
      </CalendarView>

      <SwitchDayWeekButton />
    </>
  )
}

export default CalendarDay
