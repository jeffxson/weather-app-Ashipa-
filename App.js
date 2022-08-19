import { StyleSheet, Text, Image, View } from "react-native";
import Header from "./header";
import Today from "./today";
import ShopCarousel from "./cersel";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

const App = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Header />
      </View>
      <View style={{ flex: 3 }}>
        <Today />
      </View>

      <View style={{ flex: 2 }}>
        <ShopCarousel />
      </View>
      <View style={{ flex: 2 }}>
        <Footer />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
