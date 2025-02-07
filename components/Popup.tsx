import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { BlurView } from "expo-blur";

interface PopupProps {
  message?: string;
}

const Popup = forwardRef(
  (
    { message = "This is a smooth, organic-looking pop-up!" }: PopupProps,
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const scaleAnim = new Animated.Value(0.5); // Initial scale for animation

    const showPopup = () => {
      setVisible(true);
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        damping: 8,
        stiffness: 100,
      }).start();
    };

    const hidePopup = () => {
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    };

    useImperativeHandle(ref, () => ({
      showPopup,
    }));

    return (
      <View style={styles.container}>
        {/* iOS-Style Pop-Up Modal */}
        <Modal transparent visible={visible} animationType="fade">
          <View style={styles.overlay}>
            {/* Blur Effect */}
            <BlurView intensity={50} style={styles.blurBackground} />

            {/* Pop-Up Box */}
            <Animated.View
              style={[styles.popupBox, { transform: [{ scale: scaleAnim }] }]}
            >
              <Text style={styles.title}>未來將開放</Text>
              <Text style={styles.description}>{message}</Text>

              {/* Close Button */}
              <TouchableOpacity onPress={hidePopup} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>OK</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  popupBox: {
    width: 500,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default Popup;
