import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { Text, View, TextInput } from "react-native";
import { useGetProductsQuery } from "../store/apiSlice";
import Icon from "react-native-vector-icons/FontAwesome";
export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching products: {error.error}</Text>;
  }

  const products = data.data;

  const handleInput = (text) => {
    setInput(text);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const renderProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={30} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Search"
          value={input}
          onChangeText={handleInput}
          style={styles.input}
        />
      </View>
      <FlatList
        data={renderProducts}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("ProductDetails");
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </Pressable>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#f0f0f0", // Change this to your background color
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 3,
    bottom: 35,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white", // Match input background to the container background
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    height: 40,
    paddingVertical: 8,
    paddingRight: 20,
    paddingLeft: 5,
  },
});
