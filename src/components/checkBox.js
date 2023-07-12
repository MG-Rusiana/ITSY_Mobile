import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const CheckBox = (props) => {
  return (
    <BouncyCheckbox
        style={{marginTop: 10}}
        size={25}
        fillColor="#1EDF38"
        unfillColor="#FFFFFF"
        text= {props.label}
        iconStyle={{ borderColor: "#1EDF38" }}
        innerIconStyle={{ borderWidth: 1 }}
        onPress={props.onPress}
    />
  )
}
