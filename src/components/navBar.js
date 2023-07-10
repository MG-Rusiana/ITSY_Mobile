import React from 'react'
import { Image, View } from 'react-native'

export const NavBar = () => {
  return (
    <View className=" flex flex-row justify-center items-center w-[100%] absolute top-0 border-b-[1px] border-b-[#b2adad] bg-[#ffffff] ">
        <Image source={require('../images/logo.png')} />
    </View>
  )
}
