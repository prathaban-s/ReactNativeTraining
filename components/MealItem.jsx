import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const MealItem = ({
  id,
  title,
  image,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const onPressMealItem = () => {
    navigation.navigate("MealsDetail", {
      mealId: id,
    });
  };
  return (
    <>
      <View style={styles.mealItem}>
        <Pressable onPress={onPressMealItem} android_ripple={{ color: "#ccc" }}>
          <View style={styles.innerContainer}>
            <View>
              <Image style={styles.image} source={{ uri: image }} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{duration}m</Text>
              <Text style={styles.detailText}>{complexity}</Text>
              <Text style={styles.detailText}>{affordability}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
