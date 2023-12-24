import { PropsWithChildren, createContext, useContext, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

type BiometricsContext = {
  isUnlocked: boolean;
  auth: () => Promise<void>;
};

const BiometricsContext = createContext<BiometricsContext>({
  isUnlocked: false,
  auth: async () => {},
});

const BiometricsProvider = ({ children }: PropsWithChildren) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const auth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert("Not Supported");
      setIsUnlocked(true);
      return;
    }

    const res = await LocalAuthentication.authenticateAsync();
    if (res.success) setIsUnlocked(true);
  };

  return (
    <BiometricsContext.Provider value={{ isUnlocked, auth }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricsProvider;

export const useBiometrics = () => useContext(BiometricsContext);
