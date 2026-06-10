import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { useEvents } from "./context/EventContext";

export default function Upcoming() {
  const { events } = useEvents();

  const upcomingEvents = events.filter((e) => e.status === "upcoming");

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        gap: 15,
      }}
      showsVerticalScrollIndicator={false}
    >
      {upcomingEvents.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}   // ✅ FIX 1
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
        backgroundColor: "#B5EAEA",
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

      <Text style={{ fontSize: 18, fontWeight: "600", color: "#333", padding: 10 }}>
        {title}
      </Text>

      <Text style={{ color: "#444", paddingHorizontal: 10 }}>
        📅 {date}
      </Text>

      <Text style={{ color: "#444", paddingHorizontal: 10, paddingBottom: 10 }}>
        📍 {location}
      </Text>
    </TouchableOpacity>
  );
}