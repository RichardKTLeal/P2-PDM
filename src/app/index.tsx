import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Linking } from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [paisNome, setPaisNome] = useState<any>(null);
  const [erro, setErro] = useState("");

  async function buscarPorNome() {
    try {
      setErro("");
      setPaisNome(null);

      const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`);
      const dados = await resposta.json();

      setPaisNome(dados[0]);
    } catch {
      setErro("Erro ao buscar país.");
    }
  }

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

        <Button title="Buscar país" onPress={buscarPorNome} />

        {paisNome && (
          <View style={styles.resultado}>
            <Text>Nome comum: {paisNome.name.common}</Text>
            <Text>Nome oficial: {paisNome.name.official}</Text>
            <Text>Nome em russo: {paisNome.translations?.rus?.common}</Text>

            <Text
              style={styles.link}
              onPress={() => Linking.openURL(paisNome.maps.openStreetMaps)}
            >
              Abrir no OpenStreetMap
            </Text>
          </View>
        )}
      </View>

      {erro !== "" && <Text style={styles.erro}>{erro}</Text>}
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
  resultado: { marginTop: 15, gap: 8 },
  link: { color: "blue", marginTop: 10, textDecorationLine: "underline" },
  erro: { color: "red", textAlign: "center", fontWeight: "bold" },
});