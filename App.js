import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput defaultValue="Nouveau lien..." style={styles.inputLien} />
        <Button title="Ajouter un lien" />
      </View>
      <View style={styles.lienContainer}>
        <Text> Liste des liens ...</Text>
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
    flex: 3,
  },
  inputContainer: {
    flex:1,
    flexDirection: "row",
    alignItems:"center"
  },
});
