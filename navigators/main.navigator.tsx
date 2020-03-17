import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "../store";
import { light1 } from "../theme/color.theme";
import { HomeScreen } from "../screens/home.screen";
import { SearchResultsScreen } from "../screens/search-results.screen";

const MyTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    background: light1,
    primary: "rgb(255, 45, 85)"
  }
};

export type IRootStackParams = {
  Home: null;
  SearchResults: {
    searchTerm: string;
  };
};

const Stack = createStackNavigator<IRootStackParams>();

export default function Navigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "transparent"
              }
            }}
          />
          <Stack.Screen
            name="SearchResults"
            component={SearchResultsScreen}
            initialParams={{ searchTerm: "" }}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "transparent"
              }
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
