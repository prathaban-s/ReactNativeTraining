import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoeriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    handleNavigation = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleNavigation}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoeriesScreen;
