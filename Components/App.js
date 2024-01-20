import { View,Modal,Button,Text,StatusBar,ActivityIndicator,Alert} from "react-native";
import { useState } from "react";
export default function App(){
  const [modalVisibility, useModalVisibility] = useState(false)
 
  return(
    <View style={{flex:1, padding: 60, backgroundColor:"skyblue"}}>
      <StatusBar  backgroundColor="midnightblue" barStyle='light-content'/>    
      <Button title="Open Modal"
      onPress={()=> useModalVisibility(true)}/>
        <ActivityIndicator size='large' color="midnightblue" animating={false}/>
        <ActivityIndicator size='large' color="midnightblue" animating={true}/>
        <Button title="Alert" onPress={()=> Alert.alert("Invalid Data!","DOB is Incorrect")}/>

        <Button title="Alert 2" onPress={()=> Alert.alert("Invalid Data!","DOB is Incorrect",[
          {
            text:'cancle',
            onPress: () => console.log("cancle was clicked")
          },
          {
            text:'Ok',
            onPress: () => console.log("Ok was clicked")
          }
        ])}/>
        <Modal 
        visible={modalVisibility}
        animationType="slide"
        onRequestClose={()=> useModalVisibility(false)}>
          
            <View style={{ flex:1, padding: 60,backgroundColor:'white'}} >
              <Text>This is a Modal </Text>
              <Button title="close Modal"
              onPress={()=> useModalVisibility(false)}/>
            </View>
        </Modal>
    </View>
  )
}