import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { Card } from "../../components/Card";
import RecentCheck from "@/components/RecentCheck";
import AnalysisButton from "@/components/AnalysisButton";

export default function Index() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  const imageSources = [
    require("../../assets/images/swindle_everywhere.png"),
    require("../../assets/images/user_guildline.png"),
    require("../../assets/images/no_data_saved.png"),
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 20, gap: 10 }}
      >
        <Image
          source={require("../../assets/images/swindle_everywhere.png")}
          style={{
            width: screenWidth * 0.9,
            height: screenHeight * 0.7,
            borderRadius: 10,
            marginTop: 10,
            alignSelf: "center",
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/user_guildline.png")}
            style={{
              width: screenWidth * 0.9,
              height: screenHeight * 0.7,
              borderRadius: 10,
              marginTop: 10,
              alignSelf: "center",
              shadowColor: "#bbbbbb",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/no_data_saved.png")}
            style={{
              width: screenWidth * 0.9,
              height: screenHeight * 0.7,
              borderRadius: 10,
              marginTop: 10,
              alignSelf: "center",
            }}
          />
        </View>
        {imageSources.map((source, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={source} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <AnalysisButton screenWidth={screenWidth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    shadowColor: "#bbbbbb",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
