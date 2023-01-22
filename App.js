import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import { Divider } from 'react-native-elements';
import RootNavigation from "./navigation";

export default function App() {
  return (<RootNavigation/>);
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});