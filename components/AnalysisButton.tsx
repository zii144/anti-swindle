import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface AnalysisButtonProps {
  screenWidth: number;
}

export default function AnalysisButton({ screenWidth }: AnalysisButtonProps) {
  return (
    <LinearGradient
      colors={["#f7ba2c", "#ea5459"]}
      style={[styles.button, { width: screenWidth * 0.9 }]}
    >
      <Pressable onPress={() => alert("Button Pressed!")}>
        <Text style={styles.buttonText}>上傳新的對話紀錄</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    alignSelf: "center",
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
