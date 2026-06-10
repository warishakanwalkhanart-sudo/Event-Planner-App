import { router } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { useEvents } from "./context/EventContext";

export default function AddEvent() {
  const { addEvent } = useEvents();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [colorTheme, setColorTheme] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ScrollView style={{ padding: 20 }}>

      {/* HEADING */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Create Event
      </Text>

      {/* TITLE */}
      <TextInput
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
        style={input}
      />

      {/* LOCATION */}
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={input}
      />

      {/* CATEGORY */}
      <TextInput
        placeholder="Category (Birthday, Dinner...)"
        value={category}
        onChangeText={setCategory}
        style={input}
      />

      {/* COLOR THEME */}
      <TextInput
        placeholder="Color Theme"
        value={colorTheme}
        onChangeText={setColorTheme}
        style={input}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={{
          backgroundColor: "#333",
          padding: 14,
          borderRadius: 12,
          marginTop: 10,
        }}
        onPress={() => {
          addEvent({
            id: Date.now().toString(),

            title,

            description: `
This ${category} event is planned with a ${colorTheme} color theme at ${location}.

🎯 Event Management Instructions:

• Organize guests properly
• Keep entrance welcoming
• Match decor with ${colorTheme} theme
• Arrange seating comfortably
• Use proper lighting

🍽 Food Table Setup:
• Starters at beginning
• Main course in center
• Desserts & drinks separate
• Keep tissues nearby
• Use clean trays

🎨 Decor Suggestions:
• Theme-based decorations
• Fairy lights & flowers
• Matching table setup
• Photo corner for memories

This setup helps create a professional and memorable event experience.
            `,

            date: "2026-01-01",

            time: "12 PM",

            location,

            category,

            colorTheme,

            image:
              "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",

            status: "upcoming",
          });

          router.push("/upcoming");
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Save Event
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const input = {
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 12,
  borderRadius: 12,
  marginBottom: 15,
  backgroundColor: "#fff",
};