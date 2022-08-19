import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import Carousel from "react-native-anchor-carousel";

const { width: windowWidth } = Dimensions.get("window");

const data = [
  {
    id: "item2",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "9am",

    temp: "25°C",
  },
  {
    id: "item3",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "11am",
    temp: "23°C",
  },
  {
    id: "item1",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "1am",

    temp: "26°C",
  },
  {
    id: "item6",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "3am",

    temp: "22°C",
  },
  {
    id: "item4",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "4am",

    temp: "14°C",
  },

  {
    id: "item5",
    image: "http://openweathermap.org/img/wn/10d@2x.png",
    time: "6am",

    temp: "33°C",
  },
];

const ITEM_WIDTH = 0.4 * windowWidth;
const SEPARATOR_WIDTH = -20;
export default function ShopCarousel(props) {
  const { style } = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  function renderItem({ item, index }) {
    const { image, time, temp } = item;
    return (
      <Pressable
        activeOpacity={1}
        style={{}}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <View style={{}}>
          <Image source={{ uri: image }} style={styles.image} />

          <Text
            style={{
              textAlign: "center",
              color: "#4F4F4",
              fontSize: 17,
              fontWeight: "600",
              marginTop: 3,
              marginBottom: 10,
            }}
          >
            {time}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: "700",
              color: "#2E30AD",
            }}
          >
            {temp}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        keyExtractor={(item) => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  carousel: {
    width: windowWidth,
    height: ITEM_WIDTH + 100,
    flexGrow: 0,
  },
  item: {
    backgroundColor: "white",
    height: "38%",
    borderRadius: 15,
    borderColor: "white",
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  image: {
    width: "50%",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    aspectRatio: 1,
    backgroundColor: "#EBEBEB",
  },
});
