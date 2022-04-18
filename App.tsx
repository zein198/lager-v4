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