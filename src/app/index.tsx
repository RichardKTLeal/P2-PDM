import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Informações sobre Países</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Buscar por nome do país</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Brazil"
          value={nome}
          onChangeText={setNome}
        />

        <Button title="Buscar país" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f2f2f2" },
  titulo: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 20 },
  subtitulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});