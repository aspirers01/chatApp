import { View, Text, StyleSheet } from "react-native";
import Button from "../Components/Button";
import { useContext, useState } from "react";
import { GlobalContext } from "../Utils/Context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import TopBar from "../Components/Topbar";
function HomeScreen(props) {
  const { name, setName } = useContext(GlobalContext);

  return (
    <>
      <TopBar navigation={props.navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Start </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>your Chats</Text>
        <View style={{ color: "#60B5FF", marginTop: 20 }}>
          <Button
            title={"Start Chatting"}
            onPress={() => props.navigation.navigate("Chat")}
            style={{
              backgroundColor: "#60B5FF",
              width: "80%",
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
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
