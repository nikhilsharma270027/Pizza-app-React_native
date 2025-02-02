import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useCart } from "@/context/CartContext"; // Adjust path accordingly

const CheckoutScreen: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    // Proceed to checkout logic (e.g., navigate to a payment screen)
    console.log("Proceeding to checkout...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice().toFixed(2)}</Text>

        <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
          <Text style={styles.clearButtonText}>Clear Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE4D9",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#FF5722",
    fontWeight: "600",
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  clearButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutScreen;
