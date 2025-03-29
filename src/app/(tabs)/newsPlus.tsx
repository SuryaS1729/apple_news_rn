import { View, Text, FlatList } from 'react-native'
import React from 'react'
import featuredMagazines from '@assets/data/featuredMagazines.json'
import MagazineListItem from '@/components/ListItems/MagazineListItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const newPlus = () => {
  return (
    <SafeAreaView>
      <FlatList
      data={featuredMagazines}
      renderItem = {()=><MagazineListItem/>}
      />
    </SafeAreaView>
  )
}

export default newPlus