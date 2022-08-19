import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function App() {
  const [lienTextSaisie, SetLientexteSaisie] = useState("");
  const [listeLiens, SetListeLiens] = useState([]);

  function ajoutLienHandler() {
    SetListeLiens((currentListeLiens) => [
      ...listeLiens,
      { text: lienTextSaisie, key: Math.random().toString() },
    ]);
    SetLientexteSaisie("");
  }

  function lienInputHandler(textSaisie) {
    SetLientexteSaisie(textSaisie);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/link.png")}
        style={{ width: 100, height: 100 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="nouveau lien"
          onChangeText={lienInputHandler}
          value={lienTextSaisie}
          style={styles.inputLien}
        />

        <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
      </View>

      <View style={styles.lienContainer}>
        <Text> Liste des liens ...</Text>

        <FlatList
          data={listeLiens}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.lienItem}>
                <Text>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    margin: 60,
  },
  StyleTexte: {
    color: "red",
  },
  inputLien: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
  lienContainer: {
    width: 300,
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
  },
  lienItem: {
    backgroundColor: "#c1dec9",
    padding: 5,
    marginTop: 2,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
