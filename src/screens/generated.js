import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'

import { NavBar } from '../components/navBar'
import { Buttons } from '../components/button'

export const GeneratedRecipes = ({navigation}) => {

    const goBack = () => {
        navigation.navigate('Dashboard')
    }



    const recipes = [
        {number: "1)", name: "Boiled Eggs"},
        {number: "2)", name: "Adobong Manok"},
        {number: "3)", name: "Steak"},
        {number: "4)", name: "Bulalo"},
        {number: "5)", name: "Ice cream"},
        {number: "6)", name: "Leche Flan"},
        {number: "7)", name: "Tinola"},
        {number: "8)", name: "Tapioca"},
        {number: "9)", name: "Omelet"},
        {number: "10)", name: "Siomai"},
        {number: "11)", name: "Sinigang"},
        {number: "12)", name: "Cake"},
    ]



    const viewRecipe = () => {
        console.log('View Recipe button clicked!')
        navigation.navigate('ViewRecipe')
    }


    return (

    // Screen
    <View className=" flex flex-col min-sw-screen min-h-screen justify-start items-center bg-[#ffffff]">


        {/* StatusBar */}
        <StatusBar backgroundColor="#000000" barStyle="light-content" />


        {/* NavBar */}
        <NavBar />


        <View className=" w-[90%] h-[75%] flex flex-col items-center border-[1px] border-[#b2adad] p-6 rounded-md">


            <Text className=" text-[#000000] text-[23px] w-full text-center">Food You Can Cook</Text>

            <Text className=" text-[#B5B1B1] text-[15px] w-full text-center my-3 ">Click "View" button to view recipe and cooking steps</Text>

            <ScrollView className=" w-full min-h-[70%] flex flex-col border-[1px] border-[#1EDF38] rounded-md p-4">
                <View className=" w-full h-full overflow-hidden flex flex-col mb-6 ">
                    {recipes.map((items, index) =>(
                        <View className=" flex flex-row items-center justify-between mb-4">
                            <Text className=" text-[#666C67] text-[18px] ">{items.number} {items.name}</Text>
                            <Buttons 
                                onPress={viewRecipe}
                                label="View" 
                                addStyle=" w-[90px] h-[35px] bg-[#1EDF38] "
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View className=" w-full mt-7">
                <Buttons
                    onPress = {goBack}
                    label = "Back"
                    addStyle = " w-[130px] h-[40px] bg-[#1EDF38] "
                />
            </View>


        </View>



    </View>
  )
}
