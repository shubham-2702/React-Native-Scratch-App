import React ,{useState,useEffect}from "react";
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image, ImageBackground,  } from 'react-native';
import Draggable from 'react-native-draggable';
import EventEmitter from "react-native-eventemitter";
import Header from "./Header";


const SPRITE_IMAGE = require("./global");

export default function Code({navigation}) {
  //console.log(route);
  console.log(navigation.getParam("paramKey"));
    const [commands,setCommands]=useState([{id: 1, firstCommand: "move", secondCommand: "steps", input: "10"},
    {id: 10, firstCommand: "set y", secondCommand: "to", input: "10"},
    {id: 7, firstCommand: "change x", secondCommand: "by", input: "10"},
    {id: 8, firstCommand: "change y", secondCommand: "by", input: "10"},
    {id: 11, firstCommand: "say", secondCommand: "for 3 seconds", input: "Hello"},
    {id: 2, firstCommand: "turn", secondCommand: "degrees", input: "-45"},
    {id: 4, firstCommand: "go to", secondCommand: "x", input: "10"},
    {id: 5, firstCommand: "go to", secondCommand: "y", input: "10"},
    {id: 9, firstCommand: "set x", secondCommand: "to", input: "10"},]);
    const [selectedCommands,setSelectedCommands]=useState([]);
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [transformDegree,setTransformDegree]=useState(0);
    const [text,setText]=useState("");
    const [sprite,setSprite]=useState("cat");
    const [backgroundImage,setBackgroundImage]=useState("background1");
    const [selectedSprites,setSelectedSprites]=useState(["cat",null]);
    const [catX,setCatX]=useState(0);
    const [catY,setCatY]=useState(0);
    const [ballX,setballX]=useState(0);
    const [ballY,setballY]=useState(0);
    const [transformCat,setTransformCat]=useState(0);
    const [transformball,setTransformball]=useState(0);
      
  useEffect(()=>{
    // EventEmitter.on("Sprite Updated", ()=>{
    //   var selectedSprite = selectedSprites;
    //   selectedSprite.push(navigation.getParam("paramKey"))
    //   setSelectedSprites(selectedSprites)
    // })
    EventEmitter.on("Sprite Updated", () => {
      var selectedSprite = selectedSprites;
      console.log("📌 👉 👨‍💻 EventEmitter.on 👨‍💻 selectedSprites", selectedSprites);
      console.log("📌 👉 👨‍💻 EventEmitter.on 👨‍💻 selectedSprite", selectedSprite);
      selectedSprite.push(navigation.getParam("paramKey"));
      setSelectedSprites(selectedSprite);
    });
    
  },[]);

  const commandListInputChange = (text, index) => {
    var commandList = commands
    commandList[index].input = text
    setCommands(commandList)
  }

  const selectedCommandListInputChange = (text, index) => {
    var selectedCommandList = selectedCommands
    selectedCommandList[index].input = text
    setSelectedCommand(selectedCommandList)
  }

  const onCommandSelect = (index) => {
    var commandList = commands
    var selectedCommand = JSON.parse(JSON.stringify(commandList[index]))
    var selectedCommandList = selectedCommands
    selectedCommandList.push(selectedCommand)
    setSelectedCommands(selectedCommandList)
  }

  const executeCommand = () => {
    console.log(sprite)
    selectedCommands.forEach((item) => {
      if(item.firstCommand == "move") {
        if(sprite == "cat") {
          setCatX(catX + parseInt(item.input))
        } else if(sprite == "ball") {
            setballX(ballX + parseInt(item.input))
          } 
      } else if(item.firstCommand == "turn") {
        if(sprite == "cat") {
            setTransformCat(transformCat + parseInt(item.input))
          }  else if(sprite == "ball") {
            setTransformball(transformball + parseInt(item.input))
          }  
      } else if(item.secondCommand == "x") {
        if(sprite == "cat") {
            setCatX(catX + parseInt(item.input))
          } else if(sprite == "ball") {
              setballX(ballX + parseInt(item.input))
            } 
      } else if(item.secondCommand == "y") {
        if(sprite == "cat") {
            setCatY(catY + parseInt(item.input))
          } else if(sprite == "ball") {
              setballY(ballY + parseInt(item.input))
            } 
      } else if(item.firstCommand == "change x" || item.firstCommand == "set x") {
        if(sprite == "cat") {
            setCatX(catX + parseInt(item.input))
          } else if(sprite == "ball") {
              setballX(ballX + parseInt(item.input))
            } 
      } else if(item.firstCommand == "change y" || item.firstCommand == "set y") {
        if(sprite == "cat") {
            setCatY(catY + parseInt(item.input))
          } else if(sprite == "ball") {
              setballY(ballY+ parseInt(item.input))
            } 
      } else if(item.firstCommand == "say") {
        setText(item.input+" "+sprite)
        setTimeout(() => {
          setText("")
        }, 3000);
      }
    })
  }

  const deleteSprite = (spriteName) => {
    var selectedSprite = selectedSprites
    selectedSprite.map((item, index)=>{
      if(item == spriteName) {
        selectedSprite.splice(index, 1)
      }
    })
    if (spriteName == "cat") {
        setCatX(0)
        setCatY(50)
        setTransformCat(0)
    } else if(spriteName == "ball") {
        setballX(0)
        setballY(50)
        setTransformball(0)
    } 
    setSelectedSprites(selectedSprite)
    setSprite(selectedSprites[0])
  }

  const deleteCommand = (index) => {
    console.log("Delete Command Called "+index);
    var selectedCommand = selectedCommands
    selectedCommand.splice(index, 1)
    setSelectedCommands(selectedCommand)
    console.log(selectedCommands)
  }

  const spriteSelected = (sprite) => {
    setSprite(sprite)
  }


    return (
      <View style={{flex: 1,marginTop: 50}}>
        <View>
          <Header />
        </View>
        <View>
        <FlatList
        data={commands}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>{return(
          <TouchableOpacity onPress={()=>{onCommandSelect(index)}}>
            <View style={styles.container}>
              <Text style={styles.commandText}>{item.firstCommand}</Text>
              <TextInput style={styles.commandInput} value={item.input} onChangeText={(text)=>{commandListInputChange(text, index)}}/>
              <Text style={styles.commandText}>{item.secondCommand}</Text>
            </View>
          </TouchableOpacity>
        )}}
        >
        </FlatList>
        </View>
        {backgroundImage == "background1" ? 
           <ImageBackground source={require('../assets/background1.jpg')} style={{resizeMode: "cover", height: "100%"}}>
          <View style={{flexDirection: "row"}}>
              {selectedSprites.map((item)=>{
                console.log(item)
                return(
                item == "cat" ? 
                <View style={{flexDirection: "row"}}>
                  <Draggable>
                    <TouchableOpacity onPress={()=>{spriteSelected("cat")}}>
                  <Image source={require("../assets/ScratchCat.png")} style={{height: 100, width: 100, resizeMode: "contain", marginLeft: catX, marginTop: catY, borderColor: "red", borderWidth: sprite == "cat" ? 1 : 0, transform: [{rotate: `${transformCat}deg`}]}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: "red", width: 20, height: 20, borderRadius: 10, alignSelf: "center", right: 0, position: "absolute", top: 50}} onPress={()=>{deleteSprite("cat")}}>
                    <Text style={{color: "white", fontWeight: "bold", textAlign: "center", marginTop: 2}}>X</Text>
                  </TouchableOpacity>
                  </Draggable>
                  </View>
                  : item == "ball" ? 
                  <View style={{flexDirection: "row"}}>
                    <Draggable>
                    <TouchableOpacity onPress={()=>{spriteSelected("ball")}}>
                  <Image source={require("../assets/Ball.png")} style={{height: 100, width: 100, resizeMode: "contain", marginLeft: ballX, marginTop: ballY, borderColor: "red", borderWidth: sprite == "ball" ? 1 : 0, transform: [{rotate: `${transformball}deg`}]}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: "red", width: 20, height: 20, borderRadius: 10, alignSelf: "center", right: 0, position: "absolute", top: 50}} onPress={()=>{deleteSprite("ball")}}>
                    <Text style={{color: "white", fontWeight: "bold", textAlign: "center", marginTop: 2}}>X</Text>
                  </TouchableOpacity>
                  </Draggable>
                  </View>
                  :<View style={{flexDirection: "row"}}>
                  </View>
              )})}
            <View style={{marginTop: 30}}>
              <Text style={{fontWeight: "bold", fontSize: 20, color: "red"}}>{text}</Text>
            </View>
          </View>
        </ImageBackground> : 
        ""
              }
        {selectedCommands.length > 0 && selectedCommands.map((item, index)=> {
          return (
            <Draggable x={50} y={200}>
              <View style={{flexDirection: 'row'}}>
              <View style={styles.container}>
                <Text style={styles.commandText}>{item.firstCommand}</Text>
                <TextInput style={styles.commandInput} value={item.input} onChangeText={(text)=>{selectedCommandListInputChange(text, index)}}/>
                <Text style={styles.commandText}>{item.secondCommand}</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: "red", height: 20, width: 20, borderRadius: 10, marginTop: -8, marginLeft: -10}} onPress={()=>{deleteCommand(index)}}> 
                <Text style={{color: "white", fontWeight: "bold", textAlign: "center", marginTop: 2}}>X</Text>
              </TouchableOpacity>
              </View>
            </Draggable>
          )
        })}
        <TouchableOpacity style={{height: 100, width: 100, borderRadius: 50, borderColor: "black", borderWidth: 1, backgroundColor: "red", bottom: 16, position: "absolute", right: 16, justifyContent: "center", alignItems: "center"}} onPress={executeCommand}>
          <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Start</Text>
        </TouchableOpacity>
        <View style={{flexDirection: "row", bottom: 32, left: 32, position: "absolute"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("SpriteSelect")}}>
              <Text style={{ fontWeight: "bold", backgroundColor: "#c3c3c3", padding: "4px", borderRadius: "10px" }}>Sprite Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    backgroundColor: "blue", 
    width: 150, 
    height: 30, 
    marginLeft: 8, 
    borderWidth: 1, 
    borderColor: "black", 
    borderRadius: 60, 
    justifyContent: "center"
  },
  commandText: {
    color: "white", 
    alignSelf: "center"
  },
  commandInput: {
    backgroundColor: "white", 
    width: 50, 
    height: 30,
    alignSelf: "center", 
    textAlign: "center", 
    borderColor: "black", 
    borderWidth: 1, 
    borderRadius: 15
  },
})