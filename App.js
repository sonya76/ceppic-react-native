import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [lienTextSaisie, SetLientexteSaisie] = useState("");
  const [listeLiens, SetListeLiens] = useState([]);

  function ajoutLienHandler() {
    SetListeLiens([...listeLiens, lienTextSaisie]);
    SetLientexteSaisie("");
  }
  function lienInputHandler(textSaisie) {
    SetLientexteSaisie(textSaisie);
  }

  return (
    <View style={styles.container}>
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
        <ScrollView>
          {listeLiens.map((lien) => (
            <Text key={lien}>{lien}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    height: 80,
    borderColor: "green",
    borderWidth: 2,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
