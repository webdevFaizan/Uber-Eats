import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView
      style={styles.AndroidSafeArea}
    >    
      <Home/>      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});