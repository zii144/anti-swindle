import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
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
          <Text style={{ fontSize: 18 }}>永久免費</Text>
          <Text style={{ fontSize: 14, marginTop: 5, color: "gray" }}>
            為防止詐騙盡一份力
          </Text>
        </View>
      </View>

      <View style={styles.settingContentContainer}>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}
        >
          <Pressable style={styles.settingContentCard}>
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
              聯絡開發者
            </Text>
            <Ionicons name="chevron-forward" size={24} color="gray" />
          </Pressable>
        </View>
      </View>
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
});
