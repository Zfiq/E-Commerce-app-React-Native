import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Login = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate("Sign up"); // Navigate to the 'Signup' screen
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text
        style={{ marginTop: 10, fontWeight: 500, color: "gray", fontSize: 20 }}
      >
        Login to your account
      </Text>

      <View style={styles.InputContainter}>
        <TextInput
          placeholder="E-Mail"
          value={""}
          onChange={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={""}
          onChange={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContauner}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, fontWeight: 500, color: "blue" }}>
          Don't have an account
        </Text>
        <TouchableOpacity
          onPress={handleSignup}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  InputContainter: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderRadius: 10,

    marginTop: 5,
  },

  buttonContauner: {
    width: "60%",

    justifyContent: "center",

    alignItems: "center",

    marginTop: 40,
  },

  button: {
    backgroundColor: "#0782F9",

    width: "100%",

    padding: 15,

    borderRadius: 10,

    alignItems: "center",
  },

  buttonOutline: {
    backgroundColor: "white",

    marginTop: 5,

    borderColor: "#0782F9",

    borderWidth: 2,
  },

  buttonOutlineText: {
    backgroundColor: "white",

    fontWeight: "700",

    fontSize: 16,
  },

  buttonText: {
    backgroundColor: "#0782F9",

    fontWeight: "700",

    fontSize: 16,
  },
});

export default Login;
