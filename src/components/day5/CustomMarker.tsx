import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function CustomMarker({
  location,
  onPress,
}: {
  location: any;
  onPress: () => void;
}) {
  return (
    <Marker
      onPress={onPress}
      key={location.id}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      title={location.title}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>${location.price}</Text>
      </View>
    </Marker>
  );
}
