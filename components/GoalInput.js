import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [textInput, setTextInput] = useState("");

  const goalInputHandler = (enteredText) => {
    setTextInput(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(textInput);
    setTextInput("");
  };
  const cancelEditHandler = () => {
    props.onClose();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Type some goal"
          onChangeText={goalInputHandler}
          value={textInput}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0"></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelEditHandler} color="#f31282"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 10,
    padding: 16,
    color: '#120438',
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  }, 
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
