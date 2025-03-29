import { Stack, useLocalSearchParams } from "expo-router";
import { View,Text, StyleSheet, ScrollView, Image } from "react-native";
import allNews from '@assets/data/allNews.json';
import Markdown from 'react-native-markdown-display';
import { format } from 'date-fns';


export default function DetailedArticle (){
    const {id} = useLocalSearchParams()

    const   newsArticle = allNews.find((article)=>article.id === id)

    if(!newsArticle) return (
        <View>
            <Text>Article not found</Text>
        </View>
    )
    const { publisher, image, author, created_at, body } = newsArticle;

    return (
        <ScrollView>
      {/* HEADER TITLE */}
      <Stack.Screen name="newsArticle/[id]" options={{ headerTitle: publisher.name }} />
      <Image source={{ uri: image }} style={{ width: '100%', aspectRatio: 3 / 2 }} />

      <View style={{ padding: 25 }}>
        <View style={{ gap: 10, paddingBottom: 25 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{newsArticle.title}</Text>
          <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>{`by ${author.name} ${format(created_at, 'MMM dd, yyyy hh:mm a')}`}</Text>
        </View>
        <Markdown>
          {body}
        </Markdown>
      </View>
    </ScrollView>
    )
}


const markdownStyles = StyleSheet.create({
   
    heading2: {
      fontSize: 24,
    }
  });