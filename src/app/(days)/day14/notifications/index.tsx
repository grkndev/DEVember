import { View, Text, Button } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

export default function NotificationsHomeScreen() {
  return (
    <View>
      <Text>NotificationsHomeScreen</Text>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Check out the new tinder swipe animation! 📬",
      body: "Here is the notification body",
      data: { data: "goes here", url:'/day6' },
    },
    trigger: null,
  });
}
