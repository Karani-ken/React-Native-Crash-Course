import { View, Text, Image, ImageBackground, ScrollView,Button } from "react-native";
const Logoimg = require("./assets/adaptive-icon.png")
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <ImageBackground source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        style={{ flex: 1, padding: 60, width: 400, height: 800 }}>
        <ScrollView>
          <Text><Text style={{ color: 'white' }}>Hello</Text> World!</Text>
          <Image source={Logoimg} style={{ width: 200, height: 200, }} />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis malesuada tortor felis. Praesent congue risus augue,
            pellentesque finibus nulla interdum eget. Nam lorem urna,
            commodo vitae massa a, interdum tristique enim. Integer
            sed rhoncus libero. Vivamus iaculis bibendum libero id ornare.
            Suspendisse potenti. Vivamus tempus accumsan ligula, non rutrum
            quam hendrerit at. Duis est neque, bibendum a tortor ac, condimentum
            imperdiet velit.
            Donec sodales dui ac lectus gravida vestibulum. Etiam quis lacus ut
            nisi dictum viverra.

            Nam tincidunt, enim consectetur ullamcorper mattis, sem diam ultricies lacus, quis
            scelerisque libero arcu in nisl. Maecenas blandit, libero ac imperdiet egestas,
            mauris lectus consectetur sem, a fringilla tellus purus sit amet ex. Maecenas a
            neque sapien. Maecenas vulputate leo et ex elementum hendrerit. Nullam sed lectus
            convallis, maximus massa et, vulputate elit. Duis tortor sem, rutrum vel
            aliquet a, facilisis id quam. Sed non ante malesuada quam auctor placerat.
            Suspendisse at justo ut dui accumsan vehicula rhoncus a sem. Sed sodales bibendum augue, ac pellentesque
            ligula volutpat ut. Nunc venenatis urna varius imperdiet molestie. Cras congue interdum quam eget lobortis.
          </Text>
          <Image source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 200, height: 200, }} />

            <Button title="Press"
            color="midnightblue"
            onPress={()=>console.log("button Pressed")}/>
        </ScrollView>
      </ImageBackground>

    </View>
  )
}