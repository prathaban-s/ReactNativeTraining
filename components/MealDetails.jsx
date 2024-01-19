import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.detail, style]}>
      <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailText, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailText, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
