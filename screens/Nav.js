import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./ProductsScreen";
import ProductDetails from "./ProductDetails";
import ShoppingCart from "./ShoppingCart"; // Make sure to import the correct component
import { Animated, Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import cart from "../data/Cart"; // Import the data array from "./data/Cart"

function Nav() {
  const Stack = createStackNavigator();
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                {/* Display the cart count from the data array */}
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {cart.length}
                </Text>
              </Pressable>
            ),
          })}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
