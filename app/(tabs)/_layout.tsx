import { HapticTab } from "@/components/HapticTab";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#F5F5F5", // màu nền tab bar
          height: 70, // chiều cao tab bar
          borderTopWidth: 0, // bỏ đường viền trên
        },
        tabBarActiveTintColor: "#0cd5d5", // màu icon/text khi active
        tabBarInactiveTintColor: "#667085", // màu icon/text khi inactive
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Lịch ca",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat connect",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comments-o" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Tài khoản",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
