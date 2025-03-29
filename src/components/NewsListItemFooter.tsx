import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { formatDistanceToNow } from 'date-fns'
import { Author } from '@/types/types'


type NewsListItemFooterProps = {
  publishedDate: string,
  author: Author
}

const NewsListItemFooter = ({publishedDate, author}:NewsListItemFooterProps) => {
  return (
    <View style={{flexDirection: 'row',gap:5,alignItems:'center'}}>
               <Text>{formatDistanceToNow(publishedDate, {addSuffix:true})}</Text>
               <Text>&#x2022;</Text>
               <Text>{author.name}</Text>
               <MaterialCommunityIcons name="dots-horizontal" size={22} color="grey" style={{marginLeft:'auto'}} />
             </View>
  )
}

export default NewsListItemFooter