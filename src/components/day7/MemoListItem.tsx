import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AVPlaybackStatus, Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export type Memo = {
  uri: string;
  metering: number[];
};
export default function MemoListItem({ memo }: { memo: Memo }) {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: memo.uri },
      { progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    sound.setOnAudioSampleReceived((sample) => {});
  }

  useEffect(() => {
    loadSound();
  }, [memo.uri]);

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;
  const progress = position / duration;
  const formatMilis = (milis: number) => {
    const minutes = Math.floor(milis / (1000 * 60));
    const seconds = Math.floor((milis % (1000 * 60)) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: `${progress * 100}%`,
    // left: withTiming(`${progress * 100}%`, {
    //   duration:
    //     (status?.isLoaded && status.progressUpdateIntervalMillis) || 100,
    // }),
  }));

  const onPlaybackStatusUpdate = useCallback(
    async (newStatus: AVPlaybackStatus) => {
      setStatus(newStatus);
      if (!newStatus.isLoaded || !sound) return;
      if (newStatus.didJustFinish) {
        // console.warn("Res");
        //   await sound?.setPositionAsync(0);
        sound.setStatusAsync({ positionMillis: 0 });
      }
    },
    [sound]
  );

  async function playSound() {
    if (!sound) return;
    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.replayAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  // const lines = memo.metering.slice(0,30);
  let lines = [];
  let numLines = 50;
  for (let i = 0; i < numLines; i++) {
    const meteringIndex = Math.floor((i * memo.metering.length) / numLines);
    const nextMeteringIndex = Math.ceil(
      ((i + 1) * memo.metering.length) / numLines
    );
    const values = memo.metering.slice(meteringIndex, nextMeteringIndex);
    const avg = values.reduce((sum, a) => sum + a, 0) / values.length;
    // lines.push(memo.metering[meteringIndex]);
    lines.push(avg);
  }
  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={playSound}
        name={isPlaying ? "pause" : "play"}
        size={20}
        color={"gray"}
      />

      <Animated.View style={styles.playbackContainer}>
        {/* <View style={styles.playbackBackground} /> */}

        <View style={styles.wave}>
          {lines.map((db, index) => (
            <View
              key={index}
              style={[
                styles.waveLine,
                {
                  height: interpolate(db, [-60, 0], [5, 50], Extrapolate.CLAMP),
                  backgroundColor:
                    progress > index / lines.length ? "royalblue" : "gainsboro",
                },
              ]}
            />
          ))}
        </View>

        {/* <Animated.View
          style={[styles.playbackIndicator, animatedIndicatorStyle]}
        /> */}
        <Text
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            color: "gray",
            fontFamily: "InterSemi",
            fontSize: 12,
          }}
        >
          {formatMilis(position || 0)}/{formatMilis(duration || 0)}
        </Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 15,

    //Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 80,
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'red'
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 15,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
    left: "10%",
  },
  wave: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    // justifyContent:'center',
  },
  waveLine: {
    flex: 1,
    height: 30,
    // width:10,
    backgroundColor: "gainsboro",
    borderRadius: 20,
  },
});
