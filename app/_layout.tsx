import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title:"home", headerShown: false }} />
      <Stack.Screen name="profile/[id]" options={{ title: "Profile" }} />
    </Stack>
  );
}
