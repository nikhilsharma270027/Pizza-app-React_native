import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ImageCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}

const ImageCard = ({ name, description, image, price }: ImageCardProps) => {
  const validImageUrl = image?.startsWith("http")
    ? image
    : "https://via.placeholder.com/150";

  return (
    <View style={styles.card}>
      <Image source={{ uri: validImageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        {/* Full-width "Add" button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    width: "45%",
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#FF5722",
    fontWeight: "600",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#FF5722",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageCard;
