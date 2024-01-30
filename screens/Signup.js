import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (user) => {
    setUserName(user);
    console.log(user);
  };

  const handleEmail = (userEmail) => {
    setEmail(userEmail);
    console.log(userEmail);
  };

  const handlePassword = (pass) => {
    setPassword(pass);
    console.log(pass);
  };

  const handleSignup = () => {
    // Your signup logic goes here
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.InputContainter}>
        <TextInput
          placeholder="User Name"
          value={userName}
          onChangeText={handleUserName}
          style={styles.input}
        />
        <TextInput
          placeholder="E-Mail"
          value={email}
          onChangeText={handleEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePassword}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContauner}>
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

export default Signup;
