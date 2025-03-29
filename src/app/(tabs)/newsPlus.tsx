import { View, Text, FlatList, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Menu } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import featuredMagazines from '@assets/data/featuredMagazines.json'
import MagazineListItem from '@/components/ListItems/MagazineListItem'
import newestMagazines from '@assets/data/newestMagazines.json'
import popularMagazines from '@assets/data/popularMagazines.json' 
import { Magazine } from '@/types/types'
import { AntDesign, Entypo } from '@expo/vector-icons'


const FILTERS = {
  FEATURED : 'Featured',
  NEWEST : 'Newest',
  POPULAR : 'Popular'
}


type FilterKey = keyof typeof FILTERS;


const newPlus = () => {
  const [magazinesData, setMagazinesData]= useState<Magazine[]>([])
  const [selectedOption, setSelectedOption]= useState<string>(FILTERS.NEWEST)
  const [isMenuVisible, setIsMenuVisible]= useState<boolean>(false)


  useEffect(() => {
    switch (selectedOption) {
      case FILTERS.FEATURED:
        return setMagazinesData(featuredMagazines);
      case FILTERS.NEWEST:
        return setMagazinesData(newestMagazines);
      case FILTERS.POPULAR:
        return setMagazinesData(popularMagazines);
      default:
        return setMagazinesData([]);
    }
  }, [selectedOption])


  const handleSelectOption = (option:string)=>{
      setSelectedOption(option);
      setIsMenuVisible(false)
  }







  return (
    <SafeAreaView style={{marginHorizontal:10}}>
      <FlatList
      data={magazinesData}
      renderItem = {({item})=><MagazineListItem magazine={item}/>}
      numColumns={2}
      ListHeaderComponent={
        <View style={{ paddingBottom: 10 }}>
          <View style={{ marginBottom: 40 }}>
            {/* APPLE LOGO HEADER */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="apple1" size={24} color="black" />
              <Text style={{ fontSize: 27, fontWeight: '800' }}>News+</Text>
            </View>
            <Text style={{ fontSize: 27, fontWeight: '800', color: 'grey' }}>Discover</Text>
          </View>
      
          {/* Menu Wrapper */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19, marginRight: 5 }}>Showing:</Text>
            <Menu 
            
            visible={isMenuVisible}
            onDismiss={()=>setIsMenuVisible(false)}
            anchorPosition='bottom'
            contentStyle={{ backgroundColor: 'white' }}
            anchor={
              <Pressable
                onPress={() => setIsMenuVisible(true)}
                style={{ flexDirection: 'row', alignItems: 'center',backgroundColor: 'white', padding: 9, borderRadius: 10 }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 19, color: '#FC3C44' }}>{selectedOption}</Text>
                <Entypo name="chevron-down" size={26} color="#FC3C44" />
              </Pressable>
            }
            
            >
              {(Object.keys(FILTERS) as FilterKey[]).map((key)=>(
                <Menu.Item 
                titleStyle={{fontWeight:'bold',fontSize:19, color:'#FC3C44', }} 
                key={key} 
                onPress={()=>handleSelectOption(FILTERS[key])} 
                title={FILTERS[key]}/>
              
              ))}
            </Menu>
          </View>
        </View>
      }
      />
      <Button title={selectedOption} onPress={()=>{

      }}></Button>
    </SafeAreaView>
  )
}

export default newPlus