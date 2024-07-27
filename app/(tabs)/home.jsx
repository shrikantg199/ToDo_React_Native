import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useState } from "react";
import { db } from "../../configs/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import TodoList from "../../components/TodoList";
const home = () => {
  const [input, setInput] = useState("");
  const onSubmit = async () => {
    const docRef = await addDoc(collection(db, "todos"), {
      title: input,
      completed: false,
      createdAt: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <View>
      <View
        style={{
          margin: 4,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Todo"
          style={{
            color: Colors.light.text,
            backgroundColor: Colors.light.background,
            width: 200,
            padding: 8,
            borderRadius: 8,
          }}
          value={input}
          onChangeText={(value) => setInput(value)}
        />
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            backgroundColor: Colors.light.background,
            width: 80,
            borderRadius: 5,
          }}
        >
          <Text style={{ textAlign: "center", padding: 10 }}>add</Text>
        </TouchableOpacity>
      </View>
      <TodoList input={input} />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
