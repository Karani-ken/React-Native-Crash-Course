import {View} from 'react-native'
import Test from './Components/Test'
import Box from './Components/Box'
export default function App(){
  return(
    <View style={{flex:1,padding:60}}>
        <Test />

        <Box />
    </View>
  )
}