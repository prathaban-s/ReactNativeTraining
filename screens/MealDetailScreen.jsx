import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <View style={styles.listItem} key={ingredient}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
          <Text style={styles.subTitle}>Steps</Text>
          {selectedMeal.steps.map((step) => (
            <View style={styles.listItem} key={step}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
  itemText: {
    textAlign: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
});
