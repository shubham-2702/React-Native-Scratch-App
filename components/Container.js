import { setStatusBarStyle } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text,TextInput,Image } from "react-native";
import Specification from "./SpecificationView";
import Draggable from "react-native-draggable";
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    height: '60%',
    justifyContent: "center",
    backgroundColor: 'white',
    marginTop: 20,
    //marginBottom: 20
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default function Container(){
    const [x,setX]=useState(0);
const [y,setY]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Draggable 
            imageSource={require('../assets/ScratchCat.png')} 
            renderSize={80} 
            x={200}
            y={300}
            //onDragRelease={this._changeFace}
            onDragRelease={(e) => {
                setX(parseInt(e.nativeEvent.pageX));
                console.log(x);
                //console.log(parseInt(e.nativeEvent.pageX));
                setY(parseInt(e.nativeEvent.pageY));
                console.log("pageX, pageY = " + e.nativeEvent.pageX + ", " + e.nativeEvent.pageY);
  console.log("locX, locY = " + e.nativeEvent.locationX + ", " + e.nativeEvent.locationY)}}
            onLongPress={()=>console.log('long press')}
            onShortPressRelease={()=>console.log('press drag')}
            onPressIn={()=>console.log('in press')}
            onPressOut={()=>console.log('out press')}
        />  

    </View>
  );
  
}

