import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function CustomModal({ visible, onClose }: Props) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Đây là Popup từ Component
          </Text>
          <Button title="Đóng" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
});
