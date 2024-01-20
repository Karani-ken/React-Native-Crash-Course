import { View, Text, StyleSheet } from 'react-native'

export default function Box() {
    return (
        <View style={styles.container}>
            <View style={[styles.box,styles.lightbluebg]}>
                <Text>This is a light blue box</Text>
            </View>
            <View style={[styles.box,styles.lightgreenbg]}>
                <Text>This is a light green box</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        margin:10,
        borderRadius:30
    },
    box:{
        height:200,
        width: 200,
        padding:20,
        margin:10,
        borderRadius:30

    },
    lightbluebg:{
        backgroundColor:'lightblue'
    },
    lightgreenbg:{
        backgroundColor:'lightgreen'
    }
})