import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const InputFields = (props) => {
  return (
    <View className=" flex flex-col gap-1">
        <Text>{props.label}</Text>
        <TextInput 
            className=" border-[1px] border-[#1EDF38] rounded-md h-[40px] w-[130px] pl-3 focus:border-[2px]"
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
        />
    </View>
  )
}
