import React, { createContext, useContext, useState } from "react";

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: "upcoming" | "past";
  image?: string;
  
  memories?: string[];
  colorTheme?: string;
category?: string;
time?: string;

};

type EventContextType = {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEvents = () => {
  const ctx = useContext(EventContext);
  if (!ctx) throw new Error("useEvents must be used inside provider");
  return ctx;
};

export default function EventProvider({ children }: any) {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Garden Party",
      description: "Outdoor summer season party. The garden party was a beautifully arranged outdoor event held in a natural and refreshing environment. The setup featured elegant decorations with fairy lights on trees, floral arrangements, and wooden-style seating that blended perfectly with the garden theme. The food table was neatly organized in a buffet style with starters, main courses, snacks, desserts, and drinks arranged for easy access. Soft lighting and background music created a calm and enjoyable atmosphere. Guests enjoyed the open space, fresh air, and well-planned setup, making the event a memorable and pleasant gathering.",
      date: "2026-06-10",
      location: "Garden",
      status: "past",
      
      image: "https://plus.unsplash.com/premium_photo-1664471482255-5a26bf122a82?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: "2",
      title: "Garden Birthday",
      description: "Outdoor birthday party",
      date: "2026-06-10",
      location: "Garden",
      status: "past",
      image: "https://media.istockphoto.com/id/1464259187/photo/creative-gender-neutral-baby-shower-or-birthday-decoration-in-the-garden-bohemian-style.webp?s=1024x1024&w=is&k=20&c=2cX9Tg3RRs8RYGCMVEDeR6CnkF35hFfeUldqHY64_UI=",
    },
     {
      id: "3",
      title: "Outdoor Event",
      description: "Outdoor  Event.The outdoor event was successfully organized in an open and spacious environment, creating a refreshing and lively experience for all attendees. The setup included simple yet elegant decorations such as string lights, banners, and natural elements that matched the outdoor setting. Seating was arranged comfortably to support both relaxation and interaction among guests. The food area was set up in a clean buffet style with clearly organized sections for starters, main courses, snacks, desserts, and drinks. With soft background music, proper lighting, and a well-managed layout, the event provided a pleasant and enjoyable atmosphere for everyone.",
      date: "2026-06-10",
      location: "Garden",
      status: "past",
      image: "https://media.istockphoto.com/id/2193590776/photo/beautiful-wedding-arch-on-the-beach.webp?s=1024x1024&w=is&k=20&c=41vH-5x10xf2QlwokWN7ZY4mjP39MCU5-h4wcef3I_M=",
    },
    {
      id: "4",
      title: "Dinner & Friends get together",
      description: "The Dinner & Friends Get Together was a warm and memorable gathering organized in a cozy and welcoming environment where guests enjoyed quality time, meaningful conversations, and a relaxing dinner experience. The event setup featured elegant table arrangements with soft lighting, decorative candles, and a comfortable seating layout that encouraged interaction among friends. The food table was arranged neatly with a variety of starters, main dishes, desserts, and beverages, allowing guests to enjoy the dinner comfortably. The atmosphere was enhanced with soft background music and stylish décor elements that created a pleasant and cheerful mood throughout the evening.",
      date: "2026-06-10",
      location: "At Home",
      status: "past",
      image: "https://images.unsplash.com/photo-1778694277039-5cbf0b9a1fcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      title: "House Party",
      description: "The upcoming house party is planned as a relaxed and lively gathering with a stylish yet casual table setup. The space will be decorated with fairy lights, colorful accents, and simple themed décor to create a fun and welcoming atmosphere. A buffet-style food arrangement will be set up with neatly organized starters, main dishes, snacks, desserts, and drinks for easy access. Comfortable seating and open space will encourage interaction and movement among guests. Soft music, warm lighting, and a well-arranged food table will together create an enjoyable and social environment for everyone.",
      date: "2026-06-25",
      location: "At Home",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1753105619712-4bf61810ef2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: "6",
      title: "Birthday",
      description: "The upcoming birthday celebration is planned as a vibrant and joyful event with a colorful and themed table setup. The dining or cake table will be decorated with balloons, fairy lights, and a matching color scheme, along with a beautifully arranged centerpiece to highlight the festive mood. The table will include a special cake display area, neatly arranged snacks, drinks, and desserts for guests to enjoy. Bright decorations, fun elements, and photo-friendly corners will create an energetic atmosphere. Overall, the setup is designed to make the birthday feel memorable, exciting, and visually appealing for everyone attending.",
      date: "2026-06-25",
      location: "Outdoor",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1774290687117-eb1769c33df3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: "7",
      title: "Dinner",
      description: "The upcoming dinner table is planned to be arranged in a clean, comfortable, and elegant style suitable for all guests. The table will be decorated with a simple runner or cloth matching the theme, a soft centerpiece like fresh flowers or candles, and neatly placed plates, glasses, and napkins to create a balanced and inviting look. Food will be organized in proper sections, starting with starters, followed by main courses, sides, and ending with desserts and drinks for easy access. Soft lighting and background music will enhance the atmosphere, making the dining experience warm, organized, and enjoyable for everyone.",
      date: "2026-06-25",
      location: "At home",
      status: "upcoming",
      image: "https://plus.unsplash.com/premium_photo-1755706181265-c91fa00bc7ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: "8",
      title: "Official Lunch",
      description: "The upcoming official lunch is planned as a professional and well-organized gathering designed to encourage smooth communication and a comfortable dining experience. The table setup will be clean and minimal, with a formal arrangement of plates, cutlery, glasses, and neatly placed napkins to maintain a professional look. A simple centerpiece and neutral table colors will be used to keep the decor elegant yet understated. The food will be arranged in an organized flow, including starters, main courses, sides, and desserts to ensure easy serving. Soft background ambiance and proper seating alignment will create a focused yet relaxed environment suitable for discussion and networking.",
      date: "2026-06-25",
      location: "At Team Leader's Home",
      status: "upcoming",
      image: "https://plus.unsplash.com/premium_photo-1674252314872-093823e65cb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
  ]);
   
  

  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  const updateEvent = (updated: Event) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === updated.id ? updated : e))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };
 

  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
}