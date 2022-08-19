import { StyleSheet, Text, Image, View } from "react-native";

import * as Location from "expo-location";
import { useEffect, useState } from "react";

const Footer = () => {
  const [data, setData] = useState([]);

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
    })();
  }, []);

  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          borderWidth: 1,
          borderRightWidth: 0,
          width: "50%",
          height: 120,
          borderRadius: 0,
          marginTop: 40,
          borderColor: "#f5f5f5",
          paddingBottom: 0,
          paddingTop: 50,
          textAlign: "center",
          color: "#333333",
          fontSize: 16,
        }}
      >
        Pressure |{" "}
        <Text style={{ fontWeight: "700" }}>{data?.main?.pressure}hPa</Text>
      </Text>
      <Text
        style={{
          borderWidth: 1,
          borderRightWidth: 0,
          width: "50%",
          height: 120,
          borderRadius: 0,
          marginTop: 40,
          borderColor: "#f5f5f5",
          paddingBottom: 0,
          paddingTop: 50,
          textAlign: "center",
          color: "#333333",
          fontSize: 16,
        }}
      >
        Humidity |{" "}
        <Text style={{ fontWeight: "700" }}>{data?.main?.humidity}%</Text>
      </Text>
    </View>
  );
};

export default Footer;
