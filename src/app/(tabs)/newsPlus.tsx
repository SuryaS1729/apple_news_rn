import { View, Text, FlatList } from 'react-native'
import React from 'react'
import featuredMagazines from '@assets/data/featuredMagazines.json'
import MagazineListItem from '@/components/ListItems/MagazineListItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const newPlus = () => {
  return (
    <SafeAreaView style={{marginHorizontal:10}}>
      <FlatList
      data={featuredMagazines}
      renderItem = {({item})=><MagazineListItem magazine={item}/>}
      numColumns={2}
      />
    </SafeAreaView>
  )
}

export default newPlus