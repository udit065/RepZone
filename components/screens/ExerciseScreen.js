import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { exercises } from "../data/exercises";

export default function ExerciseScreen({ route }) {
  const { part } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises[part]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.gif }} style={styles.gif} />
    <View style={styles.overlay}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  </View>
)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 10,
  },
  card: {
    marginBottom: 20,
  borderRadius: 15,
  overflow: "hidden",
  backgroundColor: "#1e293b",
  },
  title: {
    color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  },
  overlay: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: 10,
},
  gif: {
     width: "100%",
  height: 400,
  resizeMode: "cover", // looks premium
  },
});