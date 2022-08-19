import { StyleSheet, View, Text } from "react-native";

export default function LienItem(props) {
  return (
    <View style={styles.lienItem}>
      <Text style={styles.lienText}>{props.truc}</Text>
    </View>
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
  }
});
