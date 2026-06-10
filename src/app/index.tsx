import { router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: "https://plus.unsplash.com/premium_photo-1729163257698-46e2d17d7b45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          “Plan your events beautifully ✨”{"\n"}
          Simplifying events, amplifying joy
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/events")}
          style={{
            marginTop: 20,
            backgroundColor: "white",
            padding: 12,
            borderRadius: 10,
          }}
        >
          <Text>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}