import React from 'react'
import { View } from 'react-native'
import styled from 'rn-css'

const TextTitle = styled.Text`
  font-size: 3em;
`

const AddNewHomework = () => {
  return (
    <View>
      <TextTitle>Ajoute un devoir à faire</TextTitle>
    </View>
  )
}

export default AddNewHomework