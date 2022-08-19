import { StyleSheet, Text, Image, View } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const Today = () => {
  const [data, setData] = useState([]);
  const [main, setMain] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=6019371de22c4b666e9e0da2bd091be3`
      );
      const data = await resp.json();
      setData(data);
      const tempWeather = data?.weather;

      let weatherMain = tempWeather.map(function (element) {
        return setMain(element.main);
      });
      let weatherLogo = tempWeather.map(function (element) {
        return setIcon(element.icon);
      });
      let weatherDescription = tempWeather.map(function (element) {
        return setDescription(element.description);
      });
    })();
  }, []);

  const temps = Math.round(data?.main?.feels_like - 273);
  const temp = Math.round((temps * 9) / 5 + 32);

  //const realone = tempWeather[0]?.main;

  return (
    <View style={{ marginBottom: 80 }}>
      <View style={{ marginLeft: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: "400" }}> Today </Text>
        <Text
          style={{
            fontSize: 96,
            fontWeight: "700",
            color: "#2E30AD",
            marginTop: 15,
          }}
        >
          {temp ? temp : 0}°C
        </Text>
      </View>
      <View
        style={{
          marginLeft: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{main}</Text>

          <Text style={{ fontSize: 14, fontWeight: "400" }}>{description}</Text>
        </View>
        <View style={{ marginTop: -45 }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `http://openweathermap.org/img/wn/${
                icon ? icon : "01d"
              }@2x.png`,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 160,
    height: 160,
  },
  tinyLogo2: {
    width: 100,
    height: 100,
  },
});

export default Today;
