import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native";
import { useState } from "react";

const [nome, setNome] = useState("");

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Informações sobre Países
      </Text>
      <View style={styles.card}>
  <Text>Buscar por nome do país</Text>

  <TextInput
    style={styles.input}
    placeholder="Ex: Brazil"
    value={nome}
    onChangeText={setNome}
  />

  <Button
    title="Buscar país"
    onPress={() => {}}
  />
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 10,
},

input: {
  borderWidth: 1,
  borderColor: "#aaa",
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
},
});