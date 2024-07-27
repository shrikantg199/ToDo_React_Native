import {
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

const TodoList = ({ input }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    setLoading(true);
    const q = query(collection(db, "todos"));
    setTodos([]);
    const quersnapshot = await getDocs(q);
    quersnapshot.forEach((doc) => {
      setTodos((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
      console.log(doc.data());
    });
    setLoading(false);
  };
  const onDelete = async (todos) => {
    await deleteDoc(doc(db, "todos", todos));
    ToastAndroid.show("item is delete", ToastAndroid.LONG);
    getTodos();
  };
  return (
    <View style={{ marginLeft: 40, margin: 10 }}>
      <FlatList
        data={todos}
        refreshing={loading}
        onRefresh={getTodos}
        renderItem={({ item }) => (
          <View
            key={item?.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              padding: 10,
            }}
          >
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => onDelete(item?.id)}>
              <Text style={{ color: "#f41616" }}>del</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
