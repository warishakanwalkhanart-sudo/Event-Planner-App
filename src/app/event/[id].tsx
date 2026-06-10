import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEvents } from "../context/EventContext";

export default function EventDetail() {
  const { id } = useLocalSearchParams();
  const { events, deleteEvent, updateEvent } = useEvents(); // ✅ INSIDE COMPONENT

  const event = events.find((e) => e.id === String(id));

  if (!event) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Event not found</Text>
      </View>
    );
  }

  // DELETE
  const handleDelete = () => {
    deleteEvent(event.id);
    router.push("/events");
  };

  // SAVE
  const handleSave = () => {
    updateEvent({
      ...event,
      title: event.title + " (Updated)",
    });

    router.back();
  };

  return (
    <ScrollView style={{ padding: 20 }}>

      {/* IMAGE */}
      {event.image && (
        <Image
          source={{ uri: event.image }}
          style={{
            width: "20%",
            height: 300,
            borderRadius: 15,
          }}
          resizeMode="cover"
        />
      )}

      {/* INFO */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
        {event.title}
      </Text>

      <Text>📅 {event.date}</Text>
      <Text>📍 {event.location}</Text>
      <Text>🎨 {event.colorTheme}</Text>

      <Text style={{ marginTop: 10 }}>
        {event.description}
      </Text>

      {/* BUTTONS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >

        <TouchableOpacity
          onPress={handleDelete}
          style={{
            backgroundColor: "red",
            padding: 12,
            borderRadius: 10,
            width: "45%",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Delete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: "green",
            padding: 12,
            borderRadius: 10,
            width: "45%",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Save
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}