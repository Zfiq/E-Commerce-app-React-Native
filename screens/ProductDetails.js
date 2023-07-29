import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();
  const addToCart = () => {};

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: { fontSize: 34, fontWeight: "500", marginVertical: 10 },
  price: { fontSize: 16, fontWeight: "500" },
  description: {
    fontSize: 18,
    fontWeight: "300",
    marginVertical: 10,
    lineHeight: 30,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 5,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});