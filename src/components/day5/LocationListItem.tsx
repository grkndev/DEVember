import { View, Text, StyleSheet, Image, Pressable, ViewStyle } from "react-native";
import React from "react";

type LocationItem = {
  id: number;
  latitude: number;
  longitude: number;
  price: number;
  title: string;
  numberOfStars: number;
  image: string;
};
export default function LocationListItem({
  location,
  onClose,
  containerStyle = {},
}: {
  location: LocationItem;
  onClose?: () => void;
  containerStyle?: ViewStyle
}) {
  return (
    <View style={[styles.card, containerStyle]}>
      <View>
        {onClose && (
          <Pressable onPress={onClose} style={styles.closeContainer}>
            <Text style={styles.close}>X</Text>
          </Pressable>
        )}
        <Image source={{ uri: location.image }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{location.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable price{" "}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {location.price} / Night</Text>
          <Text style={styles.stars}>★ {location.numberOfStars}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",

    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    flexWrap: "wrap",
    color: "gray",
  },
  price: {
    fontFamily: "InterBold",
  },
  image: {
    width: 150,
    aspectRatio: 1,
    zIndex: 0,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  stars: {},
  closeContainer: {
    position: "absolute",
    zIndex: 1,
    left: 10,
    top: 10,
    backgroundColor: "black",
    opacity: 0.7,
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 9999,
  },
  close: { color: "white", fontFamily: "InterBold" },
});
