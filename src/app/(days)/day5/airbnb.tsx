import { View, StyleSheet, Text, Button } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Stack } from "expo-router";
import locations from "@assets/data/day5/locations.json";
import CustomMarker from "@/components/day5/CustomMarker";
import LocationListItem from "@/components/day5/LocationListItem";
import BottomSheet, {
  BottomSheetFlatList,
  useBottomSheetDynamicSnapPoints,
  useGestureEventsHandlersDefault,
} from "@gorhom/bottom-sheet";

type LocationItem = {
  id: number;
  latitude: number;
  longitude: number;
  price: number;
  title: string;
  numberOfStars: number;
  image: string;
} | null;
export default function AirBnbScreen() {
  const [selectedLocation, setSelectedLocation] = useState<LocationItem>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [80, "50%", "90%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} region={mapRegion}>
        {locations.map((location) => (
          <CustomMarker
            key={location.id}
            location={location}
            onPress={() => setSelectedLocation(location)}
          />
        ))}
      </MapView>

      {/* Display selected location */}
      {selectedLocation && (
        <LocationListItem
          onClose={() => setSelectedLocation(null)}
          location={selectedLocation}
          containerStyle={{
            position: "absolute",
            bottom:
              typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
            left: 10,
            right: 10,
          }}
        />
      )}

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        // enablePanDownToClose
        snapPoints={snapPoints}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.bottomListTitle}>
            Over {locations.length} places
          </Text>
          <BottomSheetFlatList
            data={locations}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <LocationListItem location={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  bottomListTitle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
});
