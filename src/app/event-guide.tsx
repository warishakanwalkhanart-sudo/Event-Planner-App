import { Image, ScrollView, Text } from "react-native";

export default function EventGuide() {
  return (
    <ScrollView style={{ padding: 20, 
         paddingBottom: 40,
     }}>

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Event Planning Guide
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        {`
Planning any event becomes easy when you follow a structured approach.

1. Start with Basic Planning
- Event type
- Guests
- Budget
- Venue
- Time & date

2. Choose Theme
- Elegant
- Royal
- Garden
- Birthday
- Corporate

3. Decor Planning
🏠 Home Events
🌿 Garden Events
🏢 Office Events
🎉 Birthday Parties
        `}
      </Text>

      {/* DECOR IMAGE (after decor section) */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1694313271770-aaa9160a9991?q=80&w=687&auto=format&fit=crop"
        }}
        style={{
          width: "100%",
          height: 220,
          borderRadius: 15,
          marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        {`
4. Food Arrangement:
Start → Main → Desserts → Drinks
        `}
      </Text>

      {/* FOOD IMAGE */}
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1320397004/photo/open-air-buffet-table-glasses-and-sandwiches-on-skewers-before-the-start-of-the-holiday.webp?s=1024x1024&w=is&k=20&c=88g8feyOiCnORL2PRnt78DWtG84aKhR5hacSZXZCifA="
        }}
        style={{
          width: "100%",
          height: 220,
          borderRadius: 15,
          marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        {`
5. Seating Arrangement:
- Comfort is most important
        `}
      </Text>

      {/* SEATING IMAGE */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1766393195987-912865cbb81b?q=80&w=702&auto=format&fit=crop"
        }}
        style={{
          
         width: "100%",
          height: 220,
          borderRadius: 15,
          marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",  

        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        {`
6. Creative Additions
- Photo booth
- Music playlist
- Memory wall

7. Checklist
- Food ready
- Decor done
- Guests confirmed

Conclusion:
Planning is more important than money. Creativity makes events memorable.
        `}
      </Text>

    </ScrollView>
  );
}