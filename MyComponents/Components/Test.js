import {View, Text, Button,StyleSheet} from 'react-native'

export default function Test(){
    return(
        <View style={myStyles.container}>
            <Text style={myStyles.text}>This a separate component</Text>
            <Button title='Press me'/>
        </View>
    )
}

const myStyles = StyleSheet.create({
    container:{backgroundColor:'midnightblue',padding: 30,borderRadius: 10},
    text:{color:'white',fontWeight:'bold', margin: 10}     
})