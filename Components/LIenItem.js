import { StyleSheet, View, Text, Pressable } from "react-native";

export default function LienItem(props) {
  return (
    <Pressable onPress={props.onSupprimerItem.bind(this, props.id)}>
      <View style={styles.lienItem}>
        <Text style={styles.lienText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  lienItem: {
    backgroundColor: "#c1dec9",
    padding: 5,
    marginTop: 2,
  },
  lienText: {
    color: "green",
  },
});
