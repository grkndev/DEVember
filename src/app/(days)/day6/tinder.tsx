import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TinderCard from "@/components/day6/TinderCard";
import { Stack } from "expo-router";
import {
  interpolate,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const profiles = [
  {
    id: 1,
    name: "Cherry Blossoms",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 2,
    name: "City Skyline",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 3,
    name: "Ocean Cliff",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 4,
    name: "Mountain Peak",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 5,
    name: "Forest Path",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 6,
    name: "Waterfall",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 7,
    name: "Lavender Fields",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 8,
    name: "Snowy Mountains",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 9,
    name: "City at Night",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: 10,
    name: "Forest Path",
    img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
];

export default function tinder() {
  const [users, setUsers] = useState(profiles);
  const activeIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);

  useAnimatedReaction(
    () => activeIndex.value,
    (value, prev) => {
      if (Math.floor(value) !== index) {
        runOnJS(setIndex)(Math.floor(value));
      }
    }
  );

  useEffect(() => {
    if (index > profiles.length - 3) {
      setUsers((usrs) => [...usrs, ...profiles.reverse()]);
    }
  }, [index]);

  const onResponse = (res: true | false ) => {

  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <Text style={{ top: 70, position: "absolute" }}>
        Current index: {index}
      </Text> */}
      {users.map((user, index) => (
        <TinderCard
          key={`${user.id}-${index}`}
          user={user}
          numOfCards={profiles.length}
          index={index}
          activeIndex={activeIndex}
          onResponse={onResponse}
        />
      ))}

      {/* <View
        style={{ position: "absolute", bottom: 20, backgroundColor: "red" }}
      >
        <Button
          title="YES"
          onPress={() => (activeIndex.value = activeIndex.value + 1)}
        />
      </View> */}
    </View>
  );
}
