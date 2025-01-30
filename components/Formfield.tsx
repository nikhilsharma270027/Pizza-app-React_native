import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// @ts-ignore
// import { icons } from "../constants"

const Formfield = ({title, value, placeholder, handleChangeText, otherStyles, keyboardType,...props}:{
    title: string;
    value: string;
    placeholder?: string;
    handleChangeText: any;
    otherStyles: string;
    keyboardType?: string
}) => {

    const [showPassword, setShowPassword] = useState(false);
  return (
    //space-y-2 will create space btw elements
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-200 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
            />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image 
                    // source={!showPassword ? icons.eye : icons.eyeHide} 
                    className="w-6 h-6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Formfield