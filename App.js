import { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import LienInput from "./Components/LienInput";
import LienItem from "./Components/LIenItem";

export default function App() {
  const [listeLiens, SetListeLiens] = useState([]);

  function ajoutLienHandler(lienTextSaisie) {
    SetListeLiens((currentListeLiens) => [
      ...currentListeLiens,
      { text: lienTextSaisie, id: Math.random().toString() },
    ]);
  }

  function supprimerLienHandler(id) {
    SetListeLiens((currentListeLiens) => {
      return currentListeLiens.filter((lien) => lien.id !== id);
    });

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/link.png")}
        style={{ width: 100, height: 100 }}
      />

      <LienInput ajoutLien={ajoutLienHandler} />

      <View style={styles.lienContainer}>
        <Text> Liste des liens ...</Text>

        <FlatList
          data={listeLiens}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <LienItem
                text={itemData.item.text}
                id={itemData.item.id}
                onSupprimerItem={supprimerLienHandler}
              />
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
