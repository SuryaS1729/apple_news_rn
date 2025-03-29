
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { News } from '@/types/types'
import NewsListItemFooter from '../NewsListItemFooter'
import { Link } from 'expo-router'


type TrendingListItemProps = {
    newsArticle: News
    index:number
}




const TrendingListItem = ({newsArticle, index}:TrendingListItemProps) => {
  return (

       <Link href={`/newsArticle/${newsArticle.id}`} asChild> 
    <Pressable style={{flexDirection:'row',marginTop:8, marginBottom:20, gap:15}}>
        <View style={styles.bubbleCont}>
            <Text style={styles.bubbleTitleText}>{index+1}</Text>   
        </View>
        <View style={styles.trendingNewsCard}>
            <View style={{gap:5}}>
                <Image source={require('@assets/black-logo.png')} style={{width: 50, height: 20}} resizeMode='contain'/>
                <Text style={{fontSize:17,fontWeight:'bold'}}>{newsArticle.title}</Text>
            </View>
            <NewsListItemFooter publishedDate={newsArticle.created_at} author={newsArticle.author}/>
        </View>
    </Pressable>

    </Link>
  )
}

export default TrendingListItem

const styles = StyleSheet.create({
    bubbleCont:{
        backgroundColor:"#FA8128",
        width:35,
        height:35, 
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
            
},
bubbleTitleText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
},
trendingNewsCard:{
    gap:25, 
    flex:1, 
    borderBottomWidth:0.5, 
    borderBottomColor:'lightgrey',
    paddingBottom:10
}})