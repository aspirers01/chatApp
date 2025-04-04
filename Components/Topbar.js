import { View, Text, StyleSheet } from "react-native";
import Button from "../Components/Button";
import { useContext, useState } from "react";
import { GlobalContext } from "../Utils/Context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
function TopBar(props) {
  const { name, setName } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  function logoutHandler() {
    setLoading(true);
    AsyncStorage.removeItem("username");
    setName(null);
    setLoading(false);
    props.navigation.replace("Login");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {name}</Text>
      <View
        style={{
          backgroundColor: "#FF9149",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Button title={"logout"} loading={loading} onPress={logoutHandler} />
      </View>
    </View>
  );
}
export default TopBar;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#60B5FF",
  },
});
