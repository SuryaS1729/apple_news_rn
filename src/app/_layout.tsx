import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {  Slot, Stack, useRouter } from "expo-router";
import { View } from "react-native";
import {PaperProvider} from 'react-native-paper'


export default function RootLayout() {
  return (
    <PaperProvider>
  <Stack>
    <Stack.Screen name= "(tabs)" options={{headerShown:false}} />
    <Stack.Screen 
    name= "newsArticle/[id]" 
    options={{
      headerTitle:"",
      
    headerRight: () => (
      <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name="share-outline"
          size={20}
          color="black"
          style={{ backgroundColor: '#EEEEEE', borderRadius: 15, padding: 5 }}
        />
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color="black"
          style={{ backgroundColor: '#EEEEEE', borderRadius: 15, padding: 2 }}
        />
      </View>
    )
      
      
      
      }} />
  </Stack>
  </PaperProvider>
)
}