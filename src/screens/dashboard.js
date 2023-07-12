import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity  } from 'react-native';

import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import { NavBar } from '../components/navBar'
import { InputFields } from '../components/input';
import { Buttons } from '../components/button';

export const Dashboard = () => {


   const [foodPref, setFoodPref] = useState(false)

    const selectPreferences = () => {
        console.log("Select Preference button clicked!")
        setFoodPref(true)
    }

    useEffect (() =>{
        console.log(foodPref)
    })




    const uploadImage = () => {
        console.log("Upload Images button clicked!")
    }

    


    const addItem = () => {
        console.log("Add Item button clicked!")
    }



    const generateRecipes = () => {
        console.log("Generate Recipes button clicked!")
    }

    return (

    // Screen
    <View className=" flex flex-col min-sw-screen min-h-screen justify-start items-center bg-[#ffffff]">


        {/* StatusBar */}
        <StatusBar backgroundColor="#d8d8d8" barStyle="dark-content" />


        {/* NavBar */}
        <NavBar />



        <View className=" w-[90%] h-[73%] flex flex-col items-center border-[1px] border-[#b2adad] p-6 rounded-md">


            <View className=" w-[100%] h-[63%] flex flex-col justify-center items-center border-[1px] border-[#1EDF38] rounded-md">
                <Image source={require('../images/logo2.png')}/>
                <Text className=" text-[#AFAFAF] text-[20px] w-[80%] text-center leading-8 mt-4">Hey there! I'm ITSY, your culinary spider-body! Share your items, I'll weave menus so snappy!</Text>
            </View>

            {/* Select preference and Upload Image */}
            <View className=" w-[100%] h-[75px] flex flex-row justify-between items-center">

                <TouchableOpacity 
                    className=" w-[150px] h-[30px] flex flex-row justify-center items-center bg-[#b7c2b917] border-[1px] border-[#b6b0bd] rounded-sm"
                    onPress={selectPreferences}
                >
                    {/* <AddIcon /> */}
                    <Text className=" text-[15px] text-[#464449] ">PREFERENCES</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    className=" w-[100px] h-[40px] flex flex-row justify-center items-center bg-[#1EDF38] rounded-lg "
                    onPress={uploadImage}
                >
                    {/* <FileUploadOutlinedIcon /> */}
                    <Text className=" text-[#ffffff] text-[20px] ">Scan</Text>
                </TouchableOpacity>

            </View>


            {/* Input name, quantity or weight */}
            <View className= " w-full flex flex-row justify-between">

                <InputFields 
                    label="Name"
                    placeholder="e.g egg, chicken"
                />

                <InputFields 
                    label="Quantity/Weight(kg)"
                    placeholder="e.g 2, 5, 4"
                    keyboardType = "numeric"
                />

            </View>

            {/* Add item button */}
            <View className=" w-full mt-4">
                <Buttons 
                    onPress = {addItem}
                    label = "Add Item"
                    addStyle = " w-[130px] h-[40px] "
                />
            </View>

        </View>

        <Buttons 
            onPress={generateRecipes}
            label="Generate Recipes"
            addStyle= " w-[90%] h-[50px] mt-5 "
        />





        {/* Selecting food preferences */}
        <View className={ foodPref ? " w-screen h-screen absolute justify-center items-center bg-[#ffffff34]" : "hidden"}>
            <View className=" w-[80%] min-h-[50%] rounded-md p-5 bg-[#ac3b3b] shadow-xl">
                <Buttons 
                    onPress={()=>{setFoodPref(false)}}
                    label="Cancel"
                    addStyle= " w-[130] h-[50px] mt-5 "
                />
            </View>
        </View>

    </View>
  )
}
