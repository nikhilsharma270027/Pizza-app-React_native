import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

interface ImageCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ name, description, image, price }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <Image
        source={{ uri: "https://cloud.appwrite.io/v1/storage/buckets/679a45cf002f77bae9c6/files/679a5c73002f83621ad8/view?project=6798eff10028b27c0360&mode=admin" }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: 8,
    width: windowWidth / 2 - 16, // Ensure two cards fit side by side with margin
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#ff5722",
    fontWeight: "bold",
  },
});

export default ImageCard;
