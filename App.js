import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoeriesScreen from "./screens/CategoeriesScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: "Meals Category",
            }}
            component={CategoeriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            options={{
              title: "Meals",
            }}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealsDetail"
            options={{
              title: "Meal Detail",
            }}
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoeriesScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({});
