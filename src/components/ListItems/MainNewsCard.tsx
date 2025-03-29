import { News } from "@/types/types";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import NewsListItemFooter from "../NewsListItemFooter";
import { Link } from "expo-router";

type MainNewsCardProps = {
    newsArticle: News
}



export default function MainNewsCard({newsArticle}:MainNewsCardProps){
    return (
       <Link href={`/newsArticle/${newsArticle.id}`} asChild> 

       <Pressable style={styles.container}>
            <Image source={{uri: newsArticle.image}} style={styles.mainImage}/>
            <View style={{padding:10}}>
                <Image source={require('@assets/black-logo.png')} style={{width: 50, height: 20, marginBlock:5}} resizeMode='contain'/>
                <Text style={{fontSize:17,fontWeight:'bold', marginBottom:25}}>Title: {newsArticle.title}</Text>
                <NewsListItemFooter publishedDate={newsArticle.created_at} author={newsArticle.author}/>
            </View>


        </Pressable>
        
        </Link>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor:'white',marginBottom:15, gap:10,borderRadius:10},
    mainImage:{
        width: '100%' ,
        aspectRatio:4/3, 
        borderTopLeftRadius:10, 
        borderTopRightRadius:10}
})