import { Slot } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useBiometrics } from "@/components/day10/BiometricsProvider";
export default function BiometricProtectedLayout() {
  const { isUnlocked, auth } = useBiometrics();

  useEffect(() => {
    if (!isUnlocked) auth();
  }, []);

  if (!isUnlocked)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{ fontFamily: "InterSemi", fontSize: 20, marginBottom: 20 }}
        >
          Please use FaceId to unlock
        </Text>
        <FontAwesome5
          onPress={auth}
          name="fingerprint"
          size={75}
          color="gray"
        />
      </View>
    );
  return <Slot />;
}
