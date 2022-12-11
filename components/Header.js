import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default function Header(){
  return (
    <View style={styles.view}>
        <Image style={styles.logo} source={require('../assets/Scratch_logo_PNG2.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  view : {
    backgroundColor: 'skyblue',
    //padding:-5,
    height: 60
  },
  text:{
    margin: 10,
    marginLeft: 20
  },
  logo:{
    //padding: 20,
    margin: 10,
    width: 135,
    height: 40
  }
})