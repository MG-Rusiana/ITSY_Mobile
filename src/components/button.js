import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Buttons = (props) => {
  return (
    <TouchableOpacity
        className={ props.addStyle + " bg-[#1EDF38] flex justify-center items-center rounded-md"}
        onPress={props.onPress}
    >
        <Text className=" text-[#ffffff] text-[20px] ">{props.label}</Text>
    </TouchableOpacity>
  )
}
