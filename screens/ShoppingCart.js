import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem"; // Corrected the component name
import cart from "../data/Cart";
const ShoppingCart = () => {
  const ShoppingCartTotals = () => (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410 US</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10 US</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>420 US</Text>
      </View>
    </View>
  );
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CheckOut</Text>
      </Pressable>
    </>
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    padding: 20,
    marginTop: 10,
    borderColor: "gains",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    marginLeft: 20, // Add some space between the text and the edge of the screen
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
