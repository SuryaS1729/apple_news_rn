import NewsListItem from "@/components/NewsListItem";
import { StatusBar, Text, View, FlatList, SectionList } from "react-native";
import allNews from '@assets/data/allNews.json';
import homeNews from '@assets/data/homeNews.json';

export default function HomeScreen() {
  

  return (
    <View style={{marginTop:60}}>
      <StatusBar translucent hidden/>
    <SectionList
    sections={homeNews}
    renderItem={({item})=><NewsListItem newsArticle={item}/>}
    renderSectionHeader={({section})=><Text>{section.title}</Text>}
    stickySectionHeadersEnabled={false}
    showsVerticalScrollIndicator={false}
    />

    </View> 
  );
}
