import React, { useEffect } from "react";
import {
    Text,
    View,
} from 'react-native'
import MyButton from "./MyButton";

import Style from "./Style";

const HomeScreen = ({navigation, route}) => {


    useEffect(
        () => {
            console.log(route)
        }
    )
 
    const screen = route.params ? route.params.screen : ""

    const changeScreen1 = () => {
        navigation.navigate("MainScreen", { screen: route.name })
    }
    const changeScreen2 = () => {
        navigation.navigate("ThirdScreen", { screen: route.name })
    }

    return (
        <View style={Style.view}>
            <Text style={Style.text}>Pierwsza Strona</Text>
            <Text style={Style.textSmall}>
            {screen ? <Text>Przyszed ze strony  {screen}</Text>  : ''}
            </Text>
            <View style={{flexDirection: "row"}}>
                <MyButton
                style={{flex: 1}}
                onPressFunction={changeScreen1}
                buttonText={"Druga strona"}
                color={"#ccc"}
            />
            <MyButton
                style={{flex: 1}}
                onPressFunction={changeScreen2}
                buttonText={"Trecia strona"}
                color={"#ccc"}
            />
            </View>
            
        </View>
        
    )
}

export default HomeScreen