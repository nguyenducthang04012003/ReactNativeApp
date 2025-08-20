import { View, Button, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import CustomModal from "@/components/ui/CustomModal";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams(); // lấy param trên URL
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Profile ID: {id}</Text>
      <Button title="Mở Popup" onPress={() => setShowModal(true)} />

      {/* Gọi popup component */}
      <CustomModal visible={showModal} onClose={() => setShowModal(false)} />

      
    </View>
  );
}
