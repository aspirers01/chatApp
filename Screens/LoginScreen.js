import { use, useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../Utils/Context/context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
function LoginScreen(props) {
  const { name, setName } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const username = await AsyncStorage.getItem("username");
      if (username) {
        setName(JSON.parse(username));
        props.navigation.replace("Home");
      }
    }
    checkLogin();
  }, []);

  async function loginHandler() {
    try {
      setLoading(true);
      if (!email || !password) {
        alert("Please fill all fields");
        setLoading(false);
        return;
      }
      const baseURL =
        Platform.OS === "android"
          ? "http://10.0.2.2:8080/api/v1/auth/login"
          : "http://localhost:8080/api/v1/auth/login";
      const { data } = await axios.post(baseURL, {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("username", JSON.stringify(data.user.name));
      setName(data.user.name);
      setLoading(false);
      if (data) {
        props.navigation.replace("Home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Invalid Credentials" + error);
    }
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title={"login"} loading={loading} onPress={loginHandler} />
        <View>
          <Text style={styles.logintext}>
            Don't have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => props.navigation.replace("Register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  logintext: {
    textAlign: "center",
    marginVertical: 20,
  },
  link: {
    color: "#f4511e",
  },
});
