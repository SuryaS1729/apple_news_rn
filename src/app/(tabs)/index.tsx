import NewsListItem from "@/components/NewsListItem";
import { StatusBar, Text, View } from "react-native";
import allNews from '@assets/data/allNews.json';

export default function HomeScreen() {
  

  return (
    <View style={{marginTop:60}}>
      <StatusBar translucent hidden/>
      <NewsListItem newsArticle={allNews[0]}/>
      {/* <NewsListItem newsArticle={allNews[1]}/>
      <NewsListItem newsArticle={allNews[2]}/>
      <NewsListItem newsArticle={allNews[3]}/>
      <NewsListItem newsArticle={allNews[4]}/> */}
    </View> 
  );
}
