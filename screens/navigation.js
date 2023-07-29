import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "./ProductDetails";
import ProductsScreen from "./ProductsScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
