import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { Card } from "../../components/Card";
import RecentCheck from "@/components/RecentCheck";
import AnalysisButton from "@/components/AnalysisButton";

export default function Index() {
  const { width: screenWidth } = Dimensions.get("window");
  const boxWidth = screenWidth * 0.9;
  const boxHeight = boxWidth * 1.1;

  const cards = [
    {
      title: "遠離詐騙風險",
      description: "使用我的人工智能檢測工具，快速識別潛在詐騙對話！",
      actionText: "立即檢測",
      gradient: ["#60efff", "#0061ff"] as const,
      icon: "🔒",
    },
    {
      title: "「疑似詐騙對話！」",
      description: "我們將檢測這個對話可能存在的風險！",
      actionText: "立即開始檢測",
      gradient: ["#40c9ff", "#e81cff"] as const,
      icon: "🚨",
    },
    {
      title: "「風險高的電話號碼！」",
      description: "分析聯絡人是否常見詐騙號碼！",
      actionText: "立即分析",
      gradient: ["#4dc9e6", "#210cae"] as const,
      icon: "📞",
    },
    {
      title: "黑名單管理",
      description: "管理您自訂的高風險號碼和網站列表，增強保護！",
      actionText: "管理黑名單",
      gradient: ["#ff9a9e", "#fad0c4"] as const,
      icon: "🛡️",
    },
    {
      title: "學習如何防詐騙",
      description: "掌握最新的詐騙手法與防護技巧，提升安全意識。",
      actionText: "開始學習",
      gradient: ["#f6d365", "#fda085"] as const,
      icon: "🧠",
    },
  ];

  return (
    <View style={styles.container}>
      <RecentCheck boxWidth={boxWidth} boxHeight={boxHeight} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>保障您的數位安全！</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  subHeader: {
    fontSize: 14,
    color: "#888",
    textAlign: "right",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});
