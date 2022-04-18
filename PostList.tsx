import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function PostList() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("https://lager.emilfolino.se/v2/products?api_key=b79009158836c4b2e3d7b417154e64a2")
        .then(response => response.json())
        .then(result => setPosts(result.data));
    }, []);   

    const listOfPosts = posts.map((post, index) => {
        return <Text key={index}
        style={{fontSize:40,
            marginBottom:32}}>
            Namn är: {post.name}{'\n'}Lagersaldot är: {post.stock}</Text>
    })
    

    return (
        <View>
        {listOfPosts}
        </View>
    );
}
  