import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.text}>We can upload image,</Text>
      <Text style={styles.text}>add emoji and save it</Text>
      <Text style={styles.text}>through Sticker Smash</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBCFCD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    padding: 4,
    textAlign: 'center',
  },

  subContainer:{
    paddingVertical: 20,
    paddingHorizontal:10,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#AA336A',
  },
});
