import { Stack } from "expo-router";
import { Text, View } from "react-native";
import EventProvider from "./context/EventContext";

export default function Layout() {
  return (
    <EventProvider>
      <View style={{ flex: 1 }}>

        {/* NAVBAR */}
        <View
          style={{
            height: 60,
            backgroundColor: "black",
            justifyContent: "center",
            paddingLeft: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Event Planner
          </Text>
        </View>

        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </EventProvider>
  );
}