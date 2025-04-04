import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function RegisterScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Register" onPress={() => {}} />
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
