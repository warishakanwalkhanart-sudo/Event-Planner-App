import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEvents } from "./context/EventContext";

export default function Past() {
  const { events } = useEvents();

  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        gap: 15,
      }}
      showsVerticalScrollIndicator={false}
    >
      {pastEvents.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}   // ✅ FIX
          onPress={() => router.push(`/event/${item.id}`)}
        />
      ))}
    </ScrollView>
  );
}

function Card({ title, date, location, image, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#FFDAC1",
        borderRadius: 18,
        overflow: "hidden",
      }}
    >
      {/* ✅ IMAGE FIX */}
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 180,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
          {title}
        </Text>

        <Text style={{ color: "#444", marginTop: 5 }}>
          📅 {date}
        </Text>

        <Text style={{ color: "#444" }}>
          📍 {location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}