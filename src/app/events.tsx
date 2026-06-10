import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export default function Events() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        gap: 15,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card
        title="Upcoming Events"
        color="#B5EAEA"
        onPress={() => router.push("/upcoming")}
      />

      <Card
        title="Past Events"
        color="#FFDAC1"
        onPress={() => router.push("/past")}
      />

      <Card
        title="Create Event"
        color="#FFB7B2"
        onPress={() => router.push("/add-event")}
      />

      <Card
        title="More detail about event planning"
        color="#C7CEEA"
        onPress={() => router.push("/event-guide")}
      />
    </ScrollView>
  );
}

function Card({ title, color, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 120,
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "600", color: "#333" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}