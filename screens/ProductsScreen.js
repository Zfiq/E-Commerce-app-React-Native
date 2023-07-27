import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import products from "../data/products";

export default function ProductsScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainter}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
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
