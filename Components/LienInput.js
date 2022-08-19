import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function LienInput(props) {
  const [lienTextSaisie, SetLientexteSaisie] = useState("");

  function lienInputHandler(textSaisie) {
    SetLientexteSaisie(textSaisie);
  }
  function ajoutLienHandler() {
    props.ajoutLien(lienTextSaisie);
    SetLientexteSaisie("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="nouveau lien"
        onChangeText={lienInputHandler}
        value={lienTextSaisie}
        style={styles.inputLien}
      />

      <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
