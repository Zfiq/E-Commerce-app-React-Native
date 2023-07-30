import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart"; // Make sure to import the correct component
import { Animated, Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import cart from "./data/Cart";
import { Provider } from "react-redux"; // Import the Provider from Redux
import { store } from "./store";
function App() {
  const Stack = createStackNavigator();
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
