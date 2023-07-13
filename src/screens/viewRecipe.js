import React from 'react'
import { View, Text, StatusBar, Image, ScrollView } from 'react-native'

import { NavBar } from '../components/navBar'
import { Buttons } from '../components/button'

export const ViewRecipe = ({navigation}) => {

    const goBack = () => {
        navigation.navigate('Generated')
    }

    const ingredients = [
        {quantity_weight: 2, name: "malaking itlog"},
        {quantity_weight: null, name: "Tubig"},
        {quantity_weight: null, name: "Asin (opsyonal, depende sa inyong panlasa)"},
    ]

    const steps = [
        {step: "1. ", instruction: "Punuin ang isang kaldero ng sapat na tubig na kayang masakop ang mga itlog na lulutuin mo"},
        {step: "2. ", instruction: "Ilagay ang kaldero sa ibabaw ng kalan at painitin ang tubig hanggang sa ito ay kumulo"},
        {step: "3. ", instruction: "Kapag kumukulo na ang tubig, dahan-dahan mong ilagay ang mga itlog gamit ang isang kutsara o pinseta. Siguraduhin na maingat kang maglagay ng mga ito sa kaldero upang hindi sila mabasag"},
        {step: "4. ", instruction: "Takpan ang kaldero at hayaan ang mga itlog na maluto ng 4-6 minuto para sa mga malasado, 8-10 minuto para sa mga medyo matigas, o 12-14 minuto para sa mga matigas"},
        {step: "5. ", instruction: "Kapag natapos na ang tamang oras ng pagluluto na gusto mo, tanggalin ang mga itlog gamit ang isang kutsara at ilipat sa isang malamig na kaserola na may tubig at yelo. Ito ay para matigil ang pagluluto at mapadali ang pagbabalatan"},
        {step: "6. ", instruction: "Kapag malamig na ang mga itlog, maaari mo na silang balatan. Isa-isang tanggalin ang balat ng mga itlog at ibalot sa isang malinis na tela o isang plastik na lalagyan, kung nais mong itago ang mga itlog para sa ibang pagkakataon"},
        {step: "7. ", instruction: "Ilagay ang mga nilutong itlog sa isang platito at lagyan ng kaunting asin kung gusto mo"}
    ]

    return (

    // Screen
    <View className=" flex flex-col min-sw-screen min-h-screen justify-start items-center bg-[#ffffff]">


        {/* StatusBar */}
        <StatusBar backgroundColor="#000000" barStyle="light-content" />


        {/* NavBar */}
        <NavBar />


        <View className=" w-[90%] h-[82%] flex flex-col items-center border-[1px] border-[#b2adad] p-6 rounded-md">

            <View className=" flex flex-row w-full justify-between items-center mb-6 ">
                <Text className=" text-[#000000] text-[25px]">Boiled Egg</Text>

                <Text className=" text-[#000000] text-[15px]">
                    Language: 
                    <Text className=" font-bold ">
                        Tagalog
                    </Text>
                </Text>
            </View>




            <ScrollView className=" w-full min-h-[80%] flex flex-col border-[1px] border-[#1EDF38] rounded-md p-4">

                <View className=" w-full h-full overflow-hidden flex flex-col mb-6 ">


                    <Text className=" text-[20px] font-bold mb-4">Ingredients:</Text>
                        {ingredients.map((items, index) => (
                            <Text className=" text-[17px] font-bold ml-3 ">• {items.quantity_weight} {items.name}</Text>
                        ))}
                    

                    <Text className=" text-[20px] font-bold mb-4 mt-8">Cooking Steps:</Text>
                        {steps.map((items, index)=>(
                            <Text className=" text-[17px] mb-2 text-justify leading-7">{items.step} {items.instruction}</Text>
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
