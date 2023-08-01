import { Image, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { Text, View, TextInput } from "react-native";

export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  // Create redux global state to access the products.
  const products = useSelector((state) => state.products.products);

  return (
    <View>
      <TextInput placeholder="Search"></TextInput>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              // Update selected product set payload
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              // Navigate to ProductDetails and send the id on press.
              navigation.navigate("ProductDetails");
            }}
            style={styles.itemContainter}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
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
