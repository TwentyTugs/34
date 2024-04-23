import React from "react";
import { Image } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WordControlProvider from "./src/context";

import ExercisePage from "./src/pages/ExercisePage";

import Home from "./src/pages/Home";


const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nunito_Black: require("./assets/Fonts/Nunito-Black.ttf"),
    Nunito_Bold: require("./assets/Fonts/Nunito-Bold.ttf"),
    Nunito_ExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    Nunito_Regular: require("./assets/Fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <WordControlProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ExercisePage"
            component={ExercisePage}
            options={{
              presentation: "modal",
            }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </WordControlProvider>
  );
}

function HomePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
