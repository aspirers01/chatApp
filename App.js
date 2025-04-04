import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigation";
import GlobalState from "./Utils/Context/context";

export default function App() {
  return (
    <>
      <GlobalState>
        <StatusBar hidden={true} />
        <StackNavigator />;
      </GlobalState>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
