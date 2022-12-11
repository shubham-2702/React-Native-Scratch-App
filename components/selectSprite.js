import React from "react";
import {View, Image, TouchableOpacity, Text} from 'react-native'
import EventEmitter from "react-native-eventemitter";

const {SPRITE_IMAGE} = require("./global");

export default function SpriteSelect({navigation}) {

    const spriteSelected = (sprite) => {
        //SPRITE_IMAGE = sprite
        EventEmitter.emit("Sprite Updated")
        navigation.navigate("Code", {
            paramKey: sprite,
          });
        //navigation.pop()
    }

        return(
            <View style={{flex: 1}}>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={{marginTop: 150}} onPress={()=>{spriteSelected("cat")}}>
                        <Image source={require('../assets/ScratchCat.png')} style={{height: 100, width: 100, resizeMode: "contain"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 150}} onPress={()=>{spriteSelected("ball")}}>
                        <Image source={require('../assets/Ball.png')} style={{height: 100, width: 100, resizeMode: "contain"}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
