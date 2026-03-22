import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const bodyParts = [
  { name: "Chest", icon: "weight-lifter" },
  { name: "Legs", icon: "run" },
  { name: "Back", icon: "dumbbell" },
  { name: "Biceps", icon: "arm-flex" },
  { name: "Triceps", icon: "arm-flex-outline" },
  { name: "Shoulders", icon: "weight-lifter" },
  { name: "Forearm", icon: "dumbbell" },
  { name: "Cardio", icon: "human-male-height" },
];

const screenWidth = Dimensions.get("window").width;
const cardSize = (screenWidth - 60) / 2; // 2 columns with spacing

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { width: cardSize, height: cardSize }]}
            onPress={() =>
              navigation.navigate("Exercises", { part: item.name })
            }
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={40}
              color="#00ffcc"
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#00ffcc",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
});