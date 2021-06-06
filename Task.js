import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Task({ task }) {
  return (
    <View style={styles.list}>
      <View style={styles.left}>
        <View style={styles.rect}></View>
        <Text style={styles.task}>{task}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "95%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    maxWidth: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rect: {
    height: 25,
    width: 25,
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
  },
  task: {
    fontSize: 20,
    maxWidth: "90%",
  },
  circular: {
    width: 14,
    marginRight: 10,
    height: 14,
    borderRadius: 5,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
});
