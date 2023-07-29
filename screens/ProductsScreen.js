import { Image, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import products from "../data/products";

export default function ProductsScreen({ navigation }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("ProductDetails")}
          style={styles.itemContainter}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

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
