import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView  } from 'react-native';

import { NavBar } from '../components/navBar'
import { InputFields } from '../components/input';
import { Buttons } from '../components/button';
import { CheckBox } from '../components/checkBox';

export const Dashboard = ({navigation}) => {

    const [items,setItems] = useState({
        name:"", 
        qk:"",
    })
    const [product,setproducts]= useState([])
    const [messages, setMessages] = useState([]);

    const handleNameChange = (text) => {
        setItems({ ...items, name: text });
      };
    
    const handleQkChange = (text) => {
        setItems({ ...items, qk: text });
    };


    function addItems() {

        if (items.name !="") {
          setproducts([...product,`${items.qk} ${items.name}`])
        
        const newMessage = {
          product: product.length ==0? `${items.qk} ${items.name}`:`${[...product,` ${items.qk} ${items.name}`]} ` ,
          direction: 'outgoing',
          from: "user"
        };
        
    
        setMessages([...messages, newMessage]);
    
    
        console.table(messages)
        setItems({name:"",qk:""})
        }
    
      }

      //Delete Items
      const handleDeleteItem = (index) => {
        // Create a new array that excludes the item at the given index
        const updatedProduct = product.filter((_, i) => i !== index);
        setproducts(updatedProduct);
      };

      const scrollViewRef = useRef(null);

      // Function to scroll to the bottom of the ScrollView
      const scrollToBottom = () => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      };
    
      useEffect(() => {
        scrollToBottom();
      }, [messages]);

   

    const [foodPref, setFoodPref] = useState(false)

    const selectPreferences = () => {
        console.log("Select Preference button clicked!")
        setFoodPref(true)
    }



    const [selectImage, setSelectImage] = useState(false)

    const uploadImage = () => {
        console.log("Upload Images button clicked!")
        setSelectImage(true)
    }

    const [isScanned, setIsScanned] = useState(false)

    const scanImage = () => {
        setIsScanned(true)
        setSelectImage(false)
    }
    


    // const addItem = () => {
    //     console.log("Add Item button clicked!")
    // }

    const sc_item = [
        {name: "Egg", quantity_weight: 9},
        {name: "Egg", quantity_weight: 9},
        {name: "Egg", quantity_weight: 9},
        {name: "Egg", quantity_weight: 9},
        {name: "Egg", quantity_weight: 9},
    ]




    const generateRecipes = () => {
        console.log("Generate Recipes button clicked!")
        navigation.navigate('Generated')
    }



    useEffect (() =>{
        console.log("Select Food Pref: ", foodPref)
        console.log("Select Image to scan: ", selectImage)
        console.log("Scan Image: ", isScanned)
        console.log(items)
        console.log(product)
        console.log("===============================================================")
    })

    

    return (

    // Screen
    <View className=" flex flex-col min-sw-screen min-h-screen justify-start items-center bg-[#ffffff]">


        {/* StatusBar */}
        <StatusBar backgroundColor="#000000" barStyle="light-content" />


        {/* NavBar */}
        <NavBar />



        <View className=" w-[90%] h-[73%] flex flex-col items-center border-[1px] border-[#b2adad] p-6 rounded-md">


            {/* Inside the green box */}
            {/* {isScanned ? 
                <ScrollView className=" w-full h-[63%] flex flex-col border-[1px] border-[#1EDF38] rounded-md p-7 overflow-hidden">

                    <View className=" w-full items-end mb-5 "> 
                        <Image source={require("../images/eggs.png")} />
                    </View>

                    <View className=" w-full h-[40px] pl-4 bg-[#1EDF38] rounded-md justify-center mb-3">
                        <Text className=" text-[#ffffff] text-[20px] font-bold">Items</Text>
                    </View>

                    {sc_item.map((sc_item, index) => (
                        <View className=" w-full h-[40px] flex flex-row">
                            <View className=" w-[70%] h-full pl-4">
                                <Text className=" text-[17px] ">{sc_item.name}</Text>
                            </View>
                            <View className=" w-[30%] h-full pl-4">
                                <Text className=" text-[17px]">{sc_item.quantity_weight}</Text> 
                            </View>                       
                        </View>
                    ))}

                    <Text className=" w-full text-center text-[#969696] text-[14px] mt-2 mb-14">If I did not mention other items, please kindly input those items that I did not recognize below.</Text>

                </ScrollView>

            :               
            <View className=" w-full h-[63%] flex flex-col justify-center items-center border-[1px] border-[#1EDF38] rounded-md">

                <Image source={require('../images/logo2.png')}/>

                <Text className=" text-[#AFAFAF] text-[20px] w-[80%] text-center leading-8 mt-4">Hey there! I'm ITSY, your culinary spider-body! Share your items, I'll weave menus so snappy!</Text>
            
            </View>    
            } */}
            <View className = "relative w-full h-[63%] overflow-hidden border-[1px] border-[#1EDF38]">
            <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={scrollToBottom}
                    className=" flex-col rounded-md pb-[100px] p-7 "
                >
                    {messages.length !== 0 ? (
                    messages.map((e, id) =>
                        e.from === 'user' ? (
                        <View
                            className = " w-[100%] min-h[15px] bg-[#ffffff] flex flex-row justify-end pt-[3px] pb-[20px]"
                            key={id}
                        >
                            <View
                                className = " px-[5px] py-[2px] bg-[#1EDF38] rounded-lg "
                            >
                            {/* {e.image ? (
                                <>
                                <Text style={{ paddingTop: 1, paddingBottom: 4, color: 'white' }}>{e.message}</Text>
                                <Image
                                    style={{ width: '100%', height: 56, aspectRatio: 1, borderRadius: 10 }}
                                    source={{ uri: e.image }}
                                />
                                </>
                            ) : (
                                ''
                            )} */}

                            {e.product 
                                ? 
                                <View className = " w-full pb-2 px-2">
                                <View className="  bg-[#1EDF38] h-[40px] rounded-md justify-center">
                                    <Text className=" text-[#ffffff] text-[20px] font-bold text-center">My Items</Text>
                                </View>
                                {product.map((item, index) => (
                                    <View className=" w-full rounded-md flex items-center flex-row bg-[#ffffff] mt-2 px-2" key={index}>
                                        
                                        <TouchableOpacity
                                            onPress={() => handleDeleteItem(index)}>
                                            <Image 
                                                source={require('./../images/delete.png')}
                                                style={{ width: 30, height: 45 }}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>

                                        <Text className=" text-[17px] text-[#808080] font-bold m-2">{item}</Text> 

                                    </View>
                                ))}
                                </View>                             
                                : ''
                            }                        

                            </View>
                        </View>
                        ) : (
                        <View
                            key={id}
                            className = " w-full min-h-[150px] border-b-[#1EDF38] border-b-[1px] bg-[#ffffff] flex flex-row items-center justify-start"
                        >
                            <View
                            className = " px-2 max-w-60 py-3 pr-8 ml-3 rounded-10 border-[1px] border-[#000000] shadow-md flex flex-row items-center justify-between "
                            >
                            <Image source={{ uri: logo }} style={{ width: 45, height: 45 }} />
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>ITSY</Text>
                                {e.message ? <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{e.message}</Text> : ''}
                            </View>
                            </View>

                            {e.image ? <Image style={{ width: 56, height: 52 }} source={{ uri: e.image }} /> : ''}
                        </View>
                        
                        )   
                    )
                    ) : (
                    <View
                        className = " flex flex-col items-center justify-center py-[20px]"
                    >
                        <Image 
                            source={require('./../images/logo2.png')} 
                            style={{ width: 60, height: 70 }} 
                            resizeMode='contain'
                        />

                        <Text 
                            className = " text-[18px] text-[#808080] text-center font-semibol leading-8 ">
                            Hey dear, I'm ITSY your culinary spider buddy! Share your items, and I'll weave dishes so snappy!
                        </Text>
                    </View>
                    )}
                    <View className= " h-[50px] "></View>
                </ScrollView>
                </View>


            {/* Select preference and Upload Image buttons */}
            <View className=" w-[100%] h-[75px] flex flex-row justify-between items-center">

                <TouchableOpacity 
                    className=" w-[150px] h-[30px] flex flex-row justify-center items-center bg-[#b7c2b917] border-[1px] border-[#b6b0bd] rounded-sm"
                    onPress={selectPreferences}
                >
                    {/* <AddIcon /> di mugana */}
                    <Text className=" text-[15px] text-[#464449] ">PREFERENCES</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    className=" w-[100px] h-[40px] flex flex-row justify-center items-center bg-[#1EDF38] rounded-lg "
                    onPress={uploadImage}
                >
                    {/* <FileUploadOutlinedIcon /> di mugana */}
                    <Text className=" text-[#ffffff] text-[20px] ">Scan</Text>
                </TouchableOpacity>

            </View>




            {/* Input name, quantity or weight */}
            <View className= " w-full flex flex-row justify-between">

                <InputFields 
                    label="Name"
                    placeholder="e.g egg, chicken"
                    onChangeText = {handleNameChange}
                    value = {items.name}
                />

                <InputFields 
                    label="Quantity/Weight(kg)"
                    placeholder="e.g 2, 5, 4kg"
                    onChangeText = {handleQkChange}
                    value = {items.qk}
                />

            </View>




            {/* Add item button */}
            <View className=" w-full mt-4">
                <Buttons 
                    onPress = {addItems}
                    label = "Add Item"
                    addStyle = " w-[130px] h-[40px] bg-[#1EDF38] "
                />
            </View>
        </View>




        {/* Generate Recipes Button */}
        <Buttons 
            onPress={generateRecipes}
            label="Generate Recipes"
            addStyle= " w-[90%] h-[50px] mt-5 bg-[#1EDF38] "
        />








        {/* ===================================================================================================================== */}





        {/* Selecting food preferences */}
        <View className={ foodPref ? " w-screen h-screen absolute justify-center items-center bg-[#00000099]" : "hidden"}>


            <View className=" w-[80%] min-h-[50%] rounded-md p-5 bg-[#ffffff] shadow-xl ">


                <Text className=" text-[25px] text-center text-[#1EDF38] mb-1">Dish Preferences</Text>


                    <CheckBox label="Vegetarian" />
                    <CheckBox label="Vegan" />
                    <CheckBox label="Omnivorous" />
                    <CheckBox label="Gluten-free" />
                    <CheckBox label="Dairy-free" />
                    <CheckBox label="Nut-free" />
                    <CheckBox label="Low-carb" />
                    <CheckBox label="Low-fat" />
                    <CheckBox label="Organic" />



                <View className="w-full h-[60px] flex flex-row justify-between items-center mt-5 ">
                    <Buttons 
                        onPress={()=>{setFoodPref(false)}}
                        label="Cancel"
                        addStyle= " w-[130] h-[40px] bg-[#b13030] "
                    />
                    <Buttons 
                        onPress={()=>{navigation.navigate('Generated')}}
                        label="Generate"
                        addStyle= " w-[130] h-[40px] bg-[#1EDF38] "
                    />
                </View>   
            </View>
        </View>




        {/* Uploading Images */}
        <View className={ selectImage ? " w-screen h-screen absolute justify-center items-center bg-[#00000099]" : "hidden"}>


            <View className=" w-[75%] min-h-[20%] flex flex-col items-center bg-[#ffffff] rounded-md ">


                <View className=" w-full h-[50px] justify-center bg-[#1EDF38] rounded-t-md mb-8">
                    <Text className=" text-center text-[25px] text-[#ffffff] font-semibold">Select Image</Text>
                </View>


                <Image source={require('../images/eggs.png')}/>


                <Text className=" text-center text-[20px] w-[80%] text-[#464449] my-5 ">Are you sure you want to select this image?</Text>


                <View className=" w-full h-[60px] flex flex-row rounded-b-md border-t-[1px] border-t-[#464449]">

                    <TouchableOpacity 
                        className=" w-[50%] justify-center items-center border-r-[1px] border-r-[#464449]"
                        onPress={()=>{setSelectImage(false)}}
                    >
                        <Text className=" text-[18px] font-semibold text-[#464449]">NO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className=" w-[50%] justify-center items-center "
                        onPress={scanImage}
                    >
                        <Text className=" text-[18px] font-semibold text-[#464449]">YES</Text>
                    </TouchableOpacity>

                </View>
 
            </View>

        </View>





    </View>
  )
}
