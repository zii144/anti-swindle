import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth } = Dimensions.get("window");

// Card Responsive Design
const cardWidth = screenWidth * 0.5;
const cardHeight = cardWidth * 0.7;

interface CardProps {
  title: string;
  description: string;
  actionText: string;
  gradient: readonly [string, string];
  icon: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  actionText,
  gradient,
  icon,
}) => {
  return (
    <LinearGradient
      colors={gradient}
      style={[styles.card, { width: cardWidth, height: cardHeight }]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={styles.cardActionText}>{actionText}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "#282832",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    borderTopRightRadius: 40,
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 10,
    position: "relative",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cardDescription: {
    padding: 5,
    lineHeight: 16,
    fontSize: 12,
    color: "#fff",
  },
  cardActionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    marginBottom: 5,
  },
});
