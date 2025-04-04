import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { Platform } from "react-native";
import axios from "axios";

function RegisterScreen(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function registerhandler() {
    try {
      setLoading(true);
      if (!username || !email || !password) {
        alert("Please fill all fields");
        setLoading(false);
        return;
      }

      const baseURL =
        Platform.OS === "android"
          ? "http://10.0.2.2:8080/api/v1/auth/register"
          : "http://localhost:8080/api/v1/auth/register";
      const { data } = await axios.post(baseURL, {
        email: email,
        password: password,
        name: username,
      });
      console.log(data);
      setLoading(false);
      if (data) {
        alert("Registration Successful");
        props.navigation.replace("Login");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials" + error);
      setLoading(false);
    }
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setPassword}
        />
        <Button
          title={"register"}
          loading={loading}
          onPress={registerhandler}
        />
        <View>
          <Text style={styles.logintext}>
            Don't have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => props.navigation.replace("Login")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
export default RegisterScreen;
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
