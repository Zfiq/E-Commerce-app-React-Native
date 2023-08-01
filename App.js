import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import { Animated, Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store";
import { MyContextProvider, useMyContext } from "./Context/MyContext";

function App() {
  const Stack = createStackNavigator();

  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  return (
    <Provider store={store}>
      <MyContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ contentStyle: { backgroundColor: "white" } }}
          >
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={({ navigation }) => {
                const count = useMyContext(); // Access the context value using the hook to update the cart quntity.

                return {
                  headerRight: () => (
                    <Pressable
                      onPress={() => navigation.navigate("Cart")}
                      style={{ flexDirection: "row" }}
                    >
                      <FontAwesome5
                        name="shopping-cart"
                        size={18}
                        color="gray"
                      />
                      {/* Display the cart count from the context */}
                      <Text> {count}</Text>
                      <Text style={{ marginLeft: 5, fontWeight: "500" }}></Text>
                    </Pressable>
                  ),
                };
              }}
            />

            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen name="Cart" component={ShoppingCart} />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContextProvider>
    </Provider>
  );
}

export default App;
