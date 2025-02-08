import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import { LINE_FRIEND_URL } from "@env";

const TierCard = () => (
  <View style={styles.tierCard}>
    <Ionicons
      name="star"
      size={24}
      color="orange"
      style={{ alignSelf: "center" }}
    />
    <View>
      <Text style={styles.tierText}>永久免費</Text>
      <Text style={styles.tierSubText}>為防止詐騙盡一份力</Text>
    </View>
  </View>
);

type SettingContentCardProps = {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  text: string;
  onPress: () => void;
};

const SettingContentCard = ({
  iconName,
  text,
  onPress,
}: SettingContentCardProps) => (
  <Pressable style={styles.settingContentCard} onPress={onPress}>
    <Ionicons name={iconName} size={24} color="#007bff" />
    <Text style={styles.settingContentCardText}>{text}</Text>
    <Ionicons name="chevron-forward" size={24} color="gray" />
  </Pressable>
);

type FeedbackModalProps = {
  visible: boolean;
  feedbackText: string;
  onChangeText: (text: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

const FeedbackModal = ({
  visible,
  feedbackText,
  onChangeText,
  onClose,
  onSubmit,
}: FeedbackModalProps) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.modalOverlay}>
          <BlurView intensity={100} style={styles.blurBackground}>
            <View
              style={[
                styles.modalBox,
                { width: screenWidth, height: screenHeight * 0.9 },
              ]}
            >
              <Pressable onPress={onClose}>
                <Text style={styles.modalCancelText}>取消</Text>
              </Pressable>
              <Ionicons
                name="chatbox-ellipses"
                size={60}
                color="#007bff"
                style={styles.modalIcon}
              />
              <Text style={styles.modalTitle}>提供意見</Text>
              <Text style={styles.modalSubtitle}>
                有任何意見或建議都可以告訴我，謝謝！
              </Text>
              <Text style={styles.modalSectionTitle}>我想說：</Text>
              <TextInput
                style={styles.textInputArea}
                multiline
                numberOfLines={4}
                onChangeText={onChangeText}
                value={feedbackText}
                enablesReturnKeyAutomatically={true}
                inputMode="text"
                keyboardAppearance="light"
              />
              <Pressable
                onPress={() => {
                  Alert.alert("感謝您的意見", "我會盡快處理您的回饋");
                  onSubmit();
                }}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>送出</Text>
              </Pressable>
            </View>
          </BlurView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const sendLineMessage = () => {
  const lineUrl = LINE_FRIEND_URL;

  Linking.openURL(lineUrl).catch((err) =>
    console.error("Failed to send LINE message:", err)
  );
};

export default function Index() {
  const [isInputShow, setIsInputShow] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackSubmit = () => {
    setIsInputShow(false);
    setFeedbackText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TierCard />
        <View style={styles.settingContentContainer}>
          <View style={styles.cardsWrapper}>
            <SettingContentCard
              iconName="chatbox-ellipses"
              text="提供意見"
              onPress={() => setIsInputShow(true)}
            />
            <SettingContentCard
              iconName="cafe"
              text="請我喝杯咖啡"
              onPress={() => {
                Alert.alert("謝謝您的支持", "後續會有更多功能");
              }}
            />
            <SettingContentCard
              iconName="person-circle"
              text="聯繫開發者"
              onPress={() => {
                sendLineMessage();
              }}
            />
          </View>
        </View>
        <FeedbackModal
          visible={isInputShow}
          feedbackText={feedbackText}
          onChangeText={setFeedbackText}
          onClose={() => setIsInputShow(false)}
          onSubmit={handleFeedbackSubmit}
        />
        <Text style={styles.versionText}>版本: 0.0.1</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  tierCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FFF9C9",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  tierText: {
    fontSize: 16,
  },
  tierSubText: {
    fontSize: 14,
    marginTop: 8,
    color: "gray",
  },
  settingContentContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  cardsWrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  settingContentCard: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  settingContentCardText: {
    fontSize: 18,
    flex: 1,
    textAlign: "left",
    paddingLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  blurBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "rgb(248, 248, 248)",
    padding: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  modalCancelText: {
    fontSize: 18,
    color: "rgb(0, 122, 255)",
    position: "absolute",
    top: -10,
    left: -10,
  },
  modalIcon: {
    marginTop: 50,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  modalSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  modalSectionTitle: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
  textInputArea: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
    height: 100,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 13,
    borderRadius: 12,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },
  versionText: {
    position: "absolute",
    bottom: 10,
    fontSize: 10,
  },
});
