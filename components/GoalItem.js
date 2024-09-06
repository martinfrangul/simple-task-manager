import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    // <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#5e0acc" }}
          onPress={onDeleteItem.bind(this, id)}
          style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{text}</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 6,
    color: "white",
  },
});

export default GoalItem;
