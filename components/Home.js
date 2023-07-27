import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ShoppingCart from "../screens/ShoppingCart";

const Home = () => {
  return (
    <View>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainter: {
    width: "50%",
    padding: 1,
  },
});
