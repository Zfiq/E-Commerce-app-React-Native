import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store";
import { MyContextProvider, useMyContext } from "./Context/MyContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom Drawer Content component
const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("ProductsScreen");
        }}
      />

      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "lightgray" : "white",
          padding: 16,
        })}
      >
        <Text>Login</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

const MainStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "white" },
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          {/* Cart Icon */}
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
            {/* Display the cart count from the context */}
            <Text> {useMyContext()}</Text>
          </Pressable>
        </View>
      ),
    }}
  >
    <Stack.Screen
      name="ProductsScreen"
      component={ProductsScreen}
      options={{ headerTitle: "" }} // Hides the title for ProductsScreen
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ presentation: "modal" }}
    />
    <Stack.Screen name="Cart" component={ShoppingCart} />
    <Stack.Screen name="Sign up" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <MyContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="  " component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  </Provider>
);

export default App;
