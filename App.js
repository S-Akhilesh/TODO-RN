import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const removeTask = (id) => {
    let taskCopy = [...taskItems];
    taskCopy.splice(id, 1);
    setTaskItems(taskCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      <ScrollView>
        {taskItems.map((item, id) => (
          <TouchableOpacity key={id} onPress={() => removeTask(id)}>
            <Task task={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        style={styles.inputWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Task to do"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={addTask} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  heading: {
    fontSize: 40,
    paddingTop: 80,
    color: "darkblue",
    opacity: 0.7,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  inputWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    fontSize: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 6,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    fontSize: 25,
    opacity: 0.6,
  },
});
