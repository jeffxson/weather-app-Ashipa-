import { StyleSheet, Text, Image, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={25} color="#000000" />
      <MaterialIcons name="menu" size={30} color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
  },
});

export default Header;
