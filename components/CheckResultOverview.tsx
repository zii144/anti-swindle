import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface CheckResultOverviewProps {
  emoji: string;
  title: string;
  dangerousLevel: string;
  suggestion: string;
}

const CheckResultOverview: React.FC<CheckResultOverviewProps> = ({
  emoji,
  title,
  dangerousLevel,
  suggestion,
}) => {
  return (
    <LinearGradient
      colors={["#F5FBFC", "#F5F5F5"]} // Replace with your desired gradient colors
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.rectangle}></View>
      <Text style={styles.emoji}>{emoji}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dangerousLevel}>{dangerousLevel}</Text>
        <Text style={styles.suggestion}>{suggestion}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  rectangle: {
    width: "1%",
    height: "90%",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  emoji: {
    fontSize: 24,
    alignSelf: "center",
  },

  infoContainer: {
    flex: 1,
    gap: 3,
  },
  title: {
    color: "#2F373E",
    fontSize: 15,
    fontWeight: "bold",
  },
  dangerousLevel: {
    fontSize: 14,
    color: "red",
  },
  suggestion: {
    fontSize: 12,
    color: "gray",
  },
});

export default CheckResultOverview;
