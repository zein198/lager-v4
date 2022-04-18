import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostList from './components/PostList';

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView style={{padding: 12}}>
      <Text style={{fontSize: 48}}>My Products{'\n'}</Text>
      <PostList />
      <StatusBar style="auto"/>
      </ScrollView>
    </SafeAreaView>
  );
}

// import Stock from './components/stock.tsx';
// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import warehouse from './assets/warehouse.jpeg';


// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//      <View style={styles.base}>
//       <Text style={{color: '#33c', fontSize: 42}}>Lager-Appen</Text>
//       <Image source={warehouse} style={{ width: 320, height: 240 }} />
//       <Stock/>
//       <StatusBar style="auto" />
//     </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   base: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingLeft: 12,
//     paddingRight: 12,
//   }
// });

