import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

function CustomCenterButton({ children, onPress }: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity
      style={styles.centerButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.centerIcon}>{children}</View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f2ededff",
          height: 70,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#0cd5d5",
        tabBarInactiveTintColor: "#667085",
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />

      {/* Nút giữa custom */}
      <Tabs.Screen
        name="center"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="leaf" color="#fff" size={26} />,
          tabBarButton: (props) => <CustomCenterButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat connect",
          headerShown: false,
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    top: -25, // nổi lên trên tab bar
    justifyContent: "center",
    alignItems: "center",
  },
  centerIcon: {
    width: 54,
    height: 54,
    borderRadius: 32.5,
    backgroundColor: "#0cd5d5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5, // Android
    paddingTop: 17,
  },
});
