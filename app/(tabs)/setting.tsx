import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BlurView } from "expo-blur";

import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [isModalShow, setIsModalShow] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [isThankyouModalShow, setIsThankyouModalShow] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.tierCard}>
        <Ionicons
          name="star"
          size={24}
          color="orange"
          style={{ alignSelf: "center" }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>永久免費</Text>
          <Text style={{ fontSize: 14, marginTop: 8, color: "gray" }}>
            為防止詐騙盡一份力
          </Text>
        </View>
      </View>
      z
      <View style={styles.settingContentContainer}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}
        >
          <Pressable
            style={styles.settingContentCard}
            onPress={() => setIsModalShow(true)}
          >
            <Ionicons name="chatbox-ellipses" size={24} color="#007bff" />
            <Text style={{ fontSize: 18, alignSelf: "center", flex: 1 }}>
              提供意見
            </Text>
            <Ionicons name="chevron-forward" size={24} color="gray" />
          </Pressable>

          <Pressable style={styles.settingContentCard}>
            <Ionicons name="cafe" size={24} color="#007bff" />
            <Text style={{ fontSize: 18, alignSelf: "center", flex: 1 }}>
              請我喝杯咖啡
            </Text>
            <Ionicons name="chevron-forward" size={24} color="gray" />
          </Pressable>

          <Pressable style={styles.settingContentCard}>
            <Ionicons name="person-circle" size={24} color="#007bff" />
            <Text style={{ fontSize: 18, alignSelf: "center", flex: 1 }}>
              聯繫開發者
            </Text>
            <Ionicons name="chevron-forward" size={24} color="gray" />
          </Pressable>
        </View>
      </View>
      {/* Feedback modal */}
      <Modal visible={isModalShow} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.modalContent}
            >
              <Text style={styles.modalTitle}>提供您的意見</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="請輸入您的意見..."
                multiline
                value={feedback}
                onChangeText={setFeedback}
              />
              <View style={styles.buttonContainer}>
                <Button title="取消" onPress={() => setIsModalShow(false)} />
                <Button
                  title="送出"
                  onPress={() => {
                    console.log("User Feedback:", feedback);
                    setIsModalShow(false);
                    setFeedback("");
                    setIsThankyouModalShow(true);
                  }}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* Thank you modal */}
      <Modal visible={isThankyouModalShow} transparent animationType="fade">
        <View style={styles.overlay}>
          <BlurView intensity={50} style={styles.blurBackground}>
            <View style={styles.modalBox}>
              <Text style={styles.modalThankyouTitle}>感謝您的寶貴意見！</Text>
              <Button
                title="關閉"
                onPress={() => setIsThankyouModalShow(false)}
              />
            </View>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  tierCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FFFED8",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  settingContentContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  settingContentCard: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignContent: "center",
  },
  settingText: {
    fontSize: 18,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // Soft dimming effect
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  modalInput: {
    width: "100%",
    height: 100,
    backgroundColor: "#F5F5F7", // iOS light gray background
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  blurBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalBox: {
    alignSelf: "center",
    marginVertical: 200,
    width: 280,
    backgroundColor: "rgba(255,255,255,0.85)",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  modalThankyouTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
});
