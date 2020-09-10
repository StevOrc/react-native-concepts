import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputText = () => {

  const [name, setName] = useState('');

  const handleOnChange = (value) => {
    setName(value);
  }

  return (
    <View>
      <Text>Enter Name : </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => handleOnChange(newValue)}
      />
      <Text>My name is : {name} </Text>
      { name.length < 5 ? <Text>Password must at least 5 caracters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default InputText;
