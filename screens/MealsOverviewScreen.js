import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";
const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const selectedCategoryMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCategoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
            title={item.title}
            image={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        )}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
