import React from 'react';
import {Text,View,StyleSheet, TextInput,SafeAreaView,FlatList} from 'react-native';

const Data=[
    {title:'Sprite'},
    {title:'X'},
    {title:'Y'}
];
const Item = ({title,value})=>(
    <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <TextInput value={value} style={styles.input}></TextInput>
    </View>
);
export default function Specification(x,y){
    //console.log(x.value);
  return (
    <View style={styles.row}>
    <Item title="Sprite " style={styles.item}/>
    <Item title="X " value={x} style={styles.item}/>
    <Item title="Y " value={y} style={styles.item}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  view : {
    backgroundColor: 'white',
    padding:-5
  },
  text:{
    margin: 10,
    marginLeft: 20
  },
  item:{
    flexDirection: 'row'
  },
  input:{
    borderRadius: 5,
    borderWidth: 2,
    width: 40,
    borderColor: 'grey',
    height:25
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    //width: wp('50%'),
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
})