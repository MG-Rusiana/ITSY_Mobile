import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavBar } from '../components/navBar'

export const Dashboard = () => {
  return (

    // Screen
    <View className=" flex flex-col min-w-screen min-h-screen justify-center items-center bg-[#ffffff]">


        {/* StatusBar */}
        <StatusBar backgroundColor="#d8d8d8" barStyle="dark-content" />


        {/* NavBar */}
        <NavBar />



    </View>
  )
}
